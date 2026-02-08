from fastapi import FastAPI, Response, Cookie, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime, timedelta, timezone
from jose import jwt,JWTError
from db import findOne, save,add_key
import uuid

app = FastAPI()


# 1. JWT 및 쿠키 설정
SECRET_KEY = "your-extremely-secure-random-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


# 2. 리액트 연결 설정 (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3.  로그인/회원가입 입력 모델
class LoginModel(BaseModel):
    email: str
    pwd: str
    
class SignUpModel(BaseModel):
    name: str
    email: str
    pwd: str
    gender: bool    

# 4.토큰 만들기
def set_token(user_no: int,email:str):
    try:
        iat=datetime.now(timezone.utc)+ (timedelta(hours=7))
        exp =iat+(timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
        data={
            "sub": str(user_no),
            "email":email,
            "iss": "EDU", 
            "iat": iat,
            "exp": exp
        }
        id= uuid.uuid4().hex
        token = jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
        sql = f"INSERT INTO edu.`login` (`id`, `userNo`, `token`) VALUES ('{id}', {user_no}, '{token}')"
        if save(sql): return id
    except JWTError as e:
        print(f"JWT ERROR : {e}")
    return None

    

@app.post("/login")
def login(model: LoginModel, response: Response):
    sql_check = f"SELECT no FROM edu.`user` WHERE email = '{model.email}' AND password = '{model.pwd}'"
    user = findOne(sql_check)
    
    if not user:
        return {"status": False, "message": "이메일 또는 비밀번호가 틀렸습니다."}
    # 1. 입력받은 이메일(model.email)로 토큰 생성
    access_token = set_token(user['no'],model.email)
    
    # 2. 쿠키 발급
    response.set_cookie(
        key="user",
        value=access_token,
        httponly=True, # 자바스크립트가 쿠키를 훔쳐가지 못하게 방어
        max_age=ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        samesite="lax",
        secure=False, # HTTPS 환경이라면 True로 변경하세요
    )   
    return {"status": True}

@app.put("/signup")
def sign_up(model: SignUpModel, response: Response):
    # 1. 회원 정보 저장 (edu.user 테이블이 있다고 가정)
    # gender는 DB 타입에 따라 0/1 또는 true/false로 변환 필요
    sql = f"INSERT INTO edu.`user` (`name`, `email`, `password`, `gender`) VALUES ('{model.name}', '{model.email}', '{model.pwd}', {model.gender})"

    if save(sql):
        # 2. 방금 가입한 유저의 번호를 가져오거나 생성 (여기선 예시로 999)
        # 3. 가입 즉시 로그인 처리 (토큰 발급)
            sql_find = f"SELECT no FROM edu.`user` WHERE email = '{model.email}'"
            user_data = findOne(sql_find)
            
            if user_data:
                new_user_no = user_data['no']
                # 3. 찾아온 번호로 토큰 발급
                access_token = set_token(new_user_no, model.email)
                
                if access_token:
                    response.set_cookie(
                    key="user",
                    value=access_token,
                    max_age=60 * 60,
                    expires=60 * 60,
                    # path="/",
                    # domain="react",
                    secure=False,
                    httponly=True,
                    samesite="lax",
                    )   
                    return {"status": True}
    return {"status": False, "message": "사용자 등록 중 오류가 발생 하였습니다."}

        
@app.get("/me")
def get_user(user: str = Cookie(None)):
  if user:
    sql = f"select * from edu.`login` where `id` = '{user}'"
    result = findOne(sql)
    if result:
      return jwt.decode(result["token"], SECRET_KEY, algorithms=[ALGORITHM])
  return None

@app.post("/logout")
def logout(response: Response):
    response.delete_cookie(key="user",path="/")
    return {"status": True}

