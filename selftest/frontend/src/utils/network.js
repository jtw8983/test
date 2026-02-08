import axios from "axios"

export const api = axios.create({ /*매번 전화번호를 누르기 귀찮으니, 기본 설정이 완료된 **전용 전화기(api)**를 한 대 뽑는 것입니다. */
  baseURL: import.meta.env.VITE_APP_FASTAPI_URL || "http://localhost:8000", /*상대방의 기본 주소입니다. 실제 서버 주소(VITE_APP_FASTAPI_URL)가 있으면 그걸 쓰고, 없으면 내 컴퓨터(localhost:8000)로 연결하라는 뜻입니다.*/
  withCredentials: true, /*"신분증(쿠키/인증정보) 지참" 옵션입니다. 로그인 상태를 유지하기 위해 서버와 통신할 때마다 쿠키를 자동으로 주고받겠다는 아주 중요한 설정입니다. */
  headers: {
    "Content-Type": "application/json", /*우리는 앞으로 JSON이라는 언어로만 대화하자"*라고 상호 약속을 하는 설정입니다. */
  },
})
