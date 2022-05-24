import './sectionApresentacao.css';
import woman from '../../img/woman.svg'

const SectionApresentacao = () =>{
    return(
        <div className='section__container'>
            <div className='section__container__text'>
                <p className='section__text'>O seu banco de contas digitais na palma da sua mão!</p>
                <a className='section__button' href="">Saiba mais</a>
            </div>
            <img className='section__image' src={woman}/>
        </div>
    );
}


export default SectionApresentacao;