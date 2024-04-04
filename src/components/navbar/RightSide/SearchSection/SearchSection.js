"use client"
import {useEffect, useState} from 'react';
import styles from './SearchSection.module.css';
import Fuse from 'fuse.js';
import Link from "next/link";
import {articles} from "@/app/clanky/Clanky";
const fuse = new Fuse(articles, {
    keys: ['title', 'keywords'],
    includeScore: true,
});

export default function SearchSection({setIsSearchOpen}) {
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

    useEffect(() => {
        if (query.length > 0) {
            setIsSearchOpen(true);
        } else {
            setIsSearchOpen(false);
        }
    }, [results]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (results.length > 0) {
            window.location.href = `/clanky/${results[0].item.title}`;
        }
    };

    return (
        <section className={styles.searchSection}>
            <form action="" className={styles.searchBar} autoComplete={"off"} onSubmit={handleSubmit}>
                <label htmlFor="search">
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
            </form>
            {results.length > 0 && (
                <ul className={styles.results}>
                    <div className={styles.glow}></div>
                    {results.map((result, index) => (
                        index < 10 &&
                        <li key={result.item.title}>
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