import {styles} from "next/dist/client/components/react-dev-overlay/internal/components/Toast";

export default function Textonly({children, imgLink, prava}){

    return(
        <section>
            <div className={styles.textonly}>
                {children}
            </div>
            {prava ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imgLink} alt=""/>
            ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imgLink} alt=""/>
            )
            }
        </section>
    )
}