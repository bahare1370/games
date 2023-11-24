import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Logo
                    </a>
                    <a className="navbar-brand" href="#">
                        خانه
                    </a>
                    <Link className="navbar-brand" to="/store">
                        فروشگاه
                    </Link>
                    <a className="navbar-brand" href="#">
                        خرید
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
