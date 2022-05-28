import { FiSettings } from "react-icons/fi";
import { MdOutlineExitToApp } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth';
import { toast } from "react-toastify";

import './header.css';

const Header = () => {
    const { balance, user: { nome }, logout, getBalance } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }

    const linkDisabled = () => {
        toast.info("Opção ainda em construção!")
    }

    // CARREGAR SALDO
    useEffect(() => {
        const loadBalance = async () => {
            await getBalance()
        }

        loadBalance()
    }, [])

    const userName = nome.split(" ")[0]
 
    return(
        <header>
            <section>
                <span className="balance">Saldo</span>
                <span className="balance__rs">R$</span>
                <span className="balance__value">{balance}</span>
            </section>

            <section className="user__options">
                <div className="user">
                    <span className="user__hello">Olá,</span>
                    <span className="name__user">{userName}</span>
                </div>
                <div className="line"></div>

                <div className="dropdown">
                    <FiSettings className="setting__icon" />

                    <div className="dropdown-content">

                        <Link to="#" className="drop__link" onClick={() => linkDisabled()}>
                            <FaUserEdit className="icon" />
                            <span className="drop__span">Editar Perfil</span>
                        </Link>

                        <Link to="/" onClick={() => handleLogout()} className="drop__link"> 
                            <MdOutlineExitToApp className="icon"/>
                            <span className="drop__span">Sair</span>
                        </Link>

                        
                    </div>
                </div>  
            </section>
        </header>
        
    )

}

export default Header;