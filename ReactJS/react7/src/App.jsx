import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import SignIn from './Pages/SignIn'
import Registraction from './Pages/Registraction'
import User from './Users/User'
import Navbar from './Navbar/Navbar'

const App = () => {
  return <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='users' element={<User/>}/>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='services' element={<Services />} />
        <Route path='registraction' element={<Registraction />} />
        <Route path='signin' element={<SignIn />} />
      </Routes>

    </BrowserRouter>

  </div>

}

export default App