import styles from "./CoJeToRuzoviPapir.module.css";
import TextRight from "@/components/PageBuilders/TextRigt/TextRight";
import TextLeft from "@/components/PageBuilders/TextRight/TextLeft";
export default function CoJeToRuzoviPapir({ claneknumber, nadpis, text, img, textPosition }) {
    return (
        <>
            <div className={styles.row}>
                <TextRight/>

            </div>
            <div className={styles.row}>
                <TextLeft/>
            </div>

        </>
    );
}
