import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="search">
        <span className="search-icon">🔍</span>
        <input className="search-input" placeholder="Search" />
      </div>
      <button className="avatar" aria-label="Profile">👤</button>
    </header>
  )
}


