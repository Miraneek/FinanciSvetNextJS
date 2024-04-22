import Image from "next/image";

export default function TextWithImage(props) {
    const marginBottom = props.margin ? props.margin : 10;

    const backgroundImageStyle = {
        '--image-url': `url(${props.imgSRC})`,
        marginBottom: marginBottom,
    };

    return (
        <section
            id={props.id}
            className={`lg:bg-[image:var(--image-url)] z-4 lg:bg-cover lg:bg-no-repeat lg:bg-center lg:relative lg:aspect-square w-[90%] lg:w-[500px] rounded-sm lg:m-10 mb-4 ${props.isLeft ? 'lg:self-start' : 'lg:self-end'} flex-col justify-center items-stretch`}
            style={backgroundImageStyle}>
            <Image src={props.imgSRC} alt={props.nadpis + " obrazek"} width={500} height={500} className={"lg:hidden w-[100%]"}/>
            <section
                className={"lg:w-[500px] z-100 p-5 rounded-sm lg:absolute lg:top-[20%] bg-[var(--backgroundColor)] text-xl shadow-black shadow relative" + (props.isLeft ? ' lg:right-[-400px]' : ' lg:left-[-400px]')}>
                <h2 className={"lg:text-2xl"}>{props.nadpis}</h2>
                <div className={"pt-5 lg:text-1xl"}>
                    {props.children}
                </div>
            </section>
        </section>
    )
}