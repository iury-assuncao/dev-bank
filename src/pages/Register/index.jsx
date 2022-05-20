import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

import logo from '../../img/devBank-logo.png'

import "./register.css"

function Register() {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [birth, setBirth] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const { register } = useContext(AuthContext);

    

    const handleRegister = async (e) => {
        e.preventDefault();

        const data = { 
            nome: name, 
            telefone: confirmPassword,
            email, 
            cpf, 
            dataNascimento:birth, 
            senha:password 
        };

        await register(data);
    }

    return (
        <div className="container">
            <form className="register" onSubmit={handleRegister}>
                <img src={logo} className="register__logo" alt="Logo DevBank"/>
                <h1 className="register__title">Cadastro</h1>

                <fieldset className="register__fieldset">
                    <input className="register__handleInput register__handleInput--large" type='text' value={name} onChange={e => setName(e.target.value.trim())} placeholder='Nome' required/>
                    <input className="register__handleInput" type='text' value={cpf} onChange={e => setCpf(e.target.value.trim())} placeholder='CPF' required/>
                    <input className="register__handleInput register__handleInput--large" type='email' value={email} onChange={e => setEmail(e.target.value.trim())} placeholder='E-mail' required/>
                    <input className="register__handleInput" type='date' value={birth} onChange={e => setBirth(e.target.value.trim())} placeholder='Nascimento' required/>
                    <input className="register__handleInput register__handleInput--medium" type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha' required/>
                    <input className="register__handleInput register__handleInput--medium" type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder='Confirme sua senha' required/>
                </fieldset>
                <button className="register__button" type="submit">Acessar</button>
                
                <p className="register__text">Já possui uma conta?</p>
                <Link to="/" className="register__link">Entre</Link>
            </form>
        </div>
    )
}

export default Register