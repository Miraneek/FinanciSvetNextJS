
import style from "./Carte.module.css"

export default function Carte({Name, Image, Text}) {

    return (
        <div className={style.obalkarty}>
          <img className={style.mainimage} src={Image} alt={Name}/>
            <h1 className={style.nametext}>{Name}</h1>
            <a className={style.text}>{Text}</a>
        </div>
    )
}
