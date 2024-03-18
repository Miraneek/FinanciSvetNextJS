import styles from "./logoSection.module.css";
import Link from "next/link";

export default function LogoSection() {

    return (
        <section className={styles.logoSection}>
            <Link href="/">
                <img src="/nawbar/FinancniSvetLogo.png" alt="Finanční Svět Logo"/>
            </Link>
        </section>
    );
}
