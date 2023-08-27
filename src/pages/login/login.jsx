import {  useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userId, setUserId] = useState("")

    const handleMail = (e) => {
        setEmail(e.target.value)
    };

    const handlePass = (e) => {
        setPassword(e.target.value)
    };

    function Busca(e) {
        e.preventDefault();
        fetch('http://localhost:3333/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password: password })
        })
            .then(response => {
                if (!response.ok) {
                    console.error('eroo')
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
  
                 navigate("/principal");
                })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <form>

            <label htmlFor="email">Email: </label>
            <input type="email" onChange={handleMail} />
            <label htmlFor="senha">Senha: </label>
            <input type="password" onChange={handlePass} />
            <button onClick={Busca}>Logar</button>

        </form>

    )
}

export default Login;