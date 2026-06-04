import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Header() {
    const { token, logout } = useContext(AuthContext);

    return (
        <header className="bg-black text-white p-4 flex justify-between">
            <Link to="/" className="font-bold text-xl">
                MySite
            </Link>

            <nav className="flex gap-4">
                <Link to="/">Home</Link>

                {token ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
    );
}