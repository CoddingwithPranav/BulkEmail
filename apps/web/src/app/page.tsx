import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/header/ThemeToggle";
import { Mountain, Send, Users, Zap, Globe, MessageCircle } from "lucide-react";
import { clearAuthToken, isUserLoggedIn } from "@/lib/data/cookies";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const isLoggedIn = await isUserLoggedIn();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Mountain className="h-8 w-8 text-brand rotate-12 group-hover:rotate-6 transition-transform" />
              <Send className="h-5 w-5 text-primary absolute -bottom-1 -right-1" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-brand to-primary bg-clip-text text-transparent">
              MessangerNepal
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {["Features", "How It Works", "Testimonials", "Pricing"].map(
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
                  <Link href="/register">Get Started</Link>
                </Button>
              </>
            )}

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Zap className="h-4 w-4" />
                  Fastest SMS delivery in Nepal
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                  Reach Nepal
                  <br />
                  <span className="text-brand">In Seconds</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Send bulk SMS, personalized campaigns, or instant guest
                  messages. Trusted by thousands of businesses, NGOs, and
                  communities across Nepal.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-xl"
                >
                  <Link href="/send">
                    <Send className="mr-2 h-5 w-5" />
                    Start Sending Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-14 px-8 text-lg font-medium"
                >
                  <Link href="/guest">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Try Guest Mode
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  99.9% Delivery Rate
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Nepal’s fastest-growing SMS platform
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-primary/20 blur-3xl group-hover:blur-xl transition-all" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border">
                <Image
                  src="/images/monostori.jpg"
                  alt="Himalayas with SMS notifications"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-700"
                  priority
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful tools built for Nepal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Nationwide Coverage",
                desc: "Reach every corner of Nepal — from mountains to terai",
              },
              {
                icon: MessageCircle,
                title: "Personalized Messages",
                desc: "Use names, locations, and custom fields for 3x engagement",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                desc: "Multiple users, roles, and approval workflows",
              },
              {
                icon: Zap,
                title: "Guest Quick Send",
                desc: "Send instantly — no signup required",
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur"
              >
                <feature.icon className="h-12 w-12 text-brand mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
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
              Simple. Fast. Reliable.
            </h2>
            <p className="text-xl text-muted-foreground">
              Send messages in under 60 seconds
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Upload or Paste",
                desc: "Add contacts from Excel, CSV, or just paste numbers",
              },
              {
                step: "02",
                title: "Write & Personalize",
                desc: "Craft your message with dynamic fields like {name}",
              },
              {
                step: "03",
                title: "Send Instantly",
                desc: "Hit send and track delivery in real-time",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 2 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-6" />
                )}
                <div className="text-center space-y-6">
                  <div className="text-6xl font-bold text-primary/20">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Loved by Nepal</h2>
            <p className="text-xl text-muted-foreground">
              From Kathmandu to Karnali
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Owner",
                text: "Best bulk SMS service in Nepal. Our open rate increased 300%!",
              },
              {
                title: "Event Organizer",
                text: "Guest mode saves us every time. No more waiting for approvals.",
              },
              {
                title: "Nonprofit Leader",
                text: "Personalized messages helped us raise 45% more donations.",
              },
            ].map((t, i) => (
              <Card
                key={i}
                className="p-8 bg-card/80 backdrop-blur border-border/50"
              >
                <div className="mb-6">
                  <p className="font-bold">{t.title}</p>
                </div>
                <p className="text-lg italic text-foreground/90">{t.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold">
              Start Connecting Nepal Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by teams who need fast, reliable messaging every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                asChild
                className="h-16 px-12 text-xl font-bold bg-primary hover:bg-primary/90 shadow-2xl"
              >
                <Link href="/register">Create Free Account</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-16 px-12 text-xl font-medium"
              >
                <Link href="/guest">Send as Guest →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/50 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 MessagingNepal. Made with{" "}
            <span className="text-red-500">Love</span> in Nepal
          </p>
          <div className="mt-6 flex justify-center gap-8 text-sm">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
