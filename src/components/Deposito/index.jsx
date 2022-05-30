import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { MenuContext } from "../../contexts/menu";

import Loading from "../Loading"

import './deposito.css';

const Deposito = () => {

    const [value, setValue] = useState("")

    const { user: { cpf }, loading, operation } = useContext(AuthContext)
    const { setLinkSelected } = useContext(MenuContext)

    const handleOperation = async (e) => {
        e.preventDefault()

        const data = {
            remetente: "12345678912",
            destinatario: cpf,
            valor: value.toFixed(2)
        }

        await operation("deposit", data)
    }

    const handleChangeValue = (e) => {
        if (e === "") {
            setValue("")
        }
        else {
            setValue(parseFloat(e))
        }
    }

    useEffect(() => setLinkSelected("deposito"), [])

    return(
        <>
            {
                loading
                ? <Loading />
                :
                    <div className='container__deposit'>
                        <form className='deposit' onSubmit={handleOperation}>
                            <label className='deposit__text'>Qual é o valor do seu deposito?</label>
                            <input className='deposit__input' value={value} onChange={e => handleChangeValue(e.target.value)} type="number" placeholder='0,00' />
                            <button className='deposit__button' type='submit' disabled={value <= 0 || isNaN(value)}>Depositar</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default Deposito;