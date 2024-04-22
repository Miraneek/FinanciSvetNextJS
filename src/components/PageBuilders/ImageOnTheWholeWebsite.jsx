import Image from "next/image";

export default function ImageOnTheWholeWebsite(props) {
    const marginBottom = props.margin ? props.margin : 40

    const backgroundImageStyle = {
        '--image-url': `url(${props.imgSRC})`,
        marginBottom: marginBottom,
    };


    return (
        <div
            id={props.id}
            className={`lg:bg-[image:var(--image-url)] lg:relative aspect-square lg:w-6/12 w-[90%] rounded-sm lg:bg-cover lg:bg-no-repeat lg:bg-top scroll-m-[30vh]`}
            style={backgroundImageStyle}>
            <Image src={props.imgSRC} alt={props.nadpis + " obrazek"} width={500} height={500} className={"lg:hidden w-[100%]"} />
            <section
                className={` lg:w-[700px] z-100 p-5 rounded-sm lg:absolute lg:top-[90%] bg-[var(--backgroundColor)] text-xl shadow-black shadow ${props.isLeft ? 'lg:left-[-200px]' : 'lg:right-[-200px]'}`} >
                <h2 className="text-3xl">{props.nadpis}</h2>
                <div className="pt-5  lg:text-1xl">
                    {props.children}
                </div>
            </section>
        </div>
    );
}