import TextWithImage from "@/components/PageBuilders/TextWithImage/TextWithImage";

export default function Page() {
    return (
        <>
            <h1>jak na pohovor</h1>
            <p className={"text-4xl"}>
                umyju vlasy, přijdu, rizznu a ízíčko.
            </p>
            <TextWithImage isOnLeft={false} nadpis={"jak na pohovor"} imgSRC={"/cojetoruzovipapirobrazky/manthinkin.png"} textPosition={"left"}>
                <a href={"https://forms.gle/LTxMtpbreAKNXdKj9"}>odkaz zde</a>
            </TextWithImage>
            <TextWithImage isOnLeft={true} nadpis={"jak na pohovor"} imgSRC={"/cojetoruzovipapirobrazky/manthinkin.png"} textPosition={"left"}>
                <a href={"https://forms.gle/LTxMtpbreAKNXdKj9"}>odkaz zde</a>
            </TextWithImage>
            <TextWithImage isOnLeft={false} nadpis={"jak na pohovor"} imgSRC={"/cojetoruzovipapirobrazky/manthinkin.png"} textPosition={"left"}>
                <a href={"https://forms.gle/LTxMtpbreAKNXdKj9"}>odkaz zde</a>
            </TextWithImage>
            <TextWithImage isOnLeft={true} nadpis={"jak na pohovor"} imgSRC={"/cojetoruzovipapirobrazky/manthinkin.png"} textPosition={"left"}>
                <a href={"https://forms.gle/LTxMtpbreAKNXdKj9"}>odkaz zde</a>
            </TextWithImage>
        </>
    )
}