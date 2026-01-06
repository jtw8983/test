import { useNavigate } from "react-router"

const List = () => {
    const navigate  = useNavigate()
    const arr = [
        {"name":"스티븐", "email":"jobs@shellfolder.com","regDate": "2023-02-28", "pwd":"1","gender":true},
        {"name":"에브릴", "email":"lavigne@shellfolder.com","regDate": "2023-02-27<", "pwd":"2","gender":false}
    ]

    const styles = {cursor: "pointer"}

    const onClick = (data) => navigate('/detail',{state: data})


  return (

    <div className="container mt-3">
	  <h1 className="text-center">목록 화면</h1>
	  <div className="btn-group">
	    <a href="Create.html" className="btn btn-primary">사용자 추가</a>
	  </div>
	  <table className="table table-hover mt-3">
	    <thead className="table-dark">
	      <tr>
	      	<th>이름</th>
	        <th>이메일</th>
	        <th>가입날짜</th>
	      </tr>
	    </thead>
	    <tbody>
            {
                arr.map((v,i)=>
                
                <tr style={styles} onClick ={()=>onClick(v)} key={i}>
	      	    <th>{v.name}</th>
	            <th>{v.email}</th>
	            <th>{v.regDate}</th>
	            </tr>
                )
            }
	    </tbody>
	  </table>
	</div>
  )
}
export default List