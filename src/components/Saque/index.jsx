import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import './saque.css';

const Saque = () => {

    const [value, setValue] = useState(0.00)

    const { operation } = useContext(AuthContext)

    const handleOperation = async (e) => {
        e.preventDefault()

        await operation("expense", value.toFixed(2))
    }

    return(
        <div className='container__withdraw'>
            <form className='withdraw' onSubmit={handleOperation}>
                <p className='withdraw__text'>Qual é o valor do seu saque?</p>
                <input className='withdraw__input' value={value} onChange={e => setValue(parseFloat(e.target.value))} type="number" placeholder='0,00' />
                <button className='withdraw__button' type='submit'>Sacar</button>
            </form>
        </div>
    )
}

export default Saque;