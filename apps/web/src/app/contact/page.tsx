import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Clock, ArrowLeft, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ThemeToggle } from "@/components/header/ThemeToggle";
import { isUserLoggedIn } from "@/lib/data/cookies";

export default async function ContactPage() {
  const isLoggedIn = await isUserLoggedIn();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
            <span className="text-2xl font-bold bg-gradient-to-r from-brand to-primary bg-clip-text text-transparent">
              Bulk Email
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" className="font-medium">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back Home
              </Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 shadow-lg">
              <Link href={isLoggedIn ? "/dashboard" : "/login"}>
                {isLoggedIn ? "Dashboard" : "Get Started"}
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-brand/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 mb-4">
              <MessageCircle className="h-4 w-4" />
              We are here to help
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">Contact Us</h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Questions about campaigns, pricing, or onboarding? Reach out and our team will respond quickly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-border/50 bg-card/80 backdrop-blur hover:border-primary/30 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Mail className="h-5 w-5 text-primary" />
                  Email Support
                </CardTitle>
                <CardDescription>Best for technical and account issues</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">Average response time: within 24 hours</p>
                <Button asChild className="w-full">
                  <a href="mailto:support@bulkemail.pranavmishra.dev">
                    support@bulkemail.pranavmishra.dev
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur hover:border-primary/30 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone
                </CardTitle>
                <CardDescription>Talk directly with our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">Available on business days</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+9779818504846">+977 9818504846</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur hover:border-primary/30 transition-colors md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Clock className="h-5 w-5 text-primary" />
                  Working Hours
                </CardTitle>
                <CardDescription>When you can expect a fast response</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Sunday - Friday: 10:00 AM - 6:00 PM</p>
                <p>Saturday: Closed</p>
                <p className="pt-2">Timezone: Nepal Time (NPT)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
