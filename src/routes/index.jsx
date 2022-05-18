import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const Dashboard = lazy(() => import("../pages/Dashboard"))

import Loading from "../components/Loading"

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<Loading />}>
                    <Login />
                </Suspense>
            } />

            <Route path="/register" element={
                <Suspense fallback={<Loading />}>
                    <Register />
                </Suspense>
            } />

            <Route path="/dashboard/*" element={
                <Suspense fallback={<Loading />}>
                    <Dashboard />
                </Suspense>
            } />
        </Routes>
    )
}

export default Rotas