import { useState } from "react"
import { useNavigate} from "react-router"
import { useAuth } from '@hooks/AuthProvider.jsx'
import { api } from '@utils/network.js'
const Signup = () =>{
	const [name, setName]=useState("")
	const [email, setEmail]=useState("")
	const [pwd, setPwd]=useState("")
	const [gender, setGender]=useState(true)
	const {setAuth}= useAuth()
	const navigate = useNavigate()
	const submitEvent = e => {
		e.preventDefault()
		const params = { name, email, pwd, gender }
		// 1. 서버의 "/signUp" 주소로 회원가입 정보(params)를 실어서 PUT 요청을 보냅니다.
		api.put("/signup", params)
		// 2. 서버로부터 응답(res)이 도착하면 실행됩니다.
		.then(res => {
		// 3. 서버가 보낸 데이터 중 status가 true(가입 성공)인지 확인합니다.
		  if(res.data.status) {
			// 4. 가입에 성공했다면, setAuth를 통해 즉시 로그인 상태로 변경합니다.
			setAuth(res.data.status);
			alert("회원가입을 환영합니다!");
			navigate("/");
			// 5. 가입에 실패했다면 (예: 이미 존재하는 이메일 등)
		  } else {
			// 6. 서버가 보내준 실패 메시지를 알림창으로 띄웁니다.
			alert(res.data.message);
			// 7. 다시 입력할 수 있도록 모든 입력값(이름, 이메일, 비번, 성별)을 비우거나 초기화합니다.
			setName("");
			setEmail("");
			setPwd("");
			setGender(true);
		  }
		})
		// 8. 네트워크 연결 끊김 등 서버 통신 자체가 실패했을 때 에러를 콘솔에 찍습니다.
		.catch(err => console.error(err))
	  }
      return (
		<>
    	<div className="container mt-3">
			<h1 className="display-1 text-center">회원가입</h1>
			<form onSubmit={submitEvent}>
				<div className="mb-3 mt-3">
					<label htmlFor="name" className="form-label">이름:</label>
					<input type="text" className="form-control" id="name" placeholder="이름을 입력하세요." name="name" value={name} onChange={e=>setName(e.target.value)} autoComplete='off' required={true} />
				</div>
				<div className="mb-3 mt-3">
					<label htmlFor="email" className="form-label">이메일:</label>
					<input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" value={email} onChange={e=>setEmail(e.target.value)}  autoComplete='off' required={true} />
				</div>
				<div className="mb-3">
					<label htmlFor="pwd" className="form-label">비밀번호:</label>
					<input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" value={pwd} onChange={e=>setPwd(e.target.value)}  autoComplete='off' required={true} />
				</div>
				<div className="d-flex">
					<div className="p-2 flex-fill">
						<div className="form-check">
							<input type="radio" className="form-check-input" id="radio1" name="gender" value="1" checked={gender} onChange={()=>setGender(true)} />남성
							<label className="form-check-label" htmlFor="radio1"></label>
						</div>
					</div>
					<div className="p-2 flex-fill">
						<div className="form-check">
							<input type="radio" className="form-check-input" id="radio2" name="gender" value="2" checked={!gender} onChange={()=>setGender(false)} />여성
							<label className="form-check-label" htmlFor="radio2"></label>
						</div>
					</div>
				</div>
        		<div className="d-flex">
          			<div className="p-2 flex-fill d-grid">
            		<button type="submit" className="btn btn-primary">가입</button>
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

export default Signup