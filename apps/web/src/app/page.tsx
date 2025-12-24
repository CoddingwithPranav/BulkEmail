import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/header/ThemeToggle";
import {
  Send,
  Users,
  Zap,
  Globe,
  MessageCircle,
  Mail,
  CheckCircle,
  Rocket,
  BarChart3,
  Lock,
  Zap as ZapIcon,
  ArrowRight,
} from "lucide-react";
import { clearAuthToken, isUserLoggedIn } from "@/lib/data/cookies";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const isLoggedIn = await isUserLoggedIn();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center group gap-2">
           <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
            <span className="text-2xl font-bold bg-gradient-to-r from-brand to-primary bg-clip-text text-transparent">
              Bulk Email
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {["Features", "How It Works", "Pricing", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Button asChild variant="ghost" className="font-medium">
                  <Link href="/dashboard">
                    <Zap className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>

                <form
                  action={async () => {
                    "use server";
                    await clearAuthToken();
                    redirect("/");
                  }}
                >
                  <Button
                    type="submit"
                    variant="outline"
                    className="font-medium border-primary/20 hover:bg-primary/10"
                  >
                    Logout
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden sm:block text-foreground/70 hover:text-primary font-medium"
                >
                  Login
                </Link>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 shadow-lg"
                >
                  <Link href="/login">Get Started</Link>
                </Button>
              </>
            )}

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-brand/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                  <Rocket className="h-4 w-4" />
                  Professional Email at Scale
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                  Send Emails
                  <br />
                  <span className="text-brand">That Convert</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Professional bulk email campaigns with advanced analytics, automation, and delivery tracking. Perfect for businesses, agencies, and organizations of any size.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl"
                >
                  <Link href="/login">
                    <Send className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-14 px-8 text-lg font-medium"
                >
                  <Link href="#features">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-muted-foreground">Delivery Rate</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>

            {/* Hero Image - Gradient Box */}
            <div className="relative group hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-brand/30 to-primary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border bg-gradient-to-br from-primary/5 to-brand/5 ">
                <Image src="/images/hero-email.jpeg" alt="Email Campaigns" width={400} height={300} className="w-full h-full object-cover " />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful tools for professional email marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Bulk Email Campaigns",
                desc: "Send to thousands of recipients with personalization and dynamic content",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                desc: "Track opens, clicks, and conversions with detailed reporting",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                desc: "Manage multiple users, roles, and approval workflows",
              },
              {
                icon: Rocket,
                title: "Quick Send",
                desc: "Send individual emails instantly without creating a campaign",
              },
              {
                icon: Lock,
                title: "Enterprise Security",
                desc: "Bank-level security with encryption and compliance",
              },
              {
                icon: Zap,
                title: "Automation",
                desc: "Triggered emails, workflows, and scheduled campaigns",
              },
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Send emails worldwide with 99.9% delivery rate",
              },
              {
                icon: CheckCircle,
                title: "Email Verification",
                desc: "Automatic list cleaning and duplicate detection",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur hover:border-primary/30"
              >
                <feature.icon className="h-12 w-12 text-brand mb-4" />
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Simple. Powerful. Fast.
            </h2>
            <p className="text-xl text-muted-foreground">
              Send professional emails in minutes, not hours
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Upload Contacts",
                desc: "Import from CSV, Excel, or paste directly",
              },
              {
                step: "02",
                title: "Design Email",
                desc: "Use templates or create custom HTML emails",
              },
              {
                step: "03",
                title: "Personalize",
                desc: "Add dynamic fields like {name} and {company}",
              },
              {
                step: "04",
                title: "Send & Track",
                desc: "Hit send and monitor delivery in real-time",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
                <div className="space-y-4">
                  <div className="text-5xl font-bold text-primary/20">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Trusted by Teams</h2>
            <p className="text-xl text-muted-foreground">
              Leading organizations use Bulk Email every day
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Marketing Director",
                company: "Tech Startup",
                text: "Best email marketing tool we've used. Clean interface, powerful features, and incredible support.",
              },
              {
                title: "E-commerce Manager",
                company: "Online Store",
                text: "Our conversion rates increased 150% after switching. The analytics are exactly what we needed.",
              },
              {
                title: "Campaign Manager",
                company: "Nonprofit",
                text: "Bulk Email helped us raise 3x more funds. Their customer success team is amazing.",
              },
            ].map((t, i) => (
              <Card
                key={i}
                className="p-8 bg-card/80 backdrop-blur border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-base italic text-foreground/90 mb-6">"{t.text}"</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-bold text-sm">{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free. Scale as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                recipients: "Up to 1,000",
                features: [
                  "1 user account",
                  "Basic analytics",
                  "Email templates",
                  "Community support",
                ],
              },
              {
                name: "Professional",
                price: "$29",
                period: "/month",
                recipients: "Up to 100,000",
                features: [
                  "5 team members",
                  "Advanced analytics",
                  "Custom templates",
                  "Priority support",
                  "API access",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                recipients: "Unlimited",
                features: [
                  "Unlimited users",
                  "Dedicated account",
                  "White-label options",
                  "24/7 phone support",
                  "SLA guarantee",
                ],
              },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`p-8 relative ${
                  plan.highlighted
                    ? "border-primary/50 ring-2 ring-primary/20 md:scale-105"
                    : "border-border/50"
                } transition-all hover:shadow-xl`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {plan.recipients}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-4xl font-bold">{plan.price}</p>
                    {plan.period && (
                      <p className="text-sm text-muted-foreground">{plan.period}</p>
                    )}
                  </div>
                  <Button
                    asChild
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    <Link href="/login">Get Started</Link>
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of teams sending better emails every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                asChild
                className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl"
              >
                <Link href="/login">
                  Start Free Trial
                  <Send className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-14 px-8 text-lg font-medium"
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-6 h-6 text-brand" />
                <span className="text-lg font-bold">Bulk Email</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional email marketing for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    API Docs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-primary">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Bulk Email. All rights reserved. Made with{" "}
              <span className="text-red-500">❤️</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
