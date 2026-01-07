import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import { list } from "@/data1.js"

const Detail2 = () =>{

    const navigate = useNavigate()
    const params = useParams()
    const [title, setTitle] = useState()
    const [content, setContent] = useState("")
    const [accept, setAccept] = useState(0)
    const [isEdit, setIsEdit] = useState(true)
    const close = () => navigate("/")
    const onSubmit = e =>{
        e.preventDefault()
        if(!isEdit) return
        const data = {title, content, accept}
        console.log(data)
    }

    useEffect(()=>{
        const data = list[params.id]
        if(data === undefined) return close()
        setTitle(data?.title)
        setContent(data?.content)
        setAccept(data?.accept)
    })

    
    return(
    <>
    <div className="container mt-3">
        <h1 className="text-center bg-success text-dark bg-opacity-50">DETAIL</h1>
        <form onSubmit={onsubmit}>
            <div className="mb-3 mt-3">
              <label htmlFor="title" className="form-label">Title:</label>
              <input type="text" className="form-control" id="title" placeholder="Enter title" name="title" required autocomplete="off" value=""/>
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content:</label>
              <input type="text" className="form-control" id="content" placeholder="Enter content" name="content" autocomplete="off" value=""/>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary me-md-2" type="submit" onClick= {()=>setIsEdit(!isEdit)}>{isEdit ? "수정":"저장"}</button>
                {
                (accept === 1) ?
                <button className="btn btn-warning" type="button" onClick= {()=>setAccept(0)}>미승인</button> :
                <button className="btn btn-success" type="button" onClick= {()=>setAccept(1)}>승인</button>
                }
                <button className="btn btn-secondary" type="button" onClick={close}>취소</button>
                         
            </div>
        </form>
    </div>
        
        
        
        
        
        
        
        
        
        
    


    </>
    )
}
export default Detail2