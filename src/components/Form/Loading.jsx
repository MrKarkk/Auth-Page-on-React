import React from "react";
import "../../assets/css/loading.css";

/**
 * Loading — анимированный SVG spinner + текст
 * props:
 *  - size: размер в px
 *  - message: подпись (по умолчанию "Загрузка...")
 *  - overlay: true -> full-screen overlay, false -> инлайн
 */
export default function Loading({ size = 150, message = "" }) {
    return (
        <div className="loading-overlay-inside">
        <div className="loading-card">
            <svg
            className="spinner"
            width={size}
            height={size}
            viewBox="0 0 50 50"
            aria-hidden="true"
            focusable="false"
            >
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
            />
            </svg>
            {message && <div className="loading-text">{message}</div>}
        </div>
        </div>
    );
}
