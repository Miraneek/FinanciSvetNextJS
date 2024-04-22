export default function ImageOnTheWholeWebsite(props) {
    const marginBottom = props.margin ? props.margin : 40
    const backgroundImageStyle = {
        backgroundImage: `url(${props.imgSRC})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        marginBottom: `${marginBottom}px`,
    };
    

    return (
        <div
            className={`relative aspect-square w-full lg:w-2/3 rounded-sm`}
            style={backgroundImageStyle}>
            <section
                className="w-[583px] p-5 rounded-sm absolute top-[110%] translate-y-[-50%] bg-[var(--backgroundColor)] text-xl shadow-black shadow right-[-70px]">
                <h2 className="text-3xl">{props.nadpis}</h2>
                <div className="pt-5">
                    {props.children}
                </div>
            </section>
        </div>
    );
}
