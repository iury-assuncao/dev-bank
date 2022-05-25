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
                                                toast.error("Erro ao buscar transações!")
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
                                            toast.error("Erro ao buscar saldo!")
                                            console.error(error)
                                        })

        setBalance(saldo.toFixed(2))
    }

    // REALIZAR TRANSAÇÕES
    const operation = async (op, data) => {
        setLoading(true)

        switch (op) {
            case "deposit":
                if (parseFloat(data.valor) < 0) {
                    toast.info("Não é possível depositar um valor negativo!")
                    break
                }

                await axios.post(`${apiUrl}/conta/operacao`, data)
                    .then(() => toast.success("Depósito realizado!"))
                    .catch(error => {
                        toast.error("Erro ao realizar depósito!")
                        console.log(error)
                    })

                break;

            case "withdraw":
                if (parseFloat(data.valor) > balance) {
                    toast.info("Saldo insuficiente para saque!")
                    break
                }
                
                await axios.post(`${apiUrl}/conta/operacao`, data)
                .then(() => toast.success("Saque realizado!"))
                .catch(error => {
                    toast.error("Erro ao realizar saque!")
                    console.log(error)
                })
                
                break;
                
            case "transf":
                if (parseFloat(data.valor) > balance) {
                    toast.info("Saldo insuficiente para transferência!")
                    break
                }

                await axios.post(`${apiUrl}/conta/operacao`, data)
                    .then(() => toast.success("Transferência realizada!"))
                    .catch(error => {
                        toast.error("Erro ao realizar transação!")
                        console.log(error)
                    })

                break;
        
            default:
                break;
        }

        setLoading(false)
        getBalance()
    }

    // LOGIN
    const login = async (email, password) => {
        setLoading(true)

        const loginData = { email, senha: password }

        await axios.post(`${apiUrl}/login`, loginData)
            .then(async () => {
                const { data } = await axios.get(`${apiUrl}/conta`)
                let userFound = false
                
                data.forEach(account => {
                    if (account.email === email) {                       
                        setUser(account)
                        storageUser(account)

                        userFound = true
                        toast.success("Login realizado com sucesso!")
                    }
                })

                if (!userFound) {
                    toast.error("Usuário não cadastrado!")
                }
            })
            .catch(error => {
                toast.error("Erro ao fazer login!")
                console.error(error)
            })
            .finally(() => setLoading(false))
    }

    // LOGOUT
    const logout = () => {
        localStorage.removeItem("usuario")
        setUser(null)
    }

    //CADASTRO
    const register = async (userData) => {
        setLoading(true)

        const { data } = await axios.get(`${apiUrl}/conta`)
                
        data.forEach(account => {
            if ((userData.email === account.email) && (userData.cpf === account.cpf)){
                toast.error("E-mail e CPF já cadastrados!")
                return
            }
            if (userData.email === account.email) {                       
                toast.error("E-mail já cadastrado!")
                return
            }
            else if (userData.cpf === account.cpf) {
                toast.error("CPF já cadastrado!")
                return
            }
        })

        await axios.post(`${apiUrl}/conta`, userData)
            .then(() => {
                toast.success("Usuário Cadastrado!")
                toast.success('Você ganhou mil reais do nosso banco!')

                setUser(userData)
                storageUser(userData)
            })
            .catch(error => {
                toast.error("Erro ao cadastrar usuário!")
                console.log(error)
            })
            .finally(() => setLoading(false))
    }

    return (
        <AuthContext.Provider value={{signed: !!memorizedUser, user, loading, balance, login, logout, getTransations, getBalance, operation, register}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;