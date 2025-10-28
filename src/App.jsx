import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import SubjectCards from './components/SubjectCards.jsx'
import PracticeSection from './components/PracticeSection.jsx'
import ProgressBlock from './components/ProgressBlock.jsx'
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="app-root">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="main">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/subject/:name" element={<SubjectPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)} />}
    </div>
  )
}

function Home(){
  return (
    <>
      <h1 className="title">Ready to learn?</h1>
      <SubjectCards />
      <h2 className="subtitle">Today's Practice</h2>
      <PracticeSection />
      <h2 className="subtitle">New Courses</h2>
      <ProgressBlock />
    </>
  )
}

function Courses(){
  return <h1 className="title">Courses</h1>
}

function Practice(){
  return <h1 className="title">Practice</h1>
}

function Achievements(){
  return <h1 className="title">Achievements</h1>
}

function Settings(){
  return <h1 className="title">Settings</h1>
}

function SubjectPage(){
  return <h1 className="title">Subject</h1>
}

function SearchPage(){
  const [params] = useSearchParams()
  const q = params.get('q') || ''
  return <h1 className="title">Search: {q}</h1>
}


