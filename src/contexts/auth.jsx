import { createContext, useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify"
import axios from "axios";

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [user, setUser] = useState({cpf: "12345678912"})
    const [balance, setBalance] = useState()
    const [loading, setLoading] = useState(false)

    const apiUrl = "https://api-contas-trade4devs.herokuapp.com"

    /*const memorizedUser = useMemo(() => {
        if (!user) {
            const userStorage = localStorage.getItem("usuario")
            const userParsed  = JSON.parse(userStorage)


            console.log("teste", userParsed )

            setUser(userParsed )
            setLoading(false)

            return userParsed 
        }

        setLoading(false)
        return user
    }, [user])

    const storageUser = (data) => {
        const userStringfy = JSON.stringify(data)
        localStorage.setItem("usuario", userStringfy)
    }*/

    // BUSCAR EXTRATO DAS TRANSAÇÕES
    const getTransations = async () => {
        setLoading(true)

        if (!user) {
            return
        }
        
        const { data: { operacoes } } = await axios.get(`${apiUrl}/conta/extrato/${user.cpf}`)
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

    // BUSCAR SALDO
    const getBalance = async () => {
        if (!user) {
            return
        }

        const { data: { saldo } } = await axios.get(`${apiUrl}/conta/saldo/${user.cpf}`)
                                        .catch(error => {
                                            toast.error("Erro ao buscar transações")
                                            console.error(error)
                                        })

        setBalance(saldo.toFixed(2))
    }

    // REALIZAR TRANSAÇÕES
    const operation = async (type, value) => {
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
                //data.destinatario = destiny

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

    const login = async (email, password) => {
        setLoading(true)

        const loginData = { email, senha: password }

        await axios.post(`${apiUrl}/login`, loginData)
            .then(async () => {
                const { data } = await axios.get(`${apiUrl}/conta`)
                
                data.forEach(account => {
                    if (account.email === email) {
                        account.cpf = (account.cpf).replace(/(\.|\-)/g, "")
                        
                        //setUser(account)
                        //storageUser(account)
                        console.log(account)
                        toast.success("Login realizado com sucesso")
                    }
                })
            })
            .catch(error => {
                toast.error("Erro ao fazer login")
                console.error(error)
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        const loadBalance = async () => {
            await getBalance()
        }

        loadBalance()
    }, [])

    return (
        <AuthContext.Provider value={{loading, balance, login, getTransations, operation}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider