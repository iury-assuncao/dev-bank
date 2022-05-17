import { Link } from "react-router-dom"
import logo from "../../img/devBank-logo.png"

import { RiFileList3Line } from 'react-icons/ri'
import { BsCashCoin, BsCashStack, BsCreditCard } from 'react-icons/bs'

import "./menu.css"

const Menu = () => {
    return (
        <div className="menu__container">
            <img src={logo} className="menu__logo" alt="Logo DevBank" />

            <nav className="menu">
                <Link to="" className="menu__link">
                    <RiFileList3Line className="menu__icon" />
                    <span className="menu__span">Extrato</span>
                </Link>
                <Link to="" className="menu__link">
                    <BsCashCoin className="menu__icon" />
                    <span className="menu__span">Saque</span>
                </Link>
                <Link to="" className="menu__link">
                    <BsCashStack className="menu__icon" />
                    <span className="menu__span">Depósito</span>
                </Link>
                <Link to="" className="menu__link">
                    <BsCreditCard className="menu__icon" />
                    <span className="menu__span">Cartões</span>
                </Link>
            </nav>
        </div>
    )
}

export default Menu