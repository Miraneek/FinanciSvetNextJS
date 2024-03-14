import styles from "./[id].module.css"
import {clanky} from "@/clanky";


export default function Page({ params }) {
    return (
        <div className={styles.page}>
            <h1>{clanky[params.id].title}</h1>
        </div>
    )
}