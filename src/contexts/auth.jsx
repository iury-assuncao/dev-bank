import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [loading, setLoading] = useState(false)

    const apiUrl = "https://api-contas-trade4devs.herokuapp.com"

    const getExtract = async () => {
        setLoading(true)

        //Alterar o ID do usuário na URL
        const { data: { operacoes } } = await axios.get(`${apiUrl}/conta/extrato/12345678912/{mes}`).finally(() => setLoading(false))

        return operacoes
    }

    return (
        <AuthContext.Provider value={{loading, getExtract}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider