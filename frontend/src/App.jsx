import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from '@pages/Home.jsx';
import Login from '@pages/Login.jsx';

axios.defaults.baseURL = 'http://localhost:8000'; // 서버 주소
axios.defaults.withCredentials = true;           // 쿠키 전송 허용

const App = () => {
  const paths = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {paths.map((v, i) => <Route key={i} path={v.path} element={v.element} />)}
      </Routes>
    </BrowserRouter>
  );
};

export default App;