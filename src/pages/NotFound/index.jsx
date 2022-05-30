import { Link } from 'react-router-dom';
import './notfound.css';
import Logo from '../../img/devBank-logo.png';
import imgErro from '../../img/error.png';
import { AiFillHome } from "react-icons/ai";

const NotFound = () => {
    return (
        <div className='erro__404'>

        <header className='header'>
            <img src={Logo} alt="Logo Dashboard"></img>
        </header>

        <section>
            <h1 className='title'> Erro 404</h1>

            <div className='error__content'>
                <div className='text__left'>
                    <h2>Opss... Página não encontrada</h2>
                    <p>A página que você está procurando pode ter sido removida ou renomeada</p>

                    <Link to="/" className='home__link'>
                        <AiFillHome className='icon' />
                        <span>Voltar para o início</span>
                    </Link>
                </div>
                
                <img src={imgErro} alt="Imagem de erro"/>
            </div>

        </section>
    
    </div>
    )
}

export default NotFound