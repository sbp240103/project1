import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext.jsx';
import CaptainContext from './context/CapatainContext.jsx';
import SocketProvider from './context/SocketContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="590577612365-ha7qrqb1ebd1v7mjv9ramlk73ctk9k10.apps.googleusercontent.com">
    <CaptainContext>
      <UserContext>
        <SocketProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SocketProvider>
      </UserContext>
    </CaptainContext>
  </GoogleOAuthProvider>
)
