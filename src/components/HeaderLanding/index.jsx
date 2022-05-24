import './headerLanding.css';
import logo from '../../img/devBank-logo.png';
import { Link } from "react-router-dom";

const HeaderLanding = () => {
    return(
        <header className="header__landing">

            <img src={logo} className="logo__header" alt="Logo DevBank"/>

            <nav>
                <ul className="ul__header">
                    <li><Link to="/login" className="link__login">Login</Link></li>
                    <li><Link to="/register" className="link__cadastre-se">Cadastre-se</Link></li>
                </ul>

            </nav>
        
        
        </header>
    )
}

export default HeaderLanding