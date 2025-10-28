import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'

const container = document.getElementById('root')
const root = createRoot(container)
// Apply saved theme or prefers-color-scheme
const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
if ((saved === 'dark') || (!saved && prefersDark)) {
  document.documentElement.classList.add('dark')
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Register service worker (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}


