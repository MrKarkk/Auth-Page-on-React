import React, { useState } from 'react';
import { useLanguage } from "../Language/LanguageContext.jsx";
import Loading from './Loading.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import dictionary from "../../data/dictionary.js";
import '../../assets/css/form.css'


export default function Form() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const { selected } = useLanguage();
    const [error, setError] = useState('');

    // Обработка отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault(); // не перезагружать страницу
        setError(""); // сбрасываем ошибку
        setLoading(true); // показываем загрузку

        try {
        // эмуляция запроса на сервер
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                if (login === "admin" && password === "admin") {
                    reject(new Error("Успешный вход"));
                } else {
                    reject(new Error("Неверный логин или пароль"));
                }
                }, 10); // задержка для имитации загрузки
            });

            // если успех:
            setLoading(false);
            setLogin("");
            setPassword("");
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}> 
            {   loading ? ( <Loading /> ) : (
                <div 
                    className="max-w-md w-full bg-white/5 backdrop-blur-md rounded-2xl p-10"
                    >

                    <div 
                        className="flex justify-between"
                        style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                        <h1
                            className="login-title text-3xl font-semibold mb-6"
                            >{dictionary[selected].login}
                        </h1>
                    </div>

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

                    <div className="relative">
                        <input 
                            id="password"
                            type={show ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pr-32 px-4 py-3 rounded-lg border backdropColor text-sm outline-none focus:ring-2 focus:ring-purple-300" 
                            placeholder={dictionary[selected].placeholderPassword} 
                            required />
                        <button
                            type="button"
                            onClick={() => setShow((s) => !s)}
                            style={{ top: '5px', right: '5px'}}
                            className="show absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 bg-white/70 text-sm absolute"
                        >
                            {/* eye icon */}
                            {show ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.96 9.96 0 012.175-6.125M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l18 18" />
                                </svg>
                            )}

                            {/* <span className="text-xs text-white w-7">{show ? 'Hide' : 'Show'}</span> */}
                        </button>
                    </div>
                    
                    <button
                        type="submit"
                        className="form-button w-full mt-6 px-6 py-3 rounded-lg border border-white/25"
                    >
                        {dictionary[selected].buttonSubmit}
                    </button>
                </div>
            
            )}
            
            <ErrorMessage message={error} />
        </form>
    );
}