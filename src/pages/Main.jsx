import { useNavigate } from "react-router"


const Main = () => {
  const nav = useNavigate()
  const Click = i => {nav(`/user/${i}`)}
  // const Onclick
 
  const list=[
{img:"/images/img_avatar1.png",name:"스티븐",jobs:"개발자",pwd:"123",gender:true, email: "jobs@shellfolder.com"},
{img:"/images/img_avatar2.png",name:"에브릴",jobs:"가수",pwd:"456",gender:false, email: "lavigne@shellfolder.com" }    
  ]
  return (
      <>
    <h1 className="text-center bg-success text-dark bg-opacity-50">MAIN</h1>
    <div className="btn-group">
      <a className="btn btn-warning" href="/signIn">SignIn</a>
      <a className="btn btn-primary" href="/SignUp">SignUp</a>
    </div>

    
   
    <div className="row mt-2">
     {list.map((v,i)=>{
      return(
      <div key={i} className="col-12 col-md-6 col-lg-4 mb-3">
        <div className="card">
          <img className="card-img-top" src={list[i].img} alt="Card image"/>
          <div className="card-body">
            <h4 className="card-title">{list[i].name}</h4>
            <p className="card-text">{list[i].jobs}</p>
            <button className="btn btn-primary" onClick={()=>Click(i)}>See Profile</button>
          </div>
        </div>
      </div>
       )
    })
    }
    </div> 
  </>
  ) 
}
export default Main