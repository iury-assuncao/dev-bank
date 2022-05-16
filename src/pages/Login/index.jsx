import { Link } from "react-router-dom"

import "./login.css"

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <Link to="/register">Register</Link>
        </div>
    )
}

export default Login