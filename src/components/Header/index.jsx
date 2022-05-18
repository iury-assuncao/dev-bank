import './header.css';
import { FiSettings } from "react-icons/fi";
import { BiExit } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";



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
                    <ul class="dropdown-content">
                        <li>
                            <FaUserEdit className="icon" />
                            <span>Editar perfil</span>
                        </li>
                        <li><BiExit className="icon"/>Sair</li>
                    </ul>
                </div>  
                
            </div>
        </header>
        
    )

}

export default Header;