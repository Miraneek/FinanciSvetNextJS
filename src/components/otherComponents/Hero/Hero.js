import styles from './hero.module.css'
export default function Hero() {

    return (
        <section className={styles.section}>
            <h1>
                <strong>Učíme</strong> mladou generaci <strong><span>finanční</span> gramotnost</strong>.
            </h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={"/other/landingPage/planetka.png"} alt="planeta img"/>
        </section>
    )
}