import {styles} from "next/dist/client/components/react-dev-overlay/internal/components/Toast";

export default function Title({title}){

    return(
        <section>
            <h2 className={styles.nadpis}>{title}</h2>
        </section>
    )
}