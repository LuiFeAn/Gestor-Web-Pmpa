import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from '../security/RequireAuth';
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import Home from '../pages/Home';

export default function DefaultRoutes(){

    return (
        <Routes>

            <Route path="/" element={<Navigate to={'/login'}/>}/>

            <Route path="/login" element={<Login/>}/>

            <Route path="/home" element={
            <RequireAuth>
                <Home/>
            </RequireAuth>}/>

        </Routes>
    )

}

