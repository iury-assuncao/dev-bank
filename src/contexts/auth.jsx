import { createContext } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider