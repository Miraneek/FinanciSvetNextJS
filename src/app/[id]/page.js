import styles from "./clanek.module.css"
import {clanky} from "@/clanky";


export default function Page({ params }) {
    return (
        <div>
            {params.id === "co-je-to-ruzovy-papir" &&
                <h2>
                    You have {params.id} unread messages.
                </h2>
            }
        </div>
    )
}