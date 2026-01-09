import { useState } from "react"

const SignUp1 = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pwd, setPWd] = useState("")
    const [job, setJob] = useState("")
    const [gender, setGender] = useState(true)

    const checkBoolean = e =>{
        if(e.target.value === "1"){
            setGender(true)
        } else {
            setGender(false)
        }
    }

    const onSubmit = e =>{
        e.preventDefault() // 있으면 버튼 클릭 시 새로고침X 되게함, 브라우저 동작 막음
        const data= {name, email, pwd, job, gender}
        console.log(data)
    }


    return(
        <>
    <div classNameName="container mt-3">
    <h1 classNameName="text-center bg-success text-dark bg-opacity-50">SignUp1</h1>
    <form onSubmit={onSubmit}>
      <div classNameName="mb-3 mt-3">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" required readOnly={false} value={name} onChange={e=>setName(e.target.value)}/>
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required readOnly={false} value={email} onChange={e=>setEmail(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" required readOnly={false} value={pwd} onChange={e=>setPwd(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="job">Job:</label>
        <input type="text" className="form-control" id="job" placeholder="Enter job" name="job" readOnly={false} value={job} onChange={e=>setJob(e.target.value)}/>
      </div>
      <div className="d-flex">
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="radio1" name="gender" value="1" checked={gender} readOnly={false} onChange={e=>checkBoolean(e.target.value)}/>남성
					<label className="form-check-label" htmlFor="radio1"></label>
				</div>
			  </div>
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="radio2" name="gender" value="2" checked={!gender} readOnly={false} onChange={checkBoolean}/>여성
					<label className="form-check-label" htmlfor="radio2"></label>
				</div>
			  </div>
			</div>
      <div className="d-flex">
        <div className="p-2 flex-fill d-grid">
          <button type="submit" className="btn btn-primary">SignUp</button>
        </div>
        <div className="p-2 flex-fill d-grid">
          <a href="/" className="btn btn-danger">Cancel</a>
        </div>
      </div>
    </form>
  </div>
    </>
) 
}
export default SignUp1