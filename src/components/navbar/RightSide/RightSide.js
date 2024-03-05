import styles from "./rightside.module.css"
import LinksSection from "@/components/navbar/RightSide/LinksSection/LinksSection";
import SearchSection from "@/components/navbar/RightSide/SearchSection/SearchSection";

export default function RightSide(){
    return(
        <section className={styles.rightSide}>
            <LinksSection/>
            <SearchSection/>
        </section>
    )
}