import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // для перехода на другую страницу
import { useLanguage } from "../../FormPage/Language/LanguageContext.jsx"; // контекст языка
import Loading from "./Loading.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import dictionary from "../../../data/dictionary.js";
import { useAuth } from "../../../hooks/useAuth.js"; // кастомный хук для авторизации
import "../../../assets/css/Auth/form.css"; // стили формы


export default function Form() {
    // состояние для инпутов
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const { selected } = useLanguage();
    const navigate = useNavigate();

    // берём из кастомного хука обработчик + стейты
    const { handleSubmit, error, loading } = useAuth();

    return (
        <form
        // при сабмите формы вызываем кастомный хук handleSubmit
        onSubmit={(e) => handleSubmit(e, login, password, setLogin, setPassword, navigate)}
        >
        {loading ? (
            // Если идёт загрузка, показываем спиннер
            <Loading />
        ) : (
            <div className="max-w-md w-full bg-white/5 backdrop-blur-md rounded-2xl p-10">
            {/* Заголовок */}
            <div className="flex justify-between w-full">
                <h1 className="login-title text-3xl font-semibold mb-6">
                {dictionary[selected].login}
                </h1>
            </div>

            {/* Поле Логина */}
            <div>
                <input
                id="login"
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="w-full mb-4 px-4 py-3 rounded-lg border backdropColor text-sm outline-none focus:ring-2 focus:ring-purple-300"
                placeholder={dictionary[selected].placeholderLogin}
                required
                />
            </div>

            {/* Поле Пароля */}
            <div className="relative">
                <input
                id="password"
                type={show ? "text" : "password"} // переключение "показать/скрыть"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-32 px-4 py-3 rounded-lg border backdropColor text-sm outline-none focus:ring-2 focus:ring-purple-300"
                placeholder={dictionary[selected].placeholderPassword}
                required
                />

                {/* Кнопка показать/скрыть пароль */}
                <button
                type="button"
                style={{top: "6px", right: "6px"}}
                onClick={() => setShow((s) => !s)}
                className="show absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 bg-white/70 text-sm"
                >
                {show ? (
                    // Иконка "показать пароль"
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    </svg>
                ) : (
                    // Иконка "скрыть пароль"
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.96 9.96 0 012.175-6.125M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3l18 18"
                    />
                    </svg>
                )}
                </button>
            </div>

            {/* Кнопка отправки */}
            <button
                type="submit"
                className="form-button w-full mt-6 px-6 py-3 rounded-lg border border-white/25"
            >
                {dictionary[selected].buttonSubmit}
            </button>
            </div>
        )}

        {/* Ошибки (например "неверный логин или пароль") */}
        <ErrorMessage message={error} />
        </form>
    );
}