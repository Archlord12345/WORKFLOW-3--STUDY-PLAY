import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="brand">
        <img src="/images/Logo_Study_Play.png" alt="Study Play" className="logo" />
        <div className="brand-name">STUDY PLAY</div>
      </div>
      <nav className="nav">
        {[
          { label: 'Home', icon: '🏠', to: '/' },
          { label: 'Courses', icon: '🎓', to: '/courses' },
          { label: 'Practice', icon: '✏️', to: '/practice' },
          { label: 'Achievements', icon: '🏆', to: '/achievements' },
          { label: 'Settings', icon: '⚙️', to: '/settings' }
        ].map(item => (
          <NavLink key={item.label} to={item.to} className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <span className="nav-icon" aria-hidden>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <button className="close-drawer" onClick={onClose} aria-label="Close menu">✕</button>
    </aside>
  )
}


