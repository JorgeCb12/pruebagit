import { Link } from "react-router-dom"
import logo from '../assets/Gaslur.png';


const Header = () => {
    return (

        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="menu">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="my-profile">MY PROFILE</Link></li>
                    <li><Link to="my-activity">ACTIVITY</Link></li>
                    <li><Link to="">HOW IT WORKS</Link></li>
                </ul>
            </nav>
            <div className="botones">
                <button className="btn btn-create">CREATE</button>
                 <button className="btn btn-login"><Link to="login">Logout</Link></button>
            </div>
        </header>

    )
}

export default Header
