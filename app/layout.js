import {Quicksand} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({subsets: ["latin"]});

export const metadata = {
    title: "PriceGuru",
    description: "Track product prices across multiple websites in Zimbabwe",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={quicksand.className}>
        <main className="max-w-10xl mx-auto">
            <Navbar/>
            {children}
        </main>
        </body>
        </html>
    );
}
