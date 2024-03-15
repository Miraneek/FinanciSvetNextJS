import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ColorButton from "@/components/ColorButton/ColorButton";
import {ThemeProvider} from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Finanční Svět",
    description: "Generated by create next app",
    charset: "utf-8",
    icon: "/icon.png",
};

export default function RootLayout({children}) {
    return (
        <html lang="cs" suppressHydrationWarning={true}>
        <body className={inter.className}>
        <ThemeProvider themes={['light', 'dark']}>
            <SpeedInsights/>
            <Navbar/>
            <ColorButton/>
            <main>
                {children}
            </main>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
