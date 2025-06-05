import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Flio',
    description: 'Flio - Developer Portfolio Platform',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="loitwx.">
            <body className="" data-oid="xwpyce6">
                {children}
            </body>
        </html>
    );
}
