"use client"
import {useState} from 'react';
import styles from './SearchSection.module.css';
import Fuse from 'fuse.js';
import Link from "next/link";
import {articles} from "@/app/clanky/Clanky";

const fuse = new Fuse(articles, {
    keys: ['title', 'keywords'],
    includeScore: true,
});

export default function SearchSection() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        if (e.target.value.trim() !== '') {
            setResults(fuse.search(e.target.value));
        } else {
            setResults([]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (results.length > 0) {
            window.location.href = `/clanky/${results[0].item.title}`; // Adjust the URL pattern as needed
        }
    };

    return (
        <section className={styles.searchSection}>
            <form action="" className={styles.searchBar} autoComplete={"off"} onSubmit={handleSubmit}>
                <div className={styles.borderForInput}>
                    <label htmlFor="search">
                        <button type="submit">
                            <span id={"searchIcon"}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"
                                     width="30" height="30" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#009988"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                     <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
                                     <path d="M21 21l-6 -6"/>
                                 </svg>
                            </span>
                        </button>
                        <input
                            type="search"
                            name="search"
                            required
                            id="search"
                            placeholder="Hledat..."
                            value={query}
                            onChange={handleSearch}
                        />
                    </label>
                </div>
            </form>
            {results.length > 0 && (
                <ul className={styles.results}>
                    {results.map((result, index) => (
                        <li key={index}>
                            <Link href={`/clanky/${result.item.title}`}>
                                {result.item.title.split('-').join(' ')}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}