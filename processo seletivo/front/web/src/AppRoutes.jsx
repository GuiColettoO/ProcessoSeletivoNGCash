import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React from "react";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPages';

import { AuthProvider, AuthContext } from "./contexts/auth";
import { useContext } from "react";
import CadastroPage from "./pages/CadastroPage";

const AppRoutes = () => {
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading){
            return  <div className="loading">Carregando...</div>
        }
        
        if(!authenticated){
            return <Navigate to="/login" />
        }

        return children;
    };

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>}/>
                    <Route path="/cadastro" element={<CadastroPage/>}/>
                    <Route exact path="/" element={<Private><HomePage/></Private>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes