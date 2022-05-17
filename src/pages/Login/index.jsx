import { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../../img/devBank-logo.png'

import "./login.css";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="container">
            <form className="login">
                <img src={logo} className="login__logo" alt="Logo DevBank"/>
                <h1 className="login__title">Loginn</h1>

                <input className="login__handleInput" type='email' value={email} onChange={e => setEmail(e.target.value.trim())} placeholder='E-mail' required/>
                <input className="login__handleInput" type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha' required/>
                <button className="login__button" type="submit">Acessar</button>
                
                <p className="login__text">Não possui uma conta?</p>
                <Link className="login__link" to="/register">Cadastre-se</Link>
            </form>
        </div>
    )
}

export default Login;