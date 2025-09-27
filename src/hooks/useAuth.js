import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { studentData } from "../data/account";


export function useAuth() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e, login, password, setLogin, setPassword) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
            // ищем юзера
            const user = studentData.find(
                (u) => u.username === login && u.password === password
            );

            if (user) {
                resolve(user); // ✅ успех
            } else {
                reject(new Error("Неверный логин или пароль")); // ❌ ошибка
            }
            }, 2000);
        }).then((user) => {
            localStorage.setItem("user", JSON.stringify(user)); // ✅ сохраняем
            navigate("/home", { state: { user } });
        });

        setLoading(false);
        setLogin("");
        setPassword("");
        } catch (err) {
        setError(err.message);
        setLoading(false);
        }
    };

    return { handleSubmit, error, loading };
}
