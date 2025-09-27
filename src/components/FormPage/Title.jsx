import { useLanguage } from "./Language/LanguageContext.jsx";
import dictionary from "../../data/dictionary.js";

export default function Title() {
    const { selected } = useLanguage();

    return (
        <div 
            className="title_hover backdropFilter p-4 rounded-2xl text-center cursor-pointer"
            style={{transition: "background 0.2s ease"}}>
            {dictionary[selected].loremIpsum}
        </div>
    )
}