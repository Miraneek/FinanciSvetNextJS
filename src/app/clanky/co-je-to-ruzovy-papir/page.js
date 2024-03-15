import Title from "@/components/ClankyComponenty/Title/Title";
import Textonly from "@/components/ClankyComponenty/Textonly/Textonly";

export default function coJeToRuzovyPapir() {
    return (
        <>
            <Title title={"nadpis"}/>
            <Textonly imgLink={"/clanky/co-je-to-ruzovy-papir/char.png"} prava={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
            </Textonly>
        </>
    );
}