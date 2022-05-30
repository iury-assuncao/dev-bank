import { Link } from "react-router-dom"
import logo from "../../img/devBank-logo.png"
import { useContext, useEffect, useState } from "react"
import { RiFileList3Line } from 'react-icons/ri'
import { BiTransfer } from 'react-icons/bi'
import { BsCashCoin, BsCashStack } from 'react-icons/bs'
import { MenuContext } from "../../contexts/menu"

import "./menu.css"

const Menu = () => {
    const [active, setActive] = useState(false);

    const { linkSelected, changeSelectedLink } = useContext(MenuContext)

    const toggleMode = () => {
        setActive(!active);
    }

    useEffect(() => {
        const changeLink = () => {
            changeSelectedLink()
        }

        changeLink()
    }, [linkSelected])

    return (
        <div className="nav__content">
           <div className={active ? 'mobile__menu active' : 'mobile__menu'} onClick={toggleMode}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className={active ? 'menu__container active' : 'menu__container'} onClick={toggleMode}>
                <img src={logo} className="menu__logo" alt="Logo DevBank" />

                <nav className="menu">
                    <Link to="extrato" id="extrato" className="menu__link">
                        <RiFileList3Line className="menu__icon" />
                        <span className="menu__span">Extrato</span>
                    </Link>
                    <Link to="saque" id="saque" className="menu__link">
                        <BsCashCoin className="menu__icon" />
                        <span className="menu__span">Saque</span>
                    </Link>
                    <Link to="deposito" id="deposito" className="menu__link">
                        <BsCashStack className="menu__icon" />
                        <span className="menu__span">Depósito</span>
                    </Link>
                    <Link to="transferencia" id="transferencia" className="menu__link">
                        <BiTransfer className="menu__icon" />
                        <span className="menu__span">Transferência</span>
                    </Link>
                </nav>
            </div>
        </div>
      
    )
}

export default Menu