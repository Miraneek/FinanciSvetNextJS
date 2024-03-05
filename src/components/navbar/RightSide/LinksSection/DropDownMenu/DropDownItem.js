"use client";
import React, {useState} from 'react';

export default function DropDownItem({label, link, icon, logo}) {

    let [isHovered, setIsHovered] = useState(false);

    return (
        <section onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {icon && (
                <svg xmlns="http://www.w3.org/2000/svg" className={icon.className} width="28"
                     height="28" viewBox="0 0 24 24" strokeWidth="2.5" stroke={isHovered ? icon.stroke : "#3d3d3d"}
                     fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    {icon.path}
                </svg>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {!icon && (
                <img
                    src={logo}
                    alt={label}
                    style={{filter: isHovered ? "grayscale(0)" : "grayscale(100%)"}}
                />
            )}
            {link && <a href={link}>{label}</a>}
        </section>
    );
}
