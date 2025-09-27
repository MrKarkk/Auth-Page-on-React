import { useLocation } from "react-router-dom";

export default function Home() {
    const location = useLocation();
    const user = location.state?.user || JSON.parse(localStorage.getItem("user"));

    return (
        <div>
        <h1>Добро пожаловать, {user?.login}!</h1>
        <p>Password: {user?.password}</p>
        </div>
    );
}
