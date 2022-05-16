import { BrowserRouter } from 'react-router-dom';
import AuthProvider from "./contexts/auth"

import Rotas from "./routes"

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Rotas />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;