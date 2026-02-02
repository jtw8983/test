from fastapi import FastAPI, Response, Cookie, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime, timedelta, timezone
from jose import jwt
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

# 3.  로그인 입력 모델
class LoginModel(BaseModel):
    email: str
    pwd: str
    
# 4.토큰 만들기
def set_token(name: str):
    iat = datetime.now(timezone.utc) + (timedelta(hours=7))
    exp = iat + (timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    data = {
        "name": name, 
        "iss":"team1",
        "iat": iat,
        "exp": exp
    }
    id = uuid.uuid4().hex
    return jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)

# 5. 토큰 검사하기 (Depends용)
def verify_user(user: str = Cookie(None)):
    if not user: 
        return None
    try:
        return jwt.decode(user, SECRET_KEY, algorithms=[ALGORITHM])
    except:
        return None

# --- [기능 엔드포인트] ---

@app.post("/login")
def login(model: LoginModel, response: Response):
    if model.email != "admin" or model.pwd != "1234":
        return {"status": False}

    # 2. 토큰 생성 및 쿠키 발급
    access_token = set_token("장태원")
    response.set_cookie(
        key="user",
        value=access_token,
        httponly=True,
        max_age=ACCESS_TOKEN_EXPIRE_MINUTES * 60,
        samesite="lax",
        secure=False,
    )   
    return {"status": True}

@app.get("/me")
def me(user: str = Cookie(None)):
    if not user:
        return {"status": False}
    try:
        # 쿠키로 받은 토큰 해독
        payload = jwt.decode(user, SECRET_KEY, algorithms=[ALGORITHM])
        return {"status": True, "name": payload["name"]}
    except:
        return {"status": False}

@app.post("/logout")
def logout(response: Response):
    response.delete_cookie(key="user",path="/")
    return {"status": True}