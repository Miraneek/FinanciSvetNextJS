"use client";
import styles from "./hamburgerMenu.module.css";
import {useState} from "react";


export default function HamburgerMenu() {
    const [isClicked, setIsClicked] = useState(false);

    const handleIconClick = () => {
        setIsClicked(!isClicked);
        let dropdown = document.querySelector(".right-side");
        dropdown.classList.toggle("show");
    };

    return (
        <>
            <div className={styles.containerHamburgerIcon}>
                <div className={`${styles.menu_icon} ${isClicked ? styles.clicked : ''}`} onClick={handleIconClick}>
                    <span className={styles.one}></span>
                    <span className={styles.two}></span>
                    <span className={styles.three}></span>
                </div>
            </div>
        </>
    )
}