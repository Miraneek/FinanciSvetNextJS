import styles from  "./ImageOnTheWholeWebsite.module.css";
export default function ImageOnTheWholeWebsite({ claneknumber, nadpis, text, img, textPosition }) {
    return (
        <>
            <div className={styles.relative}>
                <img className={styles.obrazek} src={"/cojetoruzovipapirobrazky/manthinkin.png"}/>
            </div>
        </>
    );
}
