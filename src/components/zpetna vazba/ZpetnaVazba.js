"use client";
import React, {useState} from 'react';
import styles from "./zpetnavazba.module.css";

export default function ZpetnaVazba() {
    const [isVisible, setIsVisible] = useState(true);

    const handleButtonClick = () => {
        setIsVisible(false);
    };

    return (
        <div className={`${styles.zpetnaVazba} ${isVisible ? styles.visible : styles.hidden}`}>
            <p id="zpetnaVazba">
                Prosíme o krátkou zpětnou vazbu na naši stránku. Vaše názory jsou důležité. Děkujeme.{' '}
                <a href="https://forms.gle/LTxMtpbreAKNXdKj9">odkaz zde</a>
                <button onClick={handleButtonClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-x"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#ffffff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
                        <path d="M10 10l4 4m0 -4l-4 4"/>
                    </svg>
                </button>
            </p>
        </div>
    );
}
