import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";

import Loading from "../Loading"

import "./extrato.css"

const Extrato = () => {

    const [transations, setTransations] = useState([])

    const { loading, getExtract } = useContext(AuthContext)

    useEffect(() => {
        const loadExtract = async () => {
            setTransations(await getExtract())
        }

        loadExtract()
    }, [])

    return(
        <div className="statement">
            {
                loading
                ? <Loading />
                :
                transations.length === 0
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
                                transations.map(item => {
                                    return (
                                        <tr key={item._id}>
                                            <td className={item.tipo === "ENTRADA" ? "statement__value--income" : "statement__value--expense"}>{parseFloat(item.valor).toFixed(2)}</td>
                                            <td>{item.tipo}</td>
                                            <td>{(new Date(item.data)).toLocaleDateString()}</td>
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