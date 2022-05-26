import './headerLanding.css';
import logo from '../../img/devBank-logo.png';
import { Link } from "react-router-dom";
import { useState } from 'react';

const HeaderLanding = () => {
    const [active, setActive] = useState(false);
    const toggleMode = () => {
        setActive(!active);
    }
    
    return(
        <header className="header__landing">

            <img src={logo} className="logo__header" alt="Logo DevBank"/>

            <div className={active ? 'mobile__menu active' : 'mobile__menu'} onClick={toggleMode}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <nav class={active ? 'nav__list active' : 'nav__list'}>
                <ul className="ul__header">
                    <li><Link to="/login" className="link__login">Login</Link></li>
                    <li><Link to="/register" className="link__cadastre-se">Cadastre-se</Link></li>
                </ul>

            </nav>
        
        
        </header>
    )
}

export default HeaderLanding