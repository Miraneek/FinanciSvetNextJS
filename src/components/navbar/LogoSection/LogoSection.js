"use client";
import styles from "./logoSection.module.css";
import Link from "next/link";
import Image from "next/image";

export default function LogoSection() {

    return (
        <section className={styles.logoSection}>
            <Link href="/" onClick={() =>  window.scrollTo(0, 0)}>
                <Image className={styles.img} src="/nawbar/FinancniSvetLogo.png" alt="Finanční Svět Logo" width={100} height={100}/>
            </Link>
        </section>
    );
}
