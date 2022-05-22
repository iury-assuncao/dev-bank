import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";

import Loading from "../Loading"

import "./extrato.css"

const Extrato = () => {

    const [transations, setTransations] = useState([])
    const [transationsByMonth, setTransationsByMonth] = useState([])
    const [month, setMonth] = useState(0)

    const { loading, getTransations } = useContext(AuthContext)

    useEffect(() => {
        const loadTransations = async () => {
            setTransations(await getTransations())
            setMonth(new Date(Date.now()).getMonth())
        }

        loadTransations()
    }, [])

    useEffect(() => {
        const transationsNew = []
        
        transations.forEach(item => {
            if ((item.data).getMonth() === parseInt(month)) {
                transationsNew.push(item)
            }
        })

        setTransationsByMonth(transationsNew)
    }, [month, transations])

    return(
        <div className="statement">
            <select className="statement__month" value={month} onChange={e => setMonth(e.target.value)}>
                <option value={0}>Janeiro</option>
                <option value={1}>Fevereiro</option>
                <option value={2}>Março</option>
                <option value={3}>Abril</option>
                <option value={4}>Maio</option>
                <option value={5}>Junho</option>
                <option value={6}>Julho</option>
                <option value={7}>Agosto</option>
                <option value={8}>Setembro</option>
                <option value={9}>Outubro</option>
                <option value={10}>Novembro</option>
                <option value={11}>Dezembro</option>
            </select>

            {
                loading
                ? <Loading />
                :
                transationsByMonth.length === 0
                    ? <h2>Sem transações</h2>
                    : 
                    <table className="statement__list">
                        <thead className="statement__list-header">
                            <tr>
                                <th>Valor</th>
                                <th>Tipo</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody className="statement__list-content">
                            {
                                transationsByMonth.map(item => {
                                    return (
                                        <tr key={item._id}>
                                            <td className={item.tipo === "ENTRADA" ? "statement__value--income" : "statement__value--expense"}>{item.valor}</td>
                                            <td>{item.tipo}</td>
                                            <td>{(item.data).toLocaleDateString()}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default Extrato;