import './deposito.css';


const Deposito = () => {
    return(
        <div className='container__deposit'>
            <form className='deposit'>
                <p className='deposit__text'>Qual é o valor do seu deposito?</p>
                <input className='deposit__input' type="text" placeholder='0,00' />
                <button className='deposit__button' type='submit'>Depositar</button>
            </form>
        </div>
    )
}

export default Deposito;