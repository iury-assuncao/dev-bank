import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { MenuContext } from "../../contexts/menu";

import Loading from "../Loading"

import './transferencia.css';

const Transferencia = () => {

    const [value, setValue] = useState("")
    const [recipient, setRecipient] = useState("")

    const { user: { cpf }, loading, operation } = useContext(AuthContext)
    const { setLinkSelected } = useContext(MenuContext)

    const handleTransfer = async (e) => {
        e.preventDefault();

        const data = {
            remetente: cpf,
            destinatario: recipient,
            valor: value.toFixed(2)
        }

        operation("transf", data)
    }

    const handleChangeValue = (e) => {
        if (e === "") {
            setValue("")
        }
        else {
            setValue(parseFloat(e))
        }
    }

    useEffect(() => setLinkSelected("transferencia"), [])

    return(
        <div className='container__transfer'>
            {
                loading
                ? <Loading />
                :
                <form className='transfer' onSubmit={handleTransfer}>
                    <label className='transfer__text'>Qual é o valor da transferência?</label>
                    <input className='transfer__input__value' value={value} onChange={e => handleChangeValue(e.target.value)} type="number" placeholder='0,00' />

                    <label className='transfer__text__recipient'>Para quem deseja fazer a transferência?</label>
                    <input className='transfer__input__recipient' value={recipient} onChange={e => setRecipient((e.target.value).trim())} type="text" placeholder='CPF do destinatário' />

                    <button className='transfer__button' disabled={value <= 0 || isNaN(value) || recipient === ""}>Transferir</button>
                </form>
            }
        </div>
    )
}

export default Transferencia;