import { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Home, About, Projects, Contact } from './page'

function App() {

  return (
    <main className='bg-slate-300/90 min-h-screen'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
