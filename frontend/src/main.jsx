import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './containers/Login.jsx'
import Dashboard from './containers/Dashboard.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* <App /> */}
  //   { <Login />}
  // </StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

)
