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

// Updated Metadata for MessagingNepal
export const metadata: Metadata = {
  title: {
    default: "MessagingNepal – Bulk  SMS in Nepal",
    template: "%s | MessagingNepal",
  },
  description:
    "Send instant bulk SMS, personalized messages. The fastest and most reliable SMS platform for businesses and individuals in Nepal.",
  keywords: [
    "bulk SMS Nepal",
    "SMS marketing Nepal",
    "personalized messaging",
    "Nepal SMS gateway",
    "fast SMS service",
  ],
  authors: [{ name: "MessagingNepal Team" }],
  creator: "MessagingNepal",
  publisher: "MessagingNepal",
  metadataBase: new URL("https://messagingnepal.com"), // Change to your domain later
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: "https://messagingnepal.com",
    siteName: "MessagingNepal",
    title: "MessagingNepal – Instant Bulk  SMS in Nepal",
    description: "Reach anyone in Nepal instantly. No signup needed for sends.",
    images: [
      {
        url: "/og-image.jpg", // Add this image later in /public
        width: 1200,
        height: 630,
        alt: "MessagingNepal – Fast SMS for Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MessagingNepal – Instant SMS Across Nepal",
    description: "Bulk SMS, personalization – all in one platform.",
    images: ["/og-image.jpg"],
    creator: "@messagingnepal", // Update when you have Twitter
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