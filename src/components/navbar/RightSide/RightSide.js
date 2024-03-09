"use client"
import styles from "./rightside.module.css"
import LinksSection from "@/components/navbar/RightSide/LinksSection/LinksSection";
import SearchSection from "@/components/navbar/RightSide/SearchSection/SearchSection";
import {useState} from "react";
import HamburgerMenu from "@/components/navbar/RightSide/HamburgerButton/HamburgerButton";


export default function RightSide(){

    let [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        console.log(isOpen)
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <HamburgerMenu handleToggle={handleToggle}/>
            <section className={styles.rightSide + " " + `${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
                <LinksSection/>
                <SearchSection/>
            </section>
        </div>

    )
}