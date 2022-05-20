import './transferencia.css';

const Transferencia = () => {
    return(
        <div className='container__transfer'>
                        <form className='transfer'>
                            <p className='transfer__text'>Qual é o valor da transferência?</p>
                            <input className='transfer__input__value' type="number" placeholder='0,00' />
                            <p className='transfer__text__recipient'>Para quem deseja fazer a transferência?</p>
                            <input className='transfer__input__recipient' type="text" placeholder='CPF do destinatário' />
                            <button className='transfer__button'>Confirmar</button>
                        </form>
                    </div>
    )
}

export default Transferencia;