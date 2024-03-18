import styles from "./Footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footerLinks}>
                <h3>Credits</h3>
                <ul>
                    <li>
                        <h4>Icons</h4>
                        <h5>
                            <a href="https://tablericons.com/">Tabler Icons</a>
                            <a href="https://tablericons.com/" target="_blank">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/footer/tabler%20icon%20logo.png" alt="Tabler Icons logo"/>
                            </a>
                        </h5>
                    </li>
                    <li>
                        <h4>Programming</h4>
                        <h5>Miroslav Novotný
                            <a href="https://github.com/Miraneek" target="_blank">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/footer/github%20logo.png" alt="GitHub logo"/>
                            </a>
                        </h5>
                        <h5>Filip Másilko
                            <a href="https://github.com/Felepena" target="_blank">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/footer/github%20logo.png" alt="GitHub logo"/>
                            </a>
                        </h5>
                    </li>
                    <li>
                        <h4>Design</h4>
                        <h5>Matěj Rybář
                            <a href="https://www.instagram.com/matyrybarr/" target="_blank">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/footer/instagram%20logo.webp" alt="Instagram logo"/>
                            </a>
                        </h5>
                        <h5>Vito Kraus🙈
                            <span>
                        <a href="https://www.instagram.com/vito.kraus/" target="_blank">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/footer/instagram%20logo.webp" alt="Instagram logo"/>
                        </a>
                        <a href="https://www.linkedin.com/in/vito-kraus-b504532aa/" target="_blank">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/footer/linkedin.jpg" alt="LinkedIn logo"/>
                        </a>
                    </span>
                        </h5>
                    </li>
                </ul>
            </div>
            <hr className={styles.hr}/>
            <p>Copyright © 2024 Miroslav Novotný, Filip Masilko, and Matěj Rybář. All rights reserved.
                .</p>
        </footer>
    )
}