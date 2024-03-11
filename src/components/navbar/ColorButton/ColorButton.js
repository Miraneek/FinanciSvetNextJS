"use client"
import styles from "./colorButton.module.css"
import {useState, useEffect} from 'react';

export default function ColorButton() {


    const [darkMode, setDarkMode] = useState();

    useEffect(() => {
        // Check if running on the client side
        if (localStorage.getItem('darkMode') !== 'undefined') {
            const initialValue = JSON.parse(localStorage.getItem('darkMode'));
            setDarkMode(initialValue);
        }
    }, []);
    const toggleColorScheme = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        // Update the class of the html element based on the darkMode state
        document.documentElement.classList.toggle('darkMode', darkMode);

        // Save the user's preference in local storage
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <button onClick={toggleColorScheme} className={styles.button}>
            {darkMode ? (
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