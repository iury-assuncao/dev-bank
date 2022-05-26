import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

import Loading from "../../components/Loading"

import logo from '../../img/devBank-logo.png'

import "./register.css"
import { toast } from "react-toastify";

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [cpf, setCpf] = useState("")
    const [birth, setBirth] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const { loading, register } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.info("As senhas não são iguais")
            return
        }

        const data = { 
            nome: name.trim(), 
            telefone: tel.trim(),
            email: email.trim(), 
            cpf: cpf.trim(), 
            dataNascimento: birth, 
            senha: password 
        };

        await register(data);
    }

    return (
        <div className="container">
            {
                loading
                ? <Loading />
                :
                    <form className="register" onSubmit={handleRegister}>
                        <img src={logo} className="register__logo" alt="Logo DevBank"/>
                        <h1 className="register__title">Cadastro</h1>

                        <fieldset className="register__fieldset">
                            <input className="register__handleInput register__handleInput--medium" type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Nome' required/>
                            <input className="register__handleInput register__handleInput--medium" type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='E-mail' required/>
                            <input className="register__handleInput" type='tel' value={tel} onChange={e => setTel(e.target.value)} placeholder='Telefone' required/>
                            <input className="register__handleInput" type='text' value={cpf} onChange={e => setCpf(e.target.value)} placeholder='CPF' required/>
                            <input className="register__handleInput" type='date' value={birth} onChange={e => setBirth(e.target.value)} placeholder='Nascimento' required/>
                            <input className="register__handleInput register__handleInput--medium" type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha' required/>
                            <input className="register__handleInput register__handleInput--medium" type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder='Confirme sua senha' required/>
                        </fieldset>
                        <button className="register__button" type="submit">Cadastrar</button>
                        
                        <p className="register__text">Já possui uma conta?</p>
                        <Link to="/login" className="register__link">Entre</Link>
                    </form>
            }
        </div>
    )
}

export default Register