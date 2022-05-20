import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify"
import AuthProvider from "./contexts/auth"

import Rotas from "./routes"

import "react-toastify/dist/ReactToastify.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer className="toast" autoClose={3500} />
          <Rotas />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;