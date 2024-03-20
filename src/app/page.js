import Hero from "@/components/otherComponents/Hero/Hero";
import Carte from "@/components/otherComponents/CardSextion/Carte";


export default function Home() {
    return (
        <>
            <Hero/>
            <Carte Name={"Jak vyplnit ružovej papír?"} Image= {"/CarteObrazky/ruzovejpapir.png"} Url={"./clanky/Co-je-to-ruzovy-papir"} Text={"K vyplnění růžového daňového přiznání pro fyzické osoby v České  republice je nezbytné poskytnout přesné osobní a finanční informace.\n" +
                "Detailně vykážte všechny zdroje příjmů a uplatněte příslušné výdaje a  slevy. Výsledná částka daně se spočítá na základě vašich celkových  příjmů a možných odpočtů."}/>


        </>
    );
}
