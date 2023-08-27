import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cadastro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleMail = (e) => {
        setEmail(e.target.value);
    };

    const handlePass = (e) => {
        setPassword(e.target.value);
    };

    function Send(e) {
        e.preventDefault();
        fetch('http://localhost:3333/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password: password })
        });

    }

    return (

        <form>
            <label htmlFor="name">Nome: </label>
            <input type="text" onChange={handleName} />
            <label htmlFor="email">Email: </label>
            <input type="email" onChange={handleMail} />
            <label htmlFor="senha">Senha: </label>
            <input type="password" onChange={handlePass} />
            <button onClick={Send}>Cadastrar</button>
            <Link to='/login'>Login</Link>
        </form>
    );
}

export default Cadastro;
