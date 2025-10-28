import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header({ onMenuClick }) {
  const navigate = useNavigate()
  const toggleTheme = () => {
    const next = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
  return (
    <header className="header">
      <button className="burger" aria-label="Open menu" onClick={onMenuClick}>☰</button>
      <div className="search">
        <span className="search-icon">🔍</span>
        <input className="search-input" placeholder="Search" onKeyDown={(e)=>{ if(e.key==='Enter'){ const q=e.currentTarget.value; navigate(`/search?q=${encodeURIComponent(q)}`) } }} />
      </div>
      <button className="theme" onClick={toggleTheme} aria-label="Toggle theme">🌓</button>
      <button className="avatar" aria-label="Profile">👤</button>
    </header>
  )
}


