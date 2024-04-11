export default function TextWithImage(props) {
    const backgroundImageStyle = {
        backgroundImage: `url(${props.imgSRC})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };


    return (
        <div
            className={`relative h-[500px] w-[600px] rounded-sm mb-10 ${props.isLeft ? 'self-start' : 'self-end'}`}
            style={backgroundImageStyle}>
            <section
                className={"w-[500px] p-5 rounded-sm absolute top-[40%] translate-y-[-50%] bg-[var(--backgroundColor)] text-xl shadow-black shadow" + (props.isLeft ? ' right-[-360px]' : ' left-[-360px]')}>
                <h2 className={"text-3xl"}>{props.nadpis}</h2>
                <div className={"pt-5"}>
                    {props.children}
                </div>
            </section>
        </div>
    )
}