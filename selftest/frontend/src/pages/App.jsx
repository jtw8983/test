import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router";
import Home from "@/pages/Home.jsx"
import Login from "@/pages/Login.jsx"
import Signup from "@/pages/Signup.jsx"
import NotFound from "@/pages/NotFound.jsx"
import Nav from '@pages/Nav.jsx'




const App = () => {
  const paths = [
    {path: "/", element: <Home />},
    {path: "/login", element: <Login />},
    {path: "/signup", element: <Signup />},
    {path: "*", element: <NotFound />},
  ]
  return (
    <>
        <Nav />
        <Routes>
          { paths?.map((v, i) => <Route key={i} path={v.path} element={v.element} />) }
        </Routes>
    </>
  )
}

export default App