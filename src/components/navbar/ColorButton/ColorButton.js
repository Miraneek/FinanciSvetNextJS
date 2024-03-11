"use client"
import { useState, useEffect } from 'react';

export default function ColorButton() {
    const [darkMode, setDarkMode] = useState(() => {
        // getting stored value
        const initialValue = JSON.parse(localStorage.getItem("darkMode"));
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return initialValue || prefersDarkMode;
    });

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
        <button onClick={toggleColorScheme}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};