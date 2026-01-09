import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

const User = () => {
    const list=[
{img:"/images/img_avatar1.png",name:"스티븐",jobs:"개발자",pwd:"123",gender:true, email: "jobs@shellfolder.com" },
{img:"/images/img_avatar2.png",name:"에브릴",jobs:"가수",pwd:"456",gender:false ,email: "lavigne@shellfolder.com" }    
  ]
    const Param = useParams()
    const nav = useNavigate()
    // const [data, setData] = useState({img:"",name:"",jobs:"",pwd:"",gender:true })
    const [name, setName] = useState("")
    const [img, setImg] = useState("/images/img_avatar1.png")
    const [jobs, setJobs] = useState("")
    const [pwd, setPwd] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState(true)
    const checkBoolean = e =>{
        if(e.target.value === "1") {
            setGender(true) 
            setImg("/images/img_avatar1.png")            
            
        }else{
          setGender(false) 
          setImg("/images/img_avatar2.png") 
        }
    }
    const onSubmit = e => {
        e.preventDefault()
        const A = {name,email,pwd,jobs,gender,img}
        console.log(A)
    }
    useEffect(()=>{
    //     setName(list[Param.i].name)
    //     setImg(list[Param.i].img)
    //     setJobs(list[Param.i].jobs)
    //     setPwd(list[Param.i].pwd)
    //    setEmail(list[Param.i].email)
    //    setGender(list[Param.i].gender)


    },[])



  return (

   <div className="container mt-3">
    <h1 className="text-center bg-success text-dark bg-opacity-50">User</h1>
    <img src={img} className="d-block mx-auto mt-3 profile-image" /> 
    <form onSubmit={onSubmit}>
      <div className="mb-3 mt-3">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" required readOnly={true} defaultValue={name} />
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required readOnly={true} defaultValue={email} />
      </div>
      <div className="mb-3">
        <label htmlFor="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" required readOnly={true} defaultValue={pwd} />
      </div>
      <div className="mb-3">
        <label htmlFor="job">Job:</label>
        <input type="text" className="form-control" id="job" placeholder="Enter job" name="job" readOnly={false} value={jobs} onChange={e=>setJobs(e.target.value)} />    </div>
      <div className="d-flex">
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="gender1" name="gender" value="1" checked={gender} onChange={checkBoolean} />남성
					<label className="form-check-label" htmlFor="gender1"></label>
				</div>
			  </div>
			  <div className="p-2 flex-fill">
			  	<div className="form-check">
					<input type="radio" className="form-check-input" id="gender2" name="gender" value="2" checked={!gender} onChange={checkBoolean} />여성
					<label className="form-check-label" htmlFor="gender2"></label>
				</div>
			  </div>
			</div>
      <div className="d-flex">
        <div className="p-2 flex-fill d-grid">
          <button type="submit" className="btn btn-success">Edit</button>
        </div>
        <div className="p-2 flex-fill d-grid">
          <a href="/" className="btn btn-danger">Cancel</a>
        </div>
      </div>
    </form>
  </div>
  )
}
export default User