import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

import './deposito.css';

const Deposito = () => {

    const [value, setValue] = useState(0.00)

    const { operation } = useContext(AuthContext)

    const handleOperation = async (e) => {
        e.preventDefault()

        await operation("income", value.toFixed(2))
    }

    return(
        <div className='container__deposit'>
            <form className='deposit' onSubmit={handleOperation}>
                <p className='deposit__text'>Qual é o valor do seu deposito?</p>
                <input className='deposit__input' value={value} onChange={e => setValue(parseFloat(e.target.value))} type="number" placeholder='0,00' />
                <button className='deposit__button' type='submit'>Depositar</button>
            </form>
        </div>
    )
}

export default Deposito;