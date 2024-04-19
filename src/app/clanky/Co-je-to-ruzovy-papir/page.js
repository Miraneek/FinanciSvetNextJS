import Link from "next/link";
import TextWithImage from "@/components/PageBuilders/TextWithImage";
import ArticleTitle from "@/components/PageBuilders/ArticleTitle";
import ImageOnTheWholeWebsite from "@/components/PageBuilders/ImageOnTheWholeWebsite";

export default function coJeToRuzovyPapir() {
    return (
        <>
            <ArticleTitle nadpis={"Co je to ruzovy papir?"} imgSRC={"/nawbar/FinancniSvetLogo.png"} margin={300}>
                <h2 className={"text-2xl mb-2"}>
                    Kapitoly:
                </h2>
                <ul className={"pl-4 flex gap-2 flex-col"}>
                    <li className={"hover:underline"}>
                        <Link href={"#co-je-to-ruzovy-papir-obrazky"}>Co je to
                            rúžový papír?</Link>
                    </li>
                    <li className={"hover:underline"}>
                        <Link href={"#co-dela"}>Co to dělá, pokud to podepíšete?</Link>
                    </li>
                    <li className={"hover:underline"}>
                        <Link href={"#co-se-stane"}>Co se stane, když ho nepředám?</Link>
                    </li>
                    <li className={"hover:underline"}>
                        <Link href={"#dulezite-info"}>Děležité informace/limitace:</Link>
                    </li>
                    <li className={"hover:underline"}>
                        <Link href={"#prakticky-priklad"}>Praktický příklad:</Link>
                    </li>
                    <li className={"hover:underline"}>
                        <Link href={"#slevy-na-dani"}>Informace ke slevám na dani</Link>
                    </li>
                    <li className={"hover:underline"}>
                        <Link href={"#tutorial"}>Jak vyplnit růžový papír (step by step)</Link>
                    </li>
                </ul>
            </ArticleTitle>

            <TextWithImage imgSRC={"/co-je-to-ruzovy-papir-obrazky/test.png"} id={"co-je-to-ruzovy-papir-obrazky"}
                           nadpis={"Co je to rúžový papír?"} isLeft={false}>
                <ul className={"ml-4"}>
                    <li>
                        Dokument
                    </li>
                    <li>
                        Typicky je vyžadován na brigádá a v práci obecně.
                    </li>
                    <li>
                        Díky němu zaměstnavatel za Vás nemusí platit takové daně. (více peněz pro Vás)
                    </li>
                </ul>
            </TextWithImage>
            <TextWithImage imgSRC={"/co-je-to-ruzovy-papir-obrazky/test.png"} id={"co-dela"} nadpis={"Co to dělá, pokud to podepíšete?"}
                           isLeft={true}>
                <ul className={"ml-4"}>
                    <li>
                        Dostanete slevy na dani, které vyznačíte. (sleva pro studenta, sleva na poplatníka)
                    </li>
                    <li>
                        Pro většinu brigádníků to znamená, že nemusíte platit daň z přijmu (15%)
                    </li>
                </ul>
            </TextWithImage>
            <TextWithImage imgSRC={"/co-je-to-ruzovy-papir-obrazky/test.png"} nadpis={"Co se stane, když ho nepředám?"}
                           id={"co-se-stane"} isLeft={false}>
                <ul className={"ml-4"}>
                    <li>
                        Neodečtou se Vám slevy na dani na které máte nárok. (<Link href={"#slevy-na-dani"}>Informace ke
                        slevám na dani</Link>)
                    </li>
                    <li>
                        Pro většinu to znamená, že zaměstnavatel, než Vám pošle výplatu, pošle 15% státu v rámci daňě z
                        příjmu.
                    </li>
                </ul>
            </TextWithImage>
            <TextWithImage imgSRC={"/co-je-to-ruzovy-papir-obrazky/test.png"} nadpis={"Děležíté informace/limitace:"}
                           id={"dulezite-info"} isLeft={true}>
                <ul className={"ml-4"}>
                    <li>
                        Můžete ho mít pouze v jedné práci.
                    </li>
                    <li>
                        Nejlepší je ho mít v práci, která Vám vydělává nejvíce.
                    </li>
                    <li>
                        Každý rok je potřeba podepsat znova.
                    </li>
                </ul>
            </TextWithImage>
            <TextWithImage imgSRC={"/co-je-to-ruzovy-papir-obrazky/test.png"} nadpis={"Praktický příklad"} id={"prakticky-priklad"} isLeft={false} margin={60}>
                <ul className={"ml-4"}>
                    <li>
                        <h4 className={"text-2xl underline"}>
                            Pokud vyděláte pod 10.000 kč:
                        </h4>
                    </li>
                    <li>
                        Vyděláte 10.000 kč.
                    </li>
                    <li>
                        Dostanete 10.000 kč. (jelikož máte slevu na poplatníka)
                    </li>
                    <li>
                        <h4 className={"text-2xl underline"}>
                            Pokud vyděláte více než 10.000 kč:
                        </h4>
                    </li>
                    <li>
                        Vyděláte více jak 10.000 kč.
                    </li>
                    <li>
                        Dostanete 10.000 kč a zbytek výdělku dostanete už s odečtenou daní 15%.
                    </li>
                </ul>
            </TextWithImage>
            <ImageOnTheWholeWebsite imgSRC={"/co-je-to-ruzovy-papir-obrazky/step-by-step.png"}
                                    imgALT={"Růžový papír step by step"}
                                    nadpis={"Jak vyplnit růžový papír step by step"} id={"tutorial"}>
                <ul className={"ml-4 list-disc"}>
                    <li>
                        Jdi na tento odkaz a stáhni si tento dokument. <Link className={"text-blue-500"}
                                                                             href={"https://www.financnisprava.cz/assets/cs/prilohy/dt-upozorneni-mf-k-tiskopisum/5457_26.pdf"}>odkaz
                        zde</Link>
                    </li>
                    <li>
                        Vytiskněte nebo editujde buď v nějakém pdf editoru (například adobe acrobat) nebo klasicky ve
                        windows malování
                    </li>
                </ul>
                <h4 className={"text-2xl underline"}>
                    Vyplňte tyto informace na místa podle obrázku:
                </h4>
                <ol className={"list-decimal ml-9"}>
                    <li>Rok, kdy pracujete</li>
                    <li>Celý název firmy</li>
                    <li>Adresa firmy (najdete na Googlu nebo se zeptejte)</li>
                    <li>Vaše příjmení</li>
                    <li>Vaše jméno</li>
                    <li>Vaše rodné číslo</li>
                    <li>Vaše adresa</li>
                    <li>Toto zaškrtněte</li>
                    <li>Toto zaškrtněte, pokud jste student</li>
                    <li>Zde se podepište s datumem, od kdy má sleva platit (většinou začátek roku)</li>
                </ol>

            </ImageOnTheWholeWebsite>
            <TextWithImage imgSRC={"/co-je-to-ruzovy-papir-obrazky/test.png"} nadpis={"Další informace / zdroje:"}
                           isLeft={true}>

            </TextWithImage>
        </>
    );
}