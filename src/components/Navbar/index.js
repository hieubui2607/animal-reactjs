import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
    const history = useNavigate();
    const location = useLocation();
    
    const handleLogout = () => {
        localStorage.clear();
        history("/login")
    }

    return (
        <>
            <div className="navbar-header">
            <input type="checkbox" className='nav__input' name="" id="nav__input"/>
            <nav className="nav__pc">
                <ul className="nav__list">
                    <Link to="/animals"><li className='navbar-header_link'>Home</li></Link>
                    <li className='navbar-header_link'>Product</li>
                    <li className='navbar-header_link'>Pricing</li>
                    <li className='navbar-header_link'>Contact</li>
                    {location.pathname === "/animals"? <li className='navbar-header_link'><button className='btn-logout' onClick={handleLogout}>Logout</button></li> : null}
                </ul>
            </nav>
            <label htmlFor="nav__input" className="nav__bar-btn">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            </label>
            <label htmlFor="nav__input" className="nav__overlay">
            </label>
            <nav  className="nav__mobile">
                <ul className="nav__mobile-list">
                    <li className='navbar-header_link'>Home</li>
                    <li className='navbar-header_link'>Product</li>
                    <li className='navbar-header_link'>Pricing</li>
                    <li className='navbar-header_link pr-10'>Contact</li>
                    {location.pathname === "/animals"? <li className='navbar-header_link'><button className='btn-logout' onClick={handleLogout}>Logout</button></li> : null}
                </ul>
                <label htmlFor="nav__input" className="nav__mobile-btn">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                </label>
            </nav>
            </div>
        </>
        
    )
}

export default Navbar