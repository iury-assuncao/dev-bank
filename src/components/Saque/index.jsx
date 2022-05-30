import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { MenuContext } from "../../contexts/menu";

import Loading from "../Loading"

import './saque.css';

const Saque = () => {

    const [value, setValue] = useState("")

    const { user: { cpf }, loading, operation } = useContext(AuthContext)
    const { setLinkSelected } = useContext(MenuContext)

    const handleOperation = async (e) => {
        e.preventDefault()

        const data = {
            remetente: cpf,
            destinatario: "12345678912",
            valor: value.toFixed(2)
        }

        await operation("withdraw", data)
    }

    const handleChangeValue = (e) => {
        if (e === "") {
            setValue("")
        }
        else {
            setValue(parseFloat(e))
        }
    }

    useEffect(() => setLinkSelected("saque"), [])

    return(
        <>
            {
                loading
                ? <Loading />
                :
                    <div className='container__withdraw'>
                        <form className='withdraw' onSubmit={handleOperation}>
                            <label className='withdraw__text'>Qual é o valor do seu saque?</label>
                            <input className='withdraw__input' value={value} onChange={e => handleChangeValue(e.target.value)} type="number" placeholder='0,00' />
                            <button className='withdraw__button' type='submit' disabled={value <= 0 || isNaN(value)}>Sacar</button>
                        </form>
                    </div>
            }   
        </>
    )
}

export default Saque;