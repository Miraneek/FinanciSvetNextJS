"use client";
import React, {useState} from 'react';
import Link from "next/link";
import {useMediaQuery} from "react-responsive";

export default function DropDownItem({label, link, icon, logo}) {

    const isMobile = useMediaQuery({ maxWidth: 768 }, undefined, (matches) => matches);

    let [isHovered, setIsHovered] = useState(false);

    return (
        <section>
            {icon && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={icon.className}
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke={isHovered ? icon.stroke : "var(--textColor)"}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {icon.path}
                </svg>
            )}
            {!icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={logo}
                    alt={label}
                    style={{
                        filter: isHovered ? "grayscale(0)" : "var(--iconIMG)",
                    }}
                />
            )}
            {link && (
                <Link
                    href={link}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {label}
                </Link>
            )}
        </section>
    );
}
