import Carte from "@/components/otherComponents/CardSextion/Carte";
import style from "./CardDone.module.css"
export default function CardDone() {

    return (
        <div className={style.flex}>
            <Carte Name="Jak vyplnit ružovej papír?" Image="/CarteObrazky/ruzovejpapir.png"
                   Url="./clanky/Co-je-to-ruzovy-papir"/>
            <Carte Name="Jak vyplnit ružovej papír?" Image="/CarteObrazky/ruzovejpapir.png"
                   Url="./clanky/Co-je-to-ruzovy-papir"/>
            <Carte Name="Jak vyplnit ružovej papír?" Image="/CarteObrazky/ruzovejpapir.png"
                   Url="./clanky/Co-je-to-ruzovy-papir"/>
        </div>
    )
}

