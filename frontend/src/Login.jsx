import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    const { login } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post(
            "http://127.0.0.1:8000/api/login/",
            { username, password }
        );

        login(res.data.access);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button type="submit">
                Login
            </button>
        </form>
    );
}