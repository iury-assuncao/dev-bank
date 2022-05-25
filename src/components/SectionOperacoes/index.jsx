import './sectionOperacoes.css';
import mulher from '../../img/mulher.svg'

const SectionOperacoes = () =>{
    return(
        <div className='container__operations'>
            <img src={mulher} alt="Mulher com o celular"/>
            <div className='operations'>
                <h2 className='operations__title'>Operações ilimitadas</h2>
                <span className='operations__text'>Saque</span>
                <span className='operations__text'>Depósito</span>
                <span className='operations__text'>Transferência</span>
            </div>
        </div>
    );
}

export default SectionOperacoes