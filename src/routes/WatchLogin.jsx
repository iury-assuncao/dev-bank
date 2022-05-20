import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../contexts/auth"

const WatchLogin = () => {

    const { signed } = useContext(AuthContext)

    return signed ? <Navigate to="/dashboard" /> : <Outlet />
}

export default WatchLogin