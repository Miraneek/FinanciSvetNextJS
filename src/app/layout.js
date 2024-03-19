import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/react"
import styles from "./page.module.css"
import {Noto_Sans} from 'next/font/google'
import "./globals.css";


const font = Noto_Sans({
    weight: '400',
    subsets: ['latin'],
})

export const metadata = {
    title: "Finanční Svět",
    description: "Generated by create next app",
    charset: "utf-8",
    icon: "/icon.png",
};

export default function RootLayout({children}) {
    return (
        <html lang="cs">
        <body className={font.className}>
        <SpeedInsights/>
        <Analytics/>
        <Navbar/>
        <div className={styles.transitionBlur}></div>
        <main className={styles.main}>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
