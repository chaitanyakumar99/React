// import React from 'react'

// const Navabar = () => {
//     return (
//         <div>
//             <h2>Navabar Component</h2>
//         </div>
//     )
// }

// export default Navabar

let Navabar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/index" className="navbar-brand">BoootStrap</a>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li><a href="/index" className="nav-link">Home</a></li>
                <li><a href="/index" className="nav-link">About</a></li>
                <li><a href="/index" className="nav-link">Services</a></li>
                <li><a href="/index" className="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>
}

export default Navabar