import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const isAuth = localStorage.getItem("user"); // проверка авторизации
    const location = useLocation();

    if (!isAuth) {
        // ❌ не авторизован → отправляем на / (Auth)
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children; // ✅ авторизован → рендерим children
}