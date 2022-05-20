import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify"
import axios from "axios";

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [user, setUser] = useState({cpf: "12345678912"})
    const [balance, setBalance] = useState()
    const [loading, setLoading] = useState(false)

    const apiUrl = "https://api-contas-trade4devs.herokuapp.com"

    const getTransations = async () => {
        setLoading(true)

        const { data: { operacoes } } = await axios.get(`${apiUrl}/conta/extrato/${user.cpf}/{mes}`)
                                            .catch(error => {
                                                toast.error("Erro ao buscar transações")
                                                console.error(error)
                                            })
                                            .finally(() => setLoading(false))

        operacoes.forEach(item => {
            item.valor = parseFloat(item.valor).toFixed(2)
            item.data = new Date(item.data)
        })

        return operacoes
    }

    const getBalance = async () => {
        const { data: { saldo } } = await axios.get(`${apiUrl}/conta/saldo/${user.cpf}`)
                                        .catch(error => {
                                            toast.error("Erro ao buscar transações")
                                            console.error(error)
                                        })

        setBalance(saldo.toFixed(2))
    }

    const operation = async (type, value, destiny) => {
        setLoading(true)

        const data = {
            cpf: user.cpf,
            tipo: "",
            valor: value
        }

        switch (type) {
            case "income":
                data.tipo = "ENTRADA"

                await axios.post(`${apiUrl}/conta/operacao`, data)
                    .then(() => toast.success("Transação realizada"))
                    .catch(error => {
                        toast.error(error)
                        console.log(error)
                    })

                break;

            case "expense":
                data.tipo = "SAIDA"

                await axios.post(`${apiUrl}/conta/operacao`, data)
                    .then(() => toast.success("Transação realizada"))
                    .catch(error => {
                        toast.error(error)
                        console.log(error)
                    })

                break;

            case "transf":
                data.tipo = "SAIDA"
                data.destinatario = destiny

                await axios.post(`${apiUrl}/conta/operacao`, data)
                    .then(() => toast.success("Transação realizada"))
                    .catch(error => {
                        toast.error(error)
                        console.log(error)
                    })

                break;
        
            default:
                break;
        }

        getBalance()
        setLoading(false)
    }

    useEffect(() => {
        const loadBalance = async () => {
            await getBalance()
        }

        loadBalance()
    }, [])

    return (
        <AuthContext.Provider value={{loading, balance, getTransations, operation}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider