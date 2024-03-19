import Image from "next/image";

export default function Carte({Name, Image, Text}) {

    return (
        <div>
            <Image src={Image} alt="Carte" width={1000} height={1000}/>
            <h1>{Name}</h1>
            <a>{Text}</a>
        </div>
    )
}
