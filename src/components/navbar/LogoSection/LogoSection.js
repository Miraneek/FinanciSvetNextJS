import styles from "./logoSection.module.css";
import HamburgerMenu from "@/components/navbar/LogoSection/HamburgerMenu/HamburgerMenu";

export default function LogoSection() {

    return (
        <section className={styles.logoSection}>
            <a href="">
                <img src="/nawbar/Finanční%20Svět%20Logo.png" alt="Finanční Svět Logo"/>
            </a>
            <HamburgerMenu/>
        </section>
    );
}
