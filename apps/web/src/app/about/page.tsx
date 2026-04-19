import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ThemeToggle } from "@/components/header/ThemeToggle";
import { isUserLoggedIn } from "@/lib/data/cookies";
import {
  ArrowLeft,
  BadgeCheck,
  BarChart3,
  CheckCircle,
  Rocket,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

export default async function AboutPage() {
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20 mb-4">
              <Sparkles className="h-4 w-4" />
              Built for practical email growth
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
              About Bulk Email
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Bulk Email is a focused platform for creating, managing, and sending email campaigns with a clear workflow, reliable background processing, and simple analytics.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="border-border/50 bg-card/80 backdrop-blur hover:border-primary/30 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Rocket className="h-5 w-5 text-primary" />
                  Mission
                </CardTitle>
                <CardDescription>Make campaign sending simple and dependable</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We help teams upload contacts, create campaigns, and track delivery without unnecessary complexity.
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur hover:border-primary/30 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Shield className="h-5 w-5 text-primary" />
                  Reliability
                </CardTitle>
                <CardDescription>Built around queued background processing</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                File import and email delivery are handled asynchronously so the app stays responsive during larger operations.
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur hover:border-primary/30 transition-colors md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Outcome
                </CardTitle>
                <CardDescription>Clear reporting for real-world usage</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Campaign totals, delivery status, and contact management give you the essentials without dashboard clutter.
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 max-w-6xl mx-auto mt-10">
            <Card className="border-border/50 bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle>Why this project stands out</CardTitle>
                <CardDescription>A short explanation you can use in presentation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-primary" /> Simple contact import and validation flow</p>
                <p className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-primary" /> Background workers for large file and email tasks</p>
                <p className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-primary" /> Consistent UI with reusable cards, buttons, and gradients</p>
                <p className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4 text-primary" /> Built for practical business workflows rather than flashy extras</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle>What users can do</CardTitle>
                <CardDescription>Core actions supported by the app</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-primary" /> Create and manage campaigns</p>
                <p className="flex items-start gap-2"><Users className="mt-0.5 h-4 w-4 text-primary" /> Upload and organize contacts</p>
                <p className="flex items-start gap-2"><BarChart3 className="mt-0.5 h-4 w-4 text-primary" /> Monitor performance and status</p>
                <p className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-primary" /> Use a modern, responsive interface</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mt-10">
            <Card className="border-border/50 bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle>Ready to explore?</CardTitle>
                <CardDescription>Continue based on whether you already have an account.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="flex-1">
                  <Link href={isLoggedIn ? "/dashboard" : "/login"}>
                    {isLoggedIn ? "Open Dashboard" : "Go to Login"}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
