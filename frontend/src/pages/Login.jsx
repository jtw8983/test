import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  // 입력값을 저장할 바구니들
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // 로그인 로직
const handleLogin = () => {
  // 백엔드 LoginModel의 변수명(email, pwd)과 똑같이 맞춰줘야 합니다.
  axios.post('/login', { 
      email: id,  
      pwd: pw     
  })
  .then((res) => {
    // 서버가 {"status": true}를 주는지 확인 후 이동하는 것이 더 정확합니다.
    if (res.data.status) {
      alert("로그인 성공!");
      navigate('/');
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  })
  .catch((err) => {
    console.error(err);
    alert("로그인 중 오류가 발생했습니다.");
  });
};

  // 로그아웃 로직 (로그인 페이지에서도 로그아웃할 수 있게 추가)
  const handleLogout = () => {
    axios.post('/logout').then(() => {
      alert("로그아웃 되었습니다.");
      setId(''); // 입력창 비우기
      setPw('');
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>로그인 </h1>
      
      {/* 입력창 구역 */}
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="text" placeholder="아이디" 
          value={id} onChange={(e) => setId(e.target.value)} 
        /><br />
        <input 
          type="password" placeholder="비밀번호" 
          value={pw} onChange={(e) => setPw(e.target.value)} 
        />
      </div>

      {/* 버튼 구역 */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={handleLogin}>로그인</button>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
      <p onClick={() => navigate('/')} style={{ cursor: 'pointer', color: 'black'}}>
        홈으로 돌아가기
      </p>
    </div>
  );
};

export default Login;