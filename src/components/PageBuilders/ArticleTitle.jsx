import Image from "next/image";

export default function ArticleTitle(props) {
    const marginBottom = props.margin ? props.margin : 40

    const backgroundImageStyle = {
        '--image-url': `url(${props.imgSRC})`,
        marginBottom: marginBottom,
    };

    return (
        <section
            className={`lg:bg-[image:var(--image-url)] z-4 lg:bg-cover lg:bg-no-repeat lg:bg-top lg:relative lg:aspect-video w-[90%] lg:w-[500px] rounded-sm flex-col justify-center items-stretch`}
            style={backgroundImageStyle}>
            <Image src={props.imgSRC} alt={props.nadpis + " obrazek"} width={500} height={500}
                   className={"lg:hidden w-[100%]"}/>
            <section
                className={"lg:w-[700px] z-100 p-5 rounded-sm lg:absolute lg:top-[70%] lg:left-[50%] lg:translate-x-[-50%] bg-[var(--backgroundColor)] text-xl shadow-black shadow relative"}>
                <h2 className={"lg:text-4xl"}>{props.nadpis}</h2>
                <div className={"pt-5 lg:text-1xl"}>
                    {props.children}
                </div>
            </section>
        </section>
    )
}