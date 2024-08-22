import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Services from './Components/Services'
import About from './Components/About'


let App = () => {
    return <div>
        <h1>This is a App component</h1>
        <Router>
            <nav className="navbar navabar-dark bg-dark navbar-expand-lg">
                <a href="">Logo</a>
                <div className="ml-auto">

                    <ul className="navbar-nav">
                        <li><Link to="/index" className="nav-link">Home</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                        <li><Link to="/services" className="nav-link">Services</Link></li>
                        <li><Link to="/Contact" className="nav-link">Contact</Link></li>

                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path='index' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='services' element={<Services />} />
                <Route path='Contact' element={<Contact />} />
            </Routes>
        </Router>



    </div>
}
export default App