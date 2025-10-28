import React from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import SubjectCards from './components/SubjectCards.jsx'
import PracticeSection from './components/PracticeSection.jsx'
import ProgressBlock from './components/ProgressBlock.jsx'

export default function App() {
  return (
    <div className="app-root">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <h1 className="title">Ready to learn?</h1>
          <SubjectCards />
          <h2 className="subtitle">Today's Practice</h2>
          <PracticeSection />
          <h2 className="subtitle">New Courses</h2>
          <ProgressBlock />
        </div>
      </div>
    </div>
  )
}


