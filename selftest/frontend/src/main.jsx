import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx' // @pages 대신 ./pages로 변경
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AuthProvider from './hooks/AuthProvider.jsx' // @hooks 대신 ./hooks로 변경
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')).render(
    <CookiesProvider defaultSetOptions={{ path: '/', maxAge: (60 * 60 * 24), secure: false, sameSite: 'lax' }}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </CookiesProvider>
)
/*<app/> 이 부분이 이게 AuthProvider의 children 부분*/
