import styles from "./TextRight.module.css";
export default function ({nadpis, text, img, textPosition}) {
    return (
        <>
            <div className={styles.relative}>
                <img className={styles.obrazek} src={"/co-je-to-ruzovy-papir-obrazky/manthinkin.png"}/>
                <div className={styles.core}>
                    <div className={styles.text}>
                        <h3 className={styles.nadpis}>
                            Nazev clanku
                        </h3>
                        <a className={styles.text}>
                            fwofewof wefm weifn wrfgwufwfhweufh dvniowefiods jwiovwkvnwignv
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}