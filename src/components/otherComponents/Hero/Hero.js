import styles from './hero.module.css'
import Image from "next/image";
import 'animate.css';
export default function Hero() {

    return (
        <section className={styles.section}>
            <h1 className={"animate__animated animate__fadeInLeftBig"}>
                <strong>Učíme</strong> mladou generaci <strong><span>finanční</span> gramotnost</strong>.
            </h1>
            <Image src={"/other/landingPage/planetka.png"} alt="planeta img" className={"animate__animated animate__fadeInRight"} width={1000} height={1000}/>
        </section>
    )
}