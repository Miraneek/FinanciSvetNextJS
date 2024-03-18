import styles from "./logoSection.module.css";
import Link from "next/link";
import Image from "next/image";

export default function LogoSection() {

    return (
        <section className={styles.logoSection}>
            <Link href="/">
                <Image className={styles.img} src="/nawbar/FinancniSvetLogo.png" alt="Finanční Svět Logo" width={100} height={100}/>
            </Link>
        </section>
    );
}
