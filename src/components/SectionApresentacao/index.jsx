import './sectionApresentacao.css';
import woman from '../../img/woman.svg'

const SectionApresentacao = () =>{
    return(
        <section className='section__container' id='presentation'>
            <div className='section__container__text'>
                <h1 className='section__text'>O seu banco na palma da sua mão!</h1>
                <a className='section__button' href="#sobre" rel="noreferrer">Saiba mais</a>
            </div>
            <div className='section__image'>
                <img src={woman} alt="Mulher alegre com o celular"/>
            </div>
        </section>
    );
}


export default SectionApresentacao;