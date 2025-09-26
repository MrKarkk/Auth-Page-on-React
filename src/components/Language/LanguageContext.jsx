import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [selected, setSelected] = useState("ru");

    return (
        <LanguageContext.Provider value={{ selected, setSelected }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Хук для удобства
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
    return useContext(LanguageContext);
}
