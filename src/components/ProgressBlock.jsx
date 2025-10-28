import React from 'react'

export default function ProgressBlock() {
  return (
    <div className="progress-block">
      <div className="progress-title">Your Progress</div>
      <div className="progress-stats">
        <div className="stat"><span className="stat-icon">⭐</span> Total XP: 1,200</div>
        <div className="stat"><span className="stat-icon">🎵</span> Coding Basics</div>
        <div className="stat"><span className="stat-icon">🔥</span> Courses: 8</div>
        <div className="stat"><span className="stat-icon">📆</span> Streak: 5 days</div>
      </div>
    </div>
  )
}


