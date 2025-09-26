import React, { useEffect, useState } from "react";

export default function ErrorMessage({ message, duration = 3000 }) {
    const [visible, setVisible] = useState(!!message);

    useEffect(() => {
        if (message) {
        setVisible(true);
        const timer = setTimeout(() => setVisible(false), duration);
        return () => clearTimeout(timer);
        }
    }, [message, duration]);

    if (!visible) return null;

    return (
        <div
        className="mt-4 p-3 rounded border text-red-800 text-sm"
        style={{
            textAlign: "center",
            top: "-4.5rem",
            position: "absolute",
            width: "100%",
            backgroundColor: "rgba(254, 202, 202, 0.5)",
            border: "1px solid rgb(254, 202, 202)",
            color: "rgb(185, 28, 28)",
            fontSize: "0.875rem",
        }}
        >
        {message}
        </div>
    );
}