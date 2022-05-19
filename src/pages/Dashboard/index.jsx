
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Deposito from "../../components/Deposito";
import Extrato from "../../components/Extrato";
import Saque from "../../components/Saque";
import Transferencia from "../../components/Transferencia";
import Cartoes from "../../components/Cartoes";

import { Routes, Route} from "react-router-dom";

import "./dashboard.css";


const Dashboard = () => {
    return(
        
        <div className="dashboard">

                <Menu />

                <div className="content">
                    <Header />

                    <Routes>
                    
                        <Route path="/extrato" element={<Extrato />}/>
                        <Route path="/saque" element={<Saque />}/>
                        <Route path="/deposito" element={<Deposito />}/>
                        <Route path="/transferencia" element={<Transferencia />}/>
                        <Route path="cartoes" element={<Cartoes/>}/>
                    </Routes>
                                    
                </div>
            
        </div>
           
    )

}


export default Dashboard;