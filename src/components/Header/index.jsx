import './header.css';

import { FiSettings } from "react-icons/fi";
import { MdOutlineExitToApp } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
    

    return(
        <header>
             
            <div>
                <span className="balance">Saldo</span>
                <span className="balance__rs">R$</span>
                <span className="balance__value">654,00</span>
            </div>

            <div className="user__options">
                <div className="user">
                    <span className="user__hello">Olá,</span>
                    <span className="name__user">Fulano</span>
                </div>
                <div className="line"></div>

                <div class="dropdown">
                    <FiSettings className="setting__icon" />

                    <div class="dropdown-content">

                        <Link to="edituser" className="drop__link">
                            <FaUserEdit className="icon" />
                            <span className="drop__span">Editar Perfil</span>
                        </Link>

                        <Link to="/" className="drop__link"> 
                            <MdOutlineExitToApp className="icon"/>
                            <span className="drop__span">Sair</span>
                        </Link>

                        
                    </div>
                </div>  
                
            </div>
        </header>
        
    )

}

export default Header;