import React from 'react'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src="/images/Logo_Study_Play.png" alt="Study Play" className="logo" />
        <div className="brand-name">STUDY PLAY</div>
      </div>
      <nav className="nav">
        {[
          { label: 'Home', icon: '🏠' },
          { label: 'Courses', icon: '🎓' },
          { label: 'Practice', icon: '✏️' },
          { label: 'Achievements', icon: '🏆' },
          { label: 'Settings', icon: '⚙️' }
        ].map(item => (
          <button key={item.label} className="nav-item">
            <span className="nav-icon" aria-hidden>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}


