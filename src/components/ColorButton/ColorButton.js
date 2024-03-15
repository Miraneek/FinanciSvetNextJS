"use client"
import styles from "./colorButton.module.css"
import { useTheme } from 'next-themes'

export default function ColorButton() {

    const {theme, setTheme } = useTheme()

    return (
        <button onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')} className={styles.button}>
            {theme === 'light' ? (
                <svg width="30" height="30">
                    <circle cx="15" cy="15" r="6" fill="currentColor"/>

                    <line
                        id="ray"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        x1="15"
                        y1="1"
                        x2="15"
                        y2="4"
                    ></line>

                    <use href="#ray" transform="rotate(45 15 15)"/>
                    <use href="#ray" transform="rotate(90 15 15)"/>
                    <use href="#ray" transform="rotate(135 15 15)"/>
                    <use href="#ray" transform="rotate(180 15 15)"/>
                    <use href="#ray" transform="rotate(225 15 15)"/>
                    <use href="#ray" transform="rotate(270 15 15)"/>
                    <use href="#ray" transform="rotate(315 15 15)"/>
                </svg>
            ) : (
                <svg width="30" height="30">
                    <path
                        fill="currentColor"
                        d="
          M 23, 5
          A 12 12 0 1 0 23, 25
          A 12 12 0 0 1 23, 5"
                    />
                </svg>
            )}
        </button>
    );
};