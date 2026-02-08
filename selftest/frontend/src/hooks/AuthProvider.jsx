import { createContext, useContext,useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies} from "react-cookie";
import { api }from "../utils/network.js"
/* 1. 학교 중앙 게시판 만들기 */
/* AuthContext = 게시판 이름표 */
/* Provider = 게시판에 공지 붙이기 */
/* useContext = 게시판 보러 가기 */
/* 목적: 로그인 상태 같은 전역 데이터를 여기저기 전달하지 않고 필요한 곳에 바로 가져다 쓰기 위해 사용!*/

export const AuthContext = createContext() 


/* 2. AuthProvider는 선물 상자, {Children}은 상자 안에 담긴 선물들*/

const AuthProvider = ({children}) => {     /*AuthProvider 안에 넣은 모든 컴포넌트들을 받아오는 것*/
    const[isLogin,setIsLogin]= useState(false)
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['ck']); 
    /*cookies: 현재 저장된 모든 쿠키들, setCookie: 쿠키 저장하기, removeCookie: 쿠키 삭제*/ 


    /*3. setAuth - 로그인하기 */
    const setAuth = status =>{
        localStorage.setItem("user",status) /*<1> 브라우저에 저장*/
        setIsLogin(status)                  /*<2> 상태 변경 */
        navigate("/")                       /*<3> 홈으로 이동*/
    }

    /*4. clearAuth - 로그인 정보 지우기*/
    const clearAuth = () => {
    localStorage.removeItem("user")         /*<1> 저장된 정보 삭제*/
    setIsLogin(false)                       /*<2> 로그아웃 상태로 변경*/
    navigate("/")                           /*<3> 홈으로 이동*/
  }


    /*4. removeAuth - 로그아웃하기*/
    const removeAuth = () => {
      api.post("/logout")
        .then(res => {
        // setIsLogin(false)는 clearAuth() 안에 이미 있으므로 생략 가능합니다.
        if(res.data.status) clearAuth();
    })
    .catch(err => {console.error(err);
        clearAuth(); 
    });
};

    /*5. checkAuth - 로그인 확인하기*/
    const checkAuth = () => {
    return localStorage.getItem("user") ? true : false /*localStorage에 "user"가 있으면 true, 없으면 false*/
  }

    /*6. useEffect - 실행 한번만, 출입구에서 회원증 확인*/
    useEffect(() => {
        if(localStorage.getItem("user")) setIsLogin(true)
      }, [])
 

     /*7. 다른 곳에서 사용할 수 있게 공유 */ 
    return (
        <AuthContext.Provider value={{ isLogin, setAuth, removeAuth, clearAuth, checkAuth }}>
            {children}
        </AuthContext.Provider>
    )
    /*AuthContext.Provider는 도서관, values는 빌려올 수 있는 책들 */
}
    /*8. 편하게 가져다 쓰기- 바로가기 버튼*/

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
