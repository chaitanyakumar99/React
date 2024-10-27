import React from 'react'

class Navbar extends React.Component {
    render() {
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <a className='navbar-brand' href="#">React Example</a>
            <div className='ml-auto'>
              <ul className='navbar-nav'>
                <li className='nav-list'><a className='nav-link' href="#">Home</a></li>
                <li className='nav-list'><a className='nav-link' href="#">About</a></li>
                <li className='nav-list'><a className='nav-link' href="#">Contact</a></li>
                <li className='nav-list'><a className='nav-link' href="#">Services</a></li>
              </ul>
            </div>
        </nav>
    }
}
export default Navbar