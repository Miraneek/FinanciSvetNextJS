"use client";
import React, { useState } from "react";
import styles from "./rightside.module.css";
import LinksSection from "@/components/navbar/RightSide/LinksSection/LinksSection";
import SearchSection from "@/components/navbar/RightSide/SearchSection/SearchSection";
import HamburgerMenu from "@/components/navbar/RightSide/HamburgerButton/HamburgerButton";

export default function RightSide() {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <HamburgerMenu handleToggle={handleToggle} />
            <section
                className={`${styles.rightSide} ${styles.mobileMenu} ${
                    isOpen ? styles.open : " "
                }`}
            >
                <LinksSection />
                <SearchSection />
            </section>
        </>
    );
}