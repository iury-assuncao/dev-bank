import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../components/Loading"

import WatchLogin from "./WatchLogin"

const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const Dashboard = lazy(() => import("../pages/Dashboard"))
const NotFound = lazy(() => import("../pages/NotFound"))

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<WatchLogin />}>
                <Route path="/" element={
                    <Suspense fallback={<Loading />}>
                        <Login />
                    </Suspense>
                } />
            </Route>

            <Route path="/register" element={<WatchLogin />}>
                <Route path="/register" element={
                    <Suspense fallback={<Loading />}>
                        <Register />
                    </Suspense>
                } />
            </Route>

            <Route path="/dashboard/*" element={
                <Suspense fallback={<Loading />}>
                    <Dashboard />
                </Suspense>
            } />

            <Route path="*" element={
                <Suspense fallback={<Loading />}>
                    <NotFound />
                </Suspense>
            } />
        </Routes>
    )
}

export default Rotas