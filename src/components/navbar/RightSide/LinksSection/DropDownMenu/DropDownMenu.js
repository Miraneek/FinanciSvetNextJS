"use client"
import {useState} from "react";
import styles from './DropDownMenu.module.css';

export default function DropDownMenu({title, items}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className={styles.dropdown}>
            <button onClick={handleToggle}>{title}</button>
            {isOpen && (
                <div className={styles.dropdownContent}>
                    {items.map((item, index) => (
                        <section key={index}>
                            {item.icon && (
                                <svg xmlns="http://www.w3.org/2000/svg" className={item.icon.className} width="28" height="28" viewBox="0 0 24 24" strokeWidth="2.5" stroke={item.icon.stroke} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    {item.icon.path}
                                </svg>
                            )}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            {item.logo && <img src={item.logo} alt={item.label} />}
                            <a href={item.link}>{item.label}</a>
                        </section>
                    ))}
                </div>
            )}
        </li>
    );
};