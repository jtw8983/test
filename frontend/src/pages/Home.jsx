import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  // 1. "내"가 직접 서버에 물어보기
  useEffect(() => {
    axios.get('/me')
      .then(res => setIsLogin(res.data.isLogin))
      .catch(() => setIsLogin(false));
  }, []);

  // 2. 로그아웃도 직접 처리
  const handleLogout = () => {
    axios.post('/logout').then(() => {
      setIsLogin(false);
      navigate('/login');
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{isLogin ? "환영합니다!" : "로그인 체크 중.."}</h1>
      {isLogin && <button onClick={handleLogout}>로그아웃</button>}
      {!isLogin && <button onClick={() => navigate('/login')}>로그인하러 가기</button>}
    </div>
  );
};

export default Home;