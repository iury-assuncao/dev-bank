import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

import Loading from "../Loading"

import './deposito.css';

const Deposito = () => {

    const [value, setValue] = useState()

    const { loading, operation } = useContext(AuthContext)

    const handleOperation = async (e) => {
        e.preventDefault()

        await operation("income", value.toFixed(2))
    }

    return(
        <>
            {
                loading
                ? <Loading />
                :
                    <div className='container__deposit'>
                        <form className='deposit' onSubmit={handleOperation}>
                            <p className='deposit__text'>Qual é o valor do seu deposito?</p>
                            <input className='deposit__input' value={value} onChange={e => setValue(parseFloat(e.target.value))} type="number" placeholder='0,00' />
                            <button className={(value <= 0 || isNaN(value)) ? 'deposit__button deposit__button--disable' : 'deposit__button' } type='submit' disabled={(value <= 0 || isNaN(value))}>Depositar</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default Deposito;