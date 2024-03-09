"use client";
import styles from "./hamburger.module.css";
import {useState} from "react";

export default function HamburgerMenu({handleToggle}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleIconClick = () => {
        setIsClicked(!isClicked);
        handleToggle();
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