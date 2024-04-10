import styles from "./TextLeft.module.css";
import Image from "next/image";

export default function TextLeft(props) {
    return (
        <>
            <div className={styles.relative}>
                <Image className={styles.obrazek} src={props.imgSRC} alt={props.nadpis + " obrazek"} width={400} height={372}/>
                <div className={styles.core}>
                    <div className={styles.text}>
                        <h3 className={styles.nadpis}>
                            {props.nadpis}
                        </h3>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}