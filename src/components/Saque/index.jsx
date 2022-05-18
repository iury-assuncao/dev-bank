import './saque.css';


const Saque = () => {
    return(
        <div className='container__withdraw'>
            <form className='withdraw'>
                <p className='withdraw__text'>Qual é o valor do seu saque?</p>
                <input className='withdraw__input' type="text" placeholder='0,00' />
                <button className='withdraw__button' type='submit'>Sacar</button>
            </form>
        </div>
    )
}

export default Saque;