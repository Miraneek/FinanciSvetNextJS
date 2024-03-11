import LogoSection from "@/components/navbar/LogoSection/LogoSection";
import styles from "./navbar.module.css";
import RightSide from "@/components/navbar/RightSide/RightSide";
import ZpetnaVazba from "@/components/navbar/zpetna vazba/ZpetnaVazba";
import ColorButton from "@/components/navbar/ColorButton/ColorButton";

export default function Navbar() {
    return (
        <>
            <header className={styles.header}>
                <ZpetnaVazba/>
                <nav className={styles.nav}>
                    <LogoSection/>
                    <RightSide/>

                </nav>
                <ColorButton/>
            </header>
        </>
    )
}