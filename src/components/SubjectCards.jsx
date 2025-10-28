import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProgressBar({ value, color }) {
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${value}%`, background: color }} />
    </div>
  )
}

const subjects = [
  { name: 'Math', level: 3, progress: 75, color: 'var(--primary)', icon: '🧮' },
  { name: 'History', level: 2, progress: 30, color: 'var(--primary-2)', icon: '📖' },
  { name: 'English', level: 4, progress: 10, color: 'var(--accent)', icon: '💬' },
  { name: 'Science', level: 1, progress: 10, color: '#22C55E', icon: '🧪' }
]

export default function SubjectCards() {
  const navigate = useNavigate()
  return (
    <div className="cards">
      {subjects.map(s => (
        <div key={s.name} className="card" role="button" onClick={() => navigate(`/subject/${encodeURIComponent(s.name.toLowerCase())}`)}>
          <div className="card-title">
            <span className="card-icon" aria-hidden>{s.icon}</span>
            <span>{s.name}</span>
          </div>
          <div className="card-sub">Level {s.level}</div>
          <ProgressBar value={s.progress} color={s.color} />
        </div>
      ))}
    </div>
  )
}


