import {useNavigate} from "react-router"
import { useAuth } from '@hooks/AuthProvider.jsx'
import { api } from '@utils/network.js'
const Login = () =>{
	const { setAuth }=useAuth()
	const navigate = useNavigate()

	const submitEvent = e =>{
		e.preventDefault()

		const loginData ={
		"email": e.target.email.value,
		"pwd":e.target.pwd.value
		}
	


	// 1. 서버의 /login 주소로 사용자의 로그인 데이터(아이디, 비번 등)를 담아 우체통(POST)에 넣습니다.
		api.post("/login", loginData)
		// 2. 서버에서 대답(res)이 돌아왔을 때 실행됩니다.
			.then(res=> {
			// 3. 서버가 "로그인 성공!"(status가 true)이라고 답했는지 확인합니다.
				if(res.data.status) {
				// 4. 성공했다면, 우리 앱의 인증 상태(Auth)를 true(로그인됨)로 바꿉니다.
				setAuth(res.data.status)

			// 5. 서버가 "로그인 실패"라고 답했다면 (아이디/비번 틀림 등)	
				} else{
				// 6. 서버가 보내준 실패 메시지(예: "비밀번호가 틀렸습니다")를 알림창으로 띄웁니다.
				alert(res.data.message)
				// 7. 다음 입력을 위해 이메일과 비밀번호 입력창을 깨끗하게 비웁니다.
				e.target.email.value=""
				e.target.pwd.value=""
				} 
			})
			.catch(err=> console.error(err))
	}

    return(
    <>
    <div className="container mt-3">
			<h1 className="display-1 text-center">로그인</h1>
			<form onSubmit={submitEvent}>
				<div className="mb-3 mt-3">
					<label htmlFor="email" className="form-label">이메일</label>
					<input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" required={true} autoComplete="off" />
				</div>
				<div className="mb-3">
					<label htmlFor="pwd" className="form-label">비밀번호</label>
					<input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" required={true} autoComplete="off" />
				</div>
        <div className="d-flex">
          <div className="p-2 flex-fill d-grid">
            <button type="submit" className="btn btn-primary">로그인</button>
          </div>
          <div className="p-2 flex-fill d-grid">
            <button type="button" className="btn btn-primary" onClick={()=>navigate("/")}>취소</button>
          </div>
        </div>
			</form>
		</div>
    </>
  )
}
export default Login