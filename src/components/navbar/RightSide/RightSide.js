import styles from "./rightside.module.css"
import LinksSection from "@/components/navbar/RightSide/LinksSection/LinksSection";

export default function RightSide(){
    return(
        <section className={styles.rightSide}>
            <LinksSection/>
        </section>
    )
}