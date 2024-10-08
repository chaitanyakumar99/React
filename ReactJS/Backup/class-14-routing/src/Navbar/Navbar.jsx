import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='index' className="navbar-brand">Logo</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li><Link to='/users' className="nav-link">Users</Link></li>
                <li><Link to='/home' className="nav-link">Home</Link></li>
                <li><Link to='/about' className="nav-link">About</Link></li>
                <li><Link to='/services' className="nav-link">Services</Link></li>
                <li><Link to='/contact' className="nav-link">Contact</Link></li>
                <li><Link to='/registraction' className="nav-link">Registration</Link></li>
                <li><Link to='/sigin' className="nav-link">Sigin</Link></li>

            </ul>

        </div>
    </nav>

}

export default Navbar