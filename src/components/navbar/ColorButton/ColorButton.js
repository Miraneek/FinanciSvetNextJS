"use client"
import { useState, useEffect } from 'react';

export default function ColorButton() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleColorScheme = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        // Update the class of the html element based on the darkMode state
        document.documentElement.classList.toggle('darkMode', darkMode);

        // Save the user's preference in local storage
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        // Check if the user has a preference stored in local storage
        const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

        // Use a more specific check to avoid unintended behavior
        if (savedDarkMode !== null && typeof savedDarkMode === 'boolean') {
            setDarkMode(savedDarkMode);
        } else {
            // If no preference is found or it's not a valid boolean, check the system preference
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(prefersDarkMode);
        }
    }, []);

    return (
        <button onClick={toggleColorScheme}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};