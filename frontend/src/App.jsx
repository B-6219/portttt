import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-dark-surface min-h-screen'>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        {/* <Route path='/' element={ } /> */}
      </Routes>

      <Footer className='bg-dark-surface border-t border-white/10' />

    </div>
  )
}

export default App