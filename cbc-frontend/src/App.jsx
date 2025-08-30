/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black-100 h-[100vh]  ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/admin/*" element={<AdminPanel />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  