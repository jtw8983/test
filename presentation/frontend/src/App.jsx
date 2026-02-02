import React, { useEffect, useState } from 'react';
// import React from 'react';
import axios from 'axios';

// 모든 요청에 쿠키 포함 설정
// axios.defaults.withCredentials = true;

function App() {
  // 임시로 상태를 고정합니다 (true: 로그인 상태, false: 로그아웃 상태)
  const isUserLoggedIn = false; 
   const paths = [
    {path: "/", element: <Home />},
    {path: "/login", element: <Login />},
   ]
  return (
    <div style={{ padding: '20px' }}>
      <h1>자동 로그인 테스트</h1>
      
      {isUserLoggedIn ? (
        <div>
          <p>반갑습니다, 장태원님!</p>
          <button onClick={() => alert('로그아웃 클릭!')}>로그아웃</button>
        </div>
      ) : (
        <div>
          <p>로그인이 필요합니다.</p>
          <button onClick={() => alert('로그인 클릭!')}>로그인</button>
        </div>
      )}
    </div>
  );
}

export default App;