import { Roboto, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Local AI Team | AI Automation Agency",
  description: "Professional AI automation solutions for businesses of all sizes. Streamline workflows, enhance productivity, and unlock insights with our tailored AI services.",
  fontFamily: {
    sans: ['var(--font-roboto)'],
    mono: ['var(--font-jetbrains-mono)'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white text-neutral-800`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
