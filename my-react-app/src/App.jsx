import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import SearchAnim from './pages/SearchAnim.jsx';

function App() {

  return (
    <BrowserRouter>
      <nav className ="navbar">
        <div className = "nav-links">
          <Link to ="/home">Home</Link>
          <Link to ="/searchAnim">SearchAnim</Link>
          </div>
      </nav>
      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/searchAnim" element={ <SearchAnim /> } />
      </Routes>
    </BrowserRouter>

  )
}

export default App
