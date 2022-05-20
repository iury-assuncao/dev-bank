import { createContext, useState, useMemo } from "react";
import { toast } from "react-toastify"
import axios from "axios";

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [user, setUser] = useState()
    const [balance, setBalance] = useState()
    const [loading, setLoading] = useState(false)
    

    const apiUrl = "https://api-contas-trade4devs.herokuapp.com"

    // CARREGAR LOCAL STORAGE
    const memorizedUser = useMemo(() => {
        if (!user) {
            const userStorage = localStorage.getItem("usuario")
            const userParsed  = JSON.parse(userStorage)

            setUser(userParsed )
            setLoading(false)

            return userParsed 
        }

        setLoading(false)
        return user
    }, [user])

    // INSERIR LOCAL STORAGE
    const storageUser = (data) => {
        const userStringfy = JSON.stringify(data)
        localStorage.setItem("usuario", userStringfy)
    }

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
        const { data: { saldo } } = await axios.get(`${apiUrl}/conta/saldo/${user.cpf}`)
                                        .catch(error => {
                                            toast.error("Erro ao buscar transações")
                                            console.error(error)
                                        })

        setBalance(saldo.toFixed(2))
    }

    // REALIZAR TRANSAÇÕES
    const transfer = async (recipient, value) => {
        setLoading(true)

        const data = {
            remetente: user.cpf,
            destinatario: recipient,
            valor: value
        }

        await axios.post(`${apiUrl}/conta/operacao`, data)
            .then(() => toast.success("Transferência realizada"))
            .catch(error => {
                toast.error("Erro ao realizar transação!")
                console.log(error)
            })

        /*const data = {
            remetente: user.cpf,
            destinatario: "",
            valor: value
        }*/

        /*switch (op) {
            case "deposit":
                data.destinatario = user.cpf

                await axios.post(`${apiUrl}/conta/operacao`, data)
                    .then(() => toast.success("Transação realizada"))
                    .catch(error => {
                        toast.error(error)
                        console.log(error)
                    })

                console.log(data)    
                break;

            case "expense":
                data.destinatario = "SAIDA"

                await axios.post(`${apiUrl}/conta/operacao`, data)
                    .then(() => toast.success("Transação realizada"))
                    .catch(error => {
                        toast.error(error)
                        console.log(error)
                    })
                console.log(data)  
                break;

            case "transf":
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
        }*/

        getBalance()
        setLoading(false)
    }

    // LOGIN
    const login = async (email, password) => {
        setLoading(true)

        const loginData = { email, senha: password }

        await axios.post(`${apiUrl}/login`, loginData)
            .then(async () => {
                const { data } = await axios.get(`${apiUrl}/conta`)
                
                data.forEach(account => {
                    if (account.email === email) {                       
                        setUser(account)
                        storageUser(account)

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

    // LOGOUT
    const logout = () => {
        localStorage.removeItem("usuario")
        setUser(null)
    }

    //CADSTRO
    const register = async ( data) => {
        console.log(data);
        await axios.post(`${apiUrl}/conta`, data)
        .then(() => toast.success("Usuário Cadastrado!"))
        .catch(error => {
            toast.error(error)
            console.log(error)
        })

    }

    return (
        <AuthContext.Provider value={{signed: !!memorizedUser, loading, balance, login, logout, getTransations, getBalance, transfer, register}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider