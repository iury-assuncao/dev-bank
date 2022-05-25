import './sectionOperacoes.css';
import mulher from '../../img/mulher.svg'

const SectionOperacoes = () =>{
    return(
        <div className='container__operations'>
            <img src={mulher} />
            <div className='operations'>
                <p className='operations__title'>Operações ilimitadas</p>
                <p className='operations__text__withdraw'>Saque</p>
                <p className='operations__text__deposit'>Depósito</p>
                <p className='operations__text__transfer'>Transferência</p>
            </div>
        </div>
    );
}

export default SectionOperacoes