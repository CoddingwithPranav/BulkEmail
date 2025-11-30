"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/header/ThemeToggle";
import { Mail, Zap } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <>
      <div className="fixed inset-0 flex flex-col bg-background overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-brand/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96  rounded-full blur-3xl animate-ping" />
        </div>

        <header className="relative shrink-0 border-b border-border/40 bg-background/70 backdrop-blur-xl z-50">
          <div className="container mx-auto flex h-16 items-center justify-between px-6">
            <Link href="/" className="flex items-center group">
              {/* <div className="relative">
                <Mountain className="h-8 w-8 text-brand rotate-12 group-hover:rotate-6 transition-transform" />
                <Send className="h-5 w-5 text-primary absolute -bottom-1 -right-1" />
              </div> */}
              <div className="relative">
                <Mail className="w-7 h-7 stroke-[2.5] text-brand group-hover:rotate-6 transition-transform" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-brand to-primary bg-clip-text text-transparent">
                MessangerNepal
              </span>
            </Link>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-5xl space-y-10 text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-8 py-4 text-primary font-bold text-lg border border-primary/20 shadow-lg animate-bounce">
              <Zap className="h-6 w-6 animate-pulse" />
              <span>Launching Very Soon in Nepal</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-tight">
              <span className="block">Nepal's Fastest</span>
              <span className="block text-6xl sm:text-7xl lg:text-9xl bg-gradient-to-r from-brand  to-primary bg-clip-text text-transparent animate-gradient-x">
                SMS Delivery
              </span>
              <span className="block mt-3 text-5xl sm:text-6xl text-foreground/80">
                Service <span className="text-primary">Provider</span>
              </span>
              {/* <span className="block mt-3 text-5xl sm:text-6xl text-foreground/80">
                is <span className="text-primary">Coming</span>
              </span> */}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
              From Sagarmatha to Terai — send bulk SMS, campaigns & alerts with
              unmatched speed.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
