import Link from "next/link";
import TextWithImage from "@/components/PageBuilders/TextWithImage";

export default function coJeToRuzovyPapir() {
    return (
        <>
            <TextWithImage nadpis={"Co je to ruzovy papir?"} imgSRC={"/co-je-to-ruzovy-papir-obrazky/manthinkin.png"} isLeft={true}>
                <Link href={"https://www.google.cz"}>Velmi cool link</Link>
            </TextWithImage>
            <TextWithImage nadpis={"Co je to ruzovy papir?"} imgSRC={"/co-je-to-ruzovy-papir-obrazky/manthinkin.png"} isLeft={false}>
                <Link href={"https://www.google.cz"}>Velmi cool link</Link>
            </TextWithImage>
            <TextWithImage nadpis={"Co je to ruzovy papir?"} imgSRC={"/co-je-to-ruzovy-papir-obrazky/manthinkin.png"} isLeft={true}>
                <Link href={"https://www.google.cz"}>Velmy cool link</Link>
            </TextWithImage>
        </>
    );
}