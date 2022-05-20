import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

import Loading from "../Loading"

import './transferencia.css';

const Transferencia = () => {

    const [value, setValue] = useState()
    const [recipient, setRecipient] = useState()

    const { loading, transfer, balance } = useContext(AuthContext)

    const handleTransfer = async (e) => {
        e.preventDefault();

        //setValue((value).toFixed(2))

        if (value < balance) return
        
        transfer(recipient, value)
    }

    return(
        <div className='container__transfer'>
            {
                loading
                ? <Loading />
                :
                <form className='transfer' onSubmit={handleTransfer}>
                    <label className='transfer__text'>Qual é o valor da transferência?</label>
                    <input className='transfer__input__value' value={value} onChange={e => setValue(parseFloat(e.target.value))} type="number" placeholder='0,00' />

                    <label className='transfer__text__recipient'>Para quem deseja fazer a transferência?</label>
                    <input className='transfer__input__recipient' value={recipient} onChange={e => setRecipient((e.target.value).trim())} type="text" placeholder='CPF do destinatário' />

                    <button className={((value <= 0 || isNaN(value)) && recipient === "") ? 'transfer__button deposit__button--disable' : 'transfer__button'} disabled={((value <= 0 || isNaN(value)) && recipient === "")}>Confirmar</button>
                </form>
            }
        </div>
    )
}

export default Transferencia;