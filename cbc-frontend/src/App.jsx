/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Testing from './components/testing'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/testing" element={<Testing />} />
       <Route path="/login" element={<LoginPage />} />
     </Routes>
   </BrowserRouter>
    </>
  )
}

export default App;
