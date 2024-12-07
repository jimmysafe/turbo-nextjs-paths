import localFont from "next/font/local";

export const sans = localFont({
  src: "./files/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const mono = localFont({
  src: "./files/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});