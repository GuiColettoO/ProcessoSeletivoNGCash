import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./stylescad.css"

const CadastroPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { signup } = useAuth();

    const handleSubmit = () => {
        if (!username | !password) {
            setError("Preencha todos os campos");
            return;
          } 

          const res = signup(username, password);

          if (res) {
            setError(res);
            return;
          }

          alert("Usuário cadatrado com sucesso!");
          Navigate("/login");
        }
    return(
        <div id="cadastro">
            <img src="./image/logo_ng.png"/>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="username">Insira o username:</label>
                    <input type="username" name="username" id="username" value={username} onChange={(event) => [setUsername(event.target.value), setError("")]}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Insira o password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(event) => [setPassword(event.target.value), setError("")]}/>
                </div>
                <div className="actions">
                    <button className="btn third" type="submit"><Link to={"/login"}>Enviar</Link></button>
                </div>
                <labelError>{error}</labelError>
            </form>
        </div>
    )
}

export default CadastroPage;