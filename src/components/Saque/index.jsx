import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import Loading from "../Loading"

import './saque.css';

const Saque = () => {

    const [value, setValue] = useState()

    const { loading, operation } = useContext(AuthContext)

    const handleOperation = async (e) => {
        e.preventDefault()

        await operation("expense", value.toFixed(2))
    }

    return(
        <>
            {
                loading
                ? <Loading />
                :
                    <div className='container__withdraw'>
                        <form className='withdraw' onSubmit={handleOperation}>
                            <p className='withdraw__text'>Qual é o valor do seu saque?</p>
                            <input className='withdraw__input' value={value} onChange={e => setValue(parseFloat(e.target.value))} type="number" placeholder='0,00' />
                            <button className={(value <= 0 || isNaN(value)) ? 'withdraw__button withdraw__button--disable' : 'withdraw__button' } type='submit' disabled={(value <= 0 || isNaN(value))}>Sacar</button>
                        </form>
                    </div>
            }   
        </>
    )
}

export default Saque;