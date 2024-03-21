"use client";
import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";

export default function DropDownItem({label, link, icon, logo}) {

    let [isHovered, setIsHovered] = useState(false);

    return (
        <section
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {icon && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={icon.className}
                    width="20"
                    height="20"
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
                <Image
                    src={logo}
                    alt={label}
                    width={20}
                    height={20}
                />
            )}
            {link && (
                <Link
                    onClick={() =>  window.scrollTo(0, 0)}
                    href={link}
                >
                    {label}
                </Link>
            )}
        </section>
    );
}
