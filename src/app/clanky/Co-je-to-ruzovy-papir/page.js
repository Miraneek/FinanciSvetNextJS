import TextLeft from "@/components/PageBuilders/TextRight/TextLeft";
import Link from "next/link";

export default function coJeToRuzovyPapir() {
    return (
        <>
            <div>
                <TextLeft nadpis={"co je to ruzovy papir?"} imgSRC={"/nawbar/FinancniSvetLogo.png"}>
                    <Link href={"https://www.google.cz"}>Velmi cool link</Link>
                </TextLeft>
            </div>
        </>
    );
}