import { useState } from "react"

const SignIn = () => {
      const list=[
    {img:"/images/img_avatar1.png",name:"스티븐",jobs:"개발자",pwd:"123",gender:true, email: "jobs@shellfolder.com"},
    {img:"/images/img_avatar2.png",name:"에브릴",jobs:"가수",pwd:"456",gender:false, email: "lavigne@shellfolder.com" }    
    ]
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const submit = e => {
        e.preventDefault()
        console.log(e.target.email.value)
        if( (list[0].email === e.target.email.value && list[0].pwd === e.target.pwd.value) || (list[1].email === e.target.email.value && list[1].pwd === e.target.pwd.value) ) {
            console.log("환영합니다")
        } else{
            console.log("로그인에 실패하였습니다")
        }
    }
    return(
        <>
  <div className="container mt-3">
    <h1 className="text-center bg-success text-dark bg-opacity-50">SignIn</h1>
    <form onSubmit={submit}>
      <div className="mb-3 mt-3">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required
        readOnly={false} value={email} onChange={e=>setEmail(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" required
        readOnly={false} value={pwd} onChange={e=>setPwd(e.target.value)}/>
      </div>
      <div className="d-flex">
        <div className="p-2 flex-fill d-grid">
          <button type="submit" className="btn btn-warning">SignIn</button>
        </div>
        <div className="p-2 flex-fill d-grid">
          <a href="/signUp" className="btn btn-primary">SignUp</a>
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

export default SignIn