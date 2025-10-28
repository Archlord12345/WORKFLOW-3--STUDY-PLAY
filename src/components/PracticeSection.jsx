import React from 'react'
import { useNavigate } from 'react-router-dom'

const items = [
  { label: 'Daily Review', icon: '⭐' },
  { label: 'New Words', icon: '🌟', highlight: true },
  { label: 'Music Theory', icon: '📄' },
  { label: 'Grammar Challenge', icon: '📚' }
]

export default function PracticeSection() {
  const navigate = useNavigate()
  return (
    <div className="practice">
      {items.map(i => (
        <button key={i.label} className={`pill ${i.highlight ? 'pill-primary' : ''}`} onClick={() => navigate('/practice')}>
          <span className="pill-icon" aria-hidden>{i.icon}</span>
          <span>{i.label}</span>
        </button>
      ))}
    </div>
  )
}


