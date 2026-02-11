import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LifeStory from './LifeStory.jsx'
import Memories from './Memories.jsx'
import PersonalMemories from './PersonalMemories.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/dadi">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lifestory" element={<LifeStory />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/manan" element={<PersonalMemories />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
