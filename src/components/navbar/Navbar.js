import LogoSection from "@/components/navbar/LogoSection/LogoSection";
import LinksSection from "@/components/navbar/RightSide/LinksSection/LinksSection";
import styles from "./navbar.module.css";

export default function Navbar(){
    return(
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <LogoSection/>
                    <div className="right-side">
                       <LinksSection/>
                        <section className="searchBarSection">
                            <form action="" className="search-bar">
                                <div className="borderForInput">
                                    <label htmlFor="search">
                                        <button className="search-btn" type="submit">
                                            <span className="icon"><i
                                                className="fa-solid fa-magnifying-glass"></i></span>
                                        </button>
                                        <input type="search" name="search" pattern=".*\S.*" required id="search"
                                               placeholder="Hledat..."/>
                                    </label>
                                </div>
                            </form>
                        </section>
                    </div>
                </nav>
            </header>
        </>
    )
}