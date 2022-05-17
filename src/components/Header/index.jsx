import './header.css';
import { FiSettings } from "react-icons/fi";

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
                <FiSettings className="setting__icon" />
            </div>
        </header>
        
    )

}

export default Header;