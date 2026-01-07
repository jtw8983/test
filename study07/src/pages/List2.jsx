import "@/list.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { list } from "@/data1.js"

const List2 = () =>{
    const navigate = useNavigate()
    const [arr, setArr] = useState([])
    const [state, setState] = useState("")
    const onClick = () => navigate(`/detail/${i}`)
    

    useEffect(()=>{
        if(state === 1 || state === 2){
            setArr(list.filter(row => row.accept === state))
        } else {
            setArr([...list])
        }
    },[state])
    
    return (
    <>
    <div class="container mt-3">
        <h1 class="text-center bg-success text-dark bg-opacity-50">LIST</h1>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <a href="#" class="btn btn-secondary">전체</a>
            <a href="?accept=1" class="btn btn-success">승인</a>
            <a href="?accept=0" class="btn btn-warning">미승인</a>
            <a href="create.html" class="btn btn-primary">추가</a>
        </div>
        <div class="list-group mt-2 text-center">
          	<a class="list-group-item m-1 display-6 list-group-item-success" href="detail.html">아이템1</a>
          	<a class="list-group-item m-1 display-6 list-group-item-warning" href="detail.html">아이템2</a>
        </div>
    </div>
    </>
    )
}
export default List2