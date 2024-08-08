let Navbar = () => {
    return <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/index" className="navbar-brand">Bootstrap</a>
        <div className="ml-auto">
         <ul className="navbar-nav"></ul>
         <li><a href="/index" className="nav-link">Home</a></li>
         <li><a href="/index" className="nav-link">About</a></li>
         <li><a href="/index" className="nav-link">Services</a></li>
         <li><a href="/index" className="nav-link">Contact</a></li>
        </div>
    </nav>
}

export default Navbar