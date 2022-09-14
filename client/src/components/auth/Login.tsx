import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../Title/Title";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function submit() {
        const data = {
            email,
            password,
        };

        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                navigate('/');
            })
    }

    return (
        <div className="p-3 form-max-w m-auto">

            <Title text="Login" />

            <div className="mb-3">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                onClick={submit}
                className="btn btn-primary btn-lg w-100">
                Login
            </button>
        </div>
    );
}

export default Login;