import Link from "next/link"
import style from "./Carte.module.css"

export default function Carte({Name, Image, Url}) {

    return (
        <Link href={Url} className={style.obalkarty}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={style.mainimage} src={Image} alt={Name}/>
                <h1 className={style.nametext}>{Name}</h1>
        </Link>
    )
}
