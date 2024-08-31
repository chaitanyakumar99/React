import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Products/Home'
import Product from './Components/Products/Product'
import Admin from './Components/Products/Admin'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/index' element={<Home />}></Route>
            <Route path='/products' element={<Product />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
        </Routes>
    </Router>
  )
}

export default App