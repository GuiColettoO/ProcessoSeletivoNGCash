import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import "./styles.css"

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", { username, password});
        login(username, password);
    }

    return(
        <div id="login">
            <img src="./image/logo_ng.png"/>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="username">username:</label>
                    <input type="username" name="username" id="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">password:</label>
                    <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className="actions">
                    <button className="btn third" type="submit">Entrar</button>
                    <button className="btn third" type="submit"><Link to="/cadastro">Cadastrar</Link></button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;