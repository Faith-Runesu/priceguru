import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const space_Grotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500','600', '700']
  });
export const metadata = {
  title: "PriceGuru",
  description: "Track product prices across multiple websites in Zimbabwe",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
