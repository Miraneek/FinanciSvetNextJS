import styles from './SearchSection.module.css'

export default function SearchSection() {
    return (
        <section className={styles.searchSection}>
            <form action="" className={styles.searchBar}>
                <div className={styles.borderForInput}>
                    <label htmlFor="search">
                        <button type="submit">
                            <span id={"searchIcon"}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"
                                     width="36" height="36" viewBox="0 0 24 24" stroke-width="2.5" stroke="#009988"
                                     fill="none" stroke-linecap="round" stroke-linejoin="round">
                                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                     <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
                                     <path d="M21 21l-6 -6"/>
                                 </svg>
                            </span>

                        </button>
                        <input type="search" name="search" pattern=".*\S.*" required id="search"
                               placeholder="Hledat..."/>
                    </label>
                </div>
            </form>
        </section>
    )
}