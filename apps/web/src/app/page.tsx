// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-brand text-4xl">forward_to_inbox</span>
            <span className="text-xl font-bold tracking-tight">MessagingNepal</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["Features", "How It Works", "Testimonials", "Pricing"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-primary">
              Login
            </Link>
            <Button asChild className="bg-primary hover:opacity-90">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Instant Messaging <br />
                <span className="text-brand">Across Nepal</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Send bulk SMS, personalized campaigns, or use guest mode — reach anyone in Nepal in seconds. Trusted by businesses, NGOs, and communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:opacity-90 text-lg px-8" asChild>
                  <Link href="/send">Start Sending Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link href="/guest">Try Guest Mode</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video md:aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/1.jpg"
                  alt="Himalayan sunrise with SMS notification"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Powerful Features</h2>
            <p className="text-lg text-muted-foreground">Everything you need to connect instantly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "location_on", title: "Location Targeting", desc: "Send to specific cities or regions across Nepal" },
              { icon: "alternate_email", title: "Personalized Messages", desc: "Use names & custom fields for higher engagement" },
              { icon: "group", title: "Team Accounts", desc: "Collaborate seamlessly with your team" },
              { icon: "rocket_launch", title: "Guest Quick Send", desc: "No login needed — send instantly" },
            ].map((feature) => (
              <Card key={feature.title} className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-brand flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">How It Works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to reach your audience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { step: 1, title: "Upload Contacts", desc: "Paste numbers or upload Excel/CSV in seconds" },
              { step: 2, title: "Craft Message", desc: "Write, personalize, attach files & preview" },
              { step: 3, title: "Send & Track", desc: "Deliver instantly and monitor delivery status" },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-3xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Trusted by Nepali Voices</h2>
            <p className="text-lg text-muted-foreground">Real feedback from users across Nepal</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Sabina Karki", role: "Kathmandu Tech Hub", text: "Fastest and most reliable bulk SMS in Nepal. Perfect for customer outreach!" },
              { name: "Rajan Adhikari", role: "Pokhara Events Co.", text: "Guest mode is a lifesaver for urgent team announcements. Love it!" },
              { name: "Bimala Rai", role: "Himalayan Charity Org", text: "Personalized donor messages made easy. Simple and effective." },
            ].map((t) => (
              <Card key={t.name} className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">“{t.text}”</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 md:p-20 text-center space-y-8 border-border shadow-2xl rounded-3xl bg-gradient-to-b from-card to-muted/50">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Connect Instantly?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of Nepali businesses and individuals. Start sending messages today — completely free to begin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:opacity-90 text-lg px-8" asChild>
                <Link href="/register">Create Free Account</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/guest">Send as Guest</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-sm text-muted-foreground">© 2025 MessagingNepal. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
}