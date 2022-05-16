import { Link } from "react-router-dom";
import logo from '../../img/devBank-logo.png'

import "./login.css";

const Login = () => {
    return (
        <div className="container">
            <form className="form">
                <img src={logo} className="logo" alt="Logo DevBank"/>
                <h1 className="title">Login</h1>
                <input className="handleInput" type='email' placeholder='E-mail' required/>
                <input className="handleInput" type='password' placeholder='Senha' required/>
                <button className="button" type="submit">Acessar</button>
                <p className="text">Não possui uma conta?</p>
                <Link className="link" to="/register">Cadastre-se</Link>
            </form>
        </div>
    )
}

export default Login;