// app/layout.tsx
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optional: Keep Geist if you love it, or switch to Spline Sans later via CSS
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Updated Metadata for Bulk Email
export const metadata: Metadata = {
  title: {
    default: "Bulk Email – Professional Email Marketing",
    template: "%s | Bulk Email",
  },
  description:
    "Send professional bulk emails with advanced analytics, automation, and 99.9% delivery rate. Perfect for businesses, agencies, and organizations.",
  keywords: [
    "bulk email",
    "email marketing",
    "email campaigns",
    "email automation",
    "email service provider",
  ],
  authors: [{ name: "Bulk Email Team" }],
  creator: "Bulk Email",
  publisher: "Bulk Email",
  metadataBase: new URL("https://bulkemail.com"), // Change to your domain later
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bulkemail.com",
    siteName: "Bulk Email",
    title: "Bulk Email – Professional Email Marketing",
    description: "Send professional bulk emails with advanced analytics and tracking.",
    images: [
      {
        url: "/og-image.jpg", // Add this image later in /public
        width: 1200,
        height: 630,
        alt: "Bulk Email – Professional Email Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk Email – Professional Email Marketing",
    description: "Send emails at scale with advanced analytics and automation.",
    images: ["/og-image.jpg"],
    creator: "@bulkemail", // Update when you have Twitter
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preload critical fonts if needed */}
        <link
          rel="preload"
          href="/fonts/spline-sans-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            {children}
            <Toaster position="top-center" richColors closeButton />
            {process.env.NODE_ENV === "development" && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}