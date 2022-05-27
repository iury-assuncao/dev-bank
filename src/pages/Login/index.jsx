import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

import Loading from "../../components/Loading"

import logo from '../../img/devBank-logo.png'

import "./login.css";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { loading, login } = useContext(AuthContext)

    const handleLogin = async (e) => {
        e.preventDefault()

        await login(email, password)
    }
   
    return (
        <div className="container">
            {
                loading
                ? <Loading />
                :
                    <form className="login" onSubmit={handleLogin}>
                        <Link to="/">
                            <img src={logo} className="login__logo" alt="Logo DevBank"/>
                        </Link>
                        <h1 className="login__title">Login</h1>

                        <input className="login__handleInput" type='email' value={email} onChange={e => setEmail(e.target.value.trim())} placeholder='E-mail' required/>
                        <input className="login__handleInput" type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha' required/>
                        <button className="login__button" type="submit">Acessar</button>
                        
                        <p className="login__text">Não possui uma conta?</p>
                        <Link className="login__link" to="/register">Cadastre-se</Link>
                    </form>
            }
        </div>
    )
}

export default Login;