import {Link} from 'react-router-dom'

function Header() {
    return(
        <div className="header">
            <ul>
                <li className="menu-item header-title">
                    <Link to="/">
                        Representative Finder
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/search">
                        Search
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/signin">
                        Sign In
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header