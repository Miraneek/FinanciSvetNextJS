"use client";
import React, { useState } from "react";
import styles from "./rightside.module.css";
import LinksSection from "@/components/navbar/RightSide/LinksSection/LinksSection";
import SearchSection from "@/components/navbar/RightSide/SearchSection/SearchSection";
import HamburgerMenu from "@/components/navbar/RightSide/HamburgerButton/HamburgerButton";

export default function RightSide() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    function handleToggle() {
        setIsOpen(!isOpen);
        setIsSearchOpen(isSearchOpen ? false : isSearchOpen);
    }

    return (
        <>
            <HamburgerMenu handleToggle={handleToggle} />
            <section
                className={`${styles.rightSide} ${styles.mobileMenu} ${
                    isOpen ? styles.open : " "
                }`}
            >
                <LinksSection isSearching={isSearchOpen}/>
                <SearchSection setIsSearchOpen={setIsSearchOpen}/>
            </section>
        </>
    );
}