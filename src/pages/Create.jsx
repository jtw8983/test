import { useState } from "react"
import { useNavigate } from "react-router"

const Create = () => {

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [gender, setGender] = useState(true)
    const close = () => navigate("/")

    const onSubmit = (e) =>{
        e.preventDefault()
        const data = {name, email, pwd, gender, regDate: getData()}

    }
    
    const getData =()=>{
        const now = new Date()
        const year = now.getFullYear()
        const month = String(now.getMonth()+1).padStart(2,'0')
        const day = String(now.getDate()).padStart(2,'0')
        return `${year}-${month}-${day}`
        
    }

    const checkBoolean = () =>{
        if(e.target.value === "1")
            setGender(true)
        else{
            setGender(false)
        }
    }

  return (
    <div className="container mt-3">
	  <h1 className="display-1 text-center">생성 화면</h1>
		<form onSubmit={onSubmit}>
		  <div className="mb-3 mt-3">
		    <label htmlFor="name" className="form-label">이름:</label>
		    <input type="text" className="form-control" id="name" placeholder="이름을 입력하세요." name="name" readOnly={false} value={name} onChange={e=>setName(e.target.value)} />
		  </div>
		  <div className="mb-3 mt-3">
		    <label htmlFor="email" className="form-label">이메일:</label>
		    <input type="email" className="form-control" id="email" placeholder="이메일를 입력하세요." name="email" readOnly={false} value={email} onChange={e=>setEmail(e.target.value)} />
		  </div>
		  <div class="mb-3">
		    <label htmlFor="pwd" className="form-label">비밀번호:</label>
		    <input type="password" className="form-control" id="pwd" placeholder="비밀번호를 입력하세요." name="pwd" readOnly={false} value={pwd} onChange={e=>setPwd(e.target.value)} />
		  </div>
			<div className="d-flex">
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="radio1" name="optradio" value="1" checked={gender} readOnly={false} onChange={checkBoolean} />남성
					<label className="form-check-label" htmlFor="radio1"></label>
				</div>
			  </div>
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="radio2" name="optradio" value="2"checked={!gender} readOnly={false} onChange={checkBoolean}/>여성
					<label className="form-check-label" htmlFor="radio2"></label>
				</div>
			  </div>
			</div>
		</form>
		<div className="d-flex">
		  <div className="p-2 flex-fill d-grid">
				<a href="Select.html" className="btn btn-primary">생성</a>
		  </div>
		  <div className="p-2 flex-fill d-grid">
				<a href="List.html" className="btn btn-primary" onClick ={close}>취소</a>
		  </div>
		</div>
	</div>
  )
}
export default Create