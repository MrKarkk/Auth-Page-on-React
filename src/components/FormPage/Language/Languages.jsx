import { useState } from "react";
import { useLanguage } from "./LanguageContext.jsx";
import languages from "../../../data/languages.js";
import dictionary from "../../../data/dictionary.js";
import '../../../assets/css/Auth/language.css';


export default function Languages() {
    const [open, setOpen] = useState(false);
    const { selected, setSelected } = useLanguage();

    return (
        <div className="languages-container">
            <div className="dropdown">
                {/* Кнопка выбора */}
                <button className="backdropFilter dropdown-btn text-center rounded-2xl" onClick={() => setOpen(!open)}>
                <span>{dictionary[selected].selectLanguage}</span>
                <span className="dropdown-icon">▼</span>
                </button>

                {/* Выпадающий список */}
                {open && (
                <div className="dropdown-menu">
                    {languages.map((lang) => (
                    <div
                        key={lang.code}
                        className={`dropdown-item ${
                        selected === lang.code ? "active" : ""
                        }`}
                        onClick={() => {
                        setSelected(lang.code);
                        setOpen(false);
                        }}
                    >
                        <span className="flag">{lang.flag}</span>
                        <span className="lang-name">{lang.name}</span>
                        {selected === lang.code && (
                        <span className="check">✔</span>
                        )}
                    </div>
                    ))}
                </div>
                )}
            </div>
        </div>
    );
}
