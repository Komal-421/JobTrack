import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Features from './components/Features'
import Working from './components/Working'
import Stories from './components/Stories'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/working" element={<Working />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App