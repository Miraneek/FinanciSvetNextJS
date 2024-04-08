export default function Page({ params }) {
    return (
        <>
            <h1>{params.emptyClanek.split('-').join(' ')}</h1>
            <p>
                Tento článek buď neexistuje, nebo ještě nebyl napsán. <br/>
                Tato stránka je teprve prototyp a ne ještě plně fungující stránka.
            </p>
        </>
    )
}