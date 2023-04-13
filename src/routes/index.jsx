import { Routes, Route } from "react-router-dom";
import RequireAuth from '../security/RequireAuth';
import Login from "../components/Login";
import Home from '../pages/Home';

export default function DefaultRoutes(){

    return (
        <Routes>

            <Route path="/login" element={<Login/>}/>

            <Route path="/home" element={
            <RequireAuth>
                <Home/>
            </RequireAuth>}/>

        </Routes>
    )

}

