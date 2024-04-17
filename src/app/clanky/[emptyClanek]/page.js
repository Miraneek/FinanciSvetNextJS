import Link from "next/link";

export default function Page({params}) {
    return (
        <>
            <h1 className={"text-4xl mb-2"}>{params.emptyClanek.split('-').join(' ')}</h1>
            <p className={"text-[20px]"}>
                Tento článek buď neexistuje, nebo ještě nebyl napsán.
                Tato stránka je teprve prototyp a ne ještě plně fungující stránka.
            </p>
            <h4 className={"text-4xl mt-4"}>
                Jediný funkční článek je v této době tento
            </h4>
            <Link href={"./Co-je-to-ruzovy-papir"} className={"text-3xl mt-4 text-blue-500 hover:text-blue-700 font-bold transition-all delay-1s"}>Co je to růžový papír</Link>
        </>
    )
}