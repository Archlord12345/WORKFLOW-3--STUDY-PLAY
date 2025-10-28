import React from 'react'

function ProgressBar({ value, color }) {
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${value}%`, background: color }} />
    </div>
  )
}

const subjects = [
  { name: 'Math', level: 3, progress: 75, color: '#3B82F6', icon: '🧮' },
  { name: 'History', level: 2, progress: 30, color: '#8B5CF6', icon: '📖' },
  { name: 'English', level: 4, progress: 10, color: '#F97316', icon: '💬' },
  { name: 'Science', level: 1, progress: 10, color: '#22C55E', icon: '🧪' }
]

export default function SubjectCards() {
  return (
    <div className="cards">
      {subjects.map(s => (
        <div key={s.name} className="card">
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


