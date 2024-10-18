import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import LocaleSwitcher from "@/components/locale-select";
import {Locale} from "@/i18n-config";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "APOD App",
    description: "Zemingo test app",
};

export async function generateStaticParams() {
    return [{locale: 'en-US'}, {locale: 'ru-RU'}, {locale: 'he-IL'}] as {locale: Locale}[]
}


export default async function RootLayout({
                                       children,
                                       params
                                   }: Readonly<{
    children: React.ReactNode;
    params: { locale: Locale };
}>) {
    return (
        <html lang={params.locale} dir={params.locale === 'he-IL' ? 'rtl' : 'ltr'}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased mx-8 my-6`}
        >
        <header className="flex justify-end mb-2">
            <LocaleSwitcher locale={params.locale}/>
        </header>
        {children}
        </body>
        </html>
    );
}
