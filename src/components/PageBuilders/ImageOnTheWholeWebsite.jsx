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
            className={`lg:relative aspect-square w-full w-2/3 rounded-sm`}
            style={backgroundImageStyle}>
            <section
                className=" lg:w-[700px] z-100 p-5 rounded-sm lg:absolute lg:top-[105%] bg-[var(--backgroundColor)] text-xl shadow-black shadow right-[-70px]">
                <h2 className="text-3xl">{props.nadpis}</h2>
                <div className="pt-5  lg:text-1xl">
                    {props.children}
                </div>
            </section>
        </div>
    );
}
