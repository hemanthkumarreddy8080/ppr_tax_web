import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Loader } from '@/components/loader';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pprtaxconsultancy.com'),
  title: {
    default: 'PPR Tax Consultancy | GST, Income Tax & Accounting Experts in Hyderabad',
    template: '%s | PPR Tax Consultancy',
  },
  description:
    'PPR Tax Consultancy provides reliable GST, Income Tax, Accounting, Audit, Registration, Payroll, Compliance and Business Advisory services for individuals, startups, SMEs and corporate clients across India. Led by K. Umamaheswara Reddy, B.Com (CA).',
  keywords: [
    'GST Registration',
    'Income Tax Returns',
    'GST Returns',
    'Accounting Services',
    'Audit Services',
    'Company Registration',
    'LLP Registration',
    'MSME Registration',
    'Payroll Services',
    'TDS Returns',
    'Tax Consultant Hyderabad',
    'PPR Tax Consultancy',
    'K. Umamaheswara Reddy',
  ],
  authors: [{ name: 'PPR Tax Consultancy' }],
  creator: 'PPR Tax Consultancy',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://pprtaxconsultancy.com',
    siteName: 'PPR Tax Consultancy',
    title: 'PPR Tax Consultancy | GST, Income Tax & Accounting Experts',
    description:
      'Trusted GST, Income Tax, Accounting, Audit, Registration, Payroll and Compliance services across India. Led by K. Umamaheswara Reddy, B.Com (CA).',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPR Tax Consultancy | GST, Income Tax & Accounting Experts',
    description:
      'Trusted GST, Income Tax, Accounting, Audit, Registration, Payroll and Compliance services across India.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: 'https://pprtaxconsultancy.com' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans bg-cream text-navy-700">
        <Loader />
        {children}
      </body>
    </html>
  );
}
