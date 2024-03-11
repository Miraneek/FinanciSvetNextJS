"use client"
import { useState, useEffect } from 'react';

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
        <>
            <button onClick={toggleColorScheme}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <h2>
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </h2>
        </>

    );
};