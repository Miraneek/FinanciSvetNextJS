import Link from "next/link";
import TextWithImage from "@/components/PageBuilders/TextWithImage";
import ArticleTitle from "@/components/PageBuilders/ArticleTitle";

export default function coJeToRuzovyPapir() {
    return (
        <>
            <ArticleTitle nadpis={"Co je to ruzovy papir?"} imgSRC={"/nawbar/FinancniSvetLogo.png"} margin={120}>
                <h2 className={"text-2xl"}>
                    Tento článek Vám vysvětlí:
                </h2>
                <ul className={"pl-4"}>
                    <li>
                        Co je to růžový papír.
                    </li>
                    <li>
                        K čemu slouží a jaké jsou jeho limitace.
                    </li>
                    <li>
                        Jak ho správně vyplnit
                    </li>
                </ul>
            </ArticleTitle>
            <TextWithImage nadpis={"Co je to ruzovy papir?"} imgSRC={"/co-je-to-ruzovy-papir-obrazky/manthinkin.png"}
                           isLeft={true} margin={120}>
                <ul className={"list-disc pl-6"}>
                    <li>Nemusíte platit daň z přijmu (15%)</li>
                    <li>Říkáte jim státu hej já jsem student (nebo invalida) a chci slevu</li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos error iste mollitia
                        reprehenderit sunt. Accusantium, aliquam id magnam magni odio quibusdam ut? Cum, cupiditate
                        doloribus ea eum ex incidunt inventore minima mollitia nihil perspiciatis quae quod voluptatum.
                        Cumque earum expedita iste magnam, minima minus pariatur perspiciatis repellat tenetur ut
                        voluptas.
                    </li>
                </ul>
            </TextWithImage>
            <TextWithImage nadpis={"Co je to ruzovy papir?"} imgSRC={"/co-je-to-ruzovy-papir-obrazky/manthinkin.png"}
                           isLeft={false}>
                <Link href={"https://www.google.cz"}>Velmi cool link</Link>
            </TextWithImage>
            <TextWithImage nadpis={"Co je to ruzovy papir?"} imgSRC={"/co-je-to-ruzovy-papir-obrazky/manthinkin.png"}
                           isLeft={true}>
                <Link href={"https://www.google.cz"}>Velmy cool link</Link>
            </TextWithImage>
        </>
    );
}