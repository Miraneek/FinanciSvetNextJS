import Image from "next/image";

export default function ImageOnTheWholeWebsite(props) {


    const backgroundImageStyle = {
        backgroundImage: `url(${props.imgSRC})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    };


    return (
        <div
            className={`relative aspect-square w-full lg:w-2/3 rounded-sm mb-${[props.size]}`}
            style={backgroundImageStyle}>
            <Image src={props.imgSRC} alt={props.nadpis + " obrazek"} width={500} height={500} className={"lg:hidden w-[100%]"}/>
            <section
                className="w-[583px] p-5 rounded-sm absolute top-[110%] translate-y-[-50%] bg-[var(--backgroundColor)] text-xl shadow-black shadow right-[-60px] :  left-[-360px])">
                <h2 className="text-3xl">{props.nadpis}</h2>
                <div className="pt-5">
                    {props.children}
                </div>
            </section>
        </div>
    );
}