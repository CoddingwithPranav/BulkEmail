// src/app/routes/index.route.tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Build Something
            <span className="text-primary"> Amazing</span> Today
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            The ultimate React + TypeScript + shadcn/ui starter kit. 
            Production-ready dashboard with authentication, beautiful UI, and modern architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isAuthenticated ? (
              <Button asChild size="lg">
                <Link to="/dashboard">
                  Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild size="lg">
                  <Link to="/login">Get Started Free</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener">
                    View on GitHub
                  </a>
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Blazing Fast</h3>
            <p className="text-muted-foreground">
              Built with Vite + React Router + TypeScript for instant development and lightning-fast builds.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Secure by Default</h3>
            <p className="text-muted-foreground">
              Protected routes, Zustand auth state, mock API — everything ready for real auth later.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Beautiful UI</h3>
            <p className="text-muted-foreground">
              Powered by shadcn/ui + Tailwind CSS + dark mode. Looks professional out of the box.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to build your next big thing?
          </h2>
          <Button size="lg" variant="secondary" asChild>
            {isAuthenticated ? (
              <Link to="/dashboard">Open Dashboard</Link>
            ) : (
              <Link to="/login">Start Building Now</Link>
            )}
          </Button>
        </div>
      </section>
    </div>
  );
}