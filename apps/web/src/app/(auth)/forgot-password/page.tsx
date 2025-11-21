"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [credential, setCredential] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending reset link to:", credential);
    // Add your API call here
  };

  return (
    <div className="min-h-screen bg-background font-['Inter'] flex flex-col">
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
        {/* Left: Form */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <Card className="w-full max-w-md border-0 shadow-none lg:border lg:shadow-xl">
            <CardContent className="pt-8 space-y-4">
              {/* Logo */}
              <div className="text-center lg:text-left">
                <Link href="/" className="inline-flex items-center gap-3">
                  <MessageSquare className="h-9 w-9 text-primary" />
                  <span className="text-2xl font-bold">NepalSMS</span>
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reliable Bulk SMS for Nepal.
                </p>
              </div>

              {/* Header */}
              <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-3xl font-bold tracking-tight">
                  Forgot Password?
                </h1>
                <p className="text-muted-foreground">
                  No worries, we’ll send you reset instructions.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="credential">Email or Phone Number</Label>
                  <Input
                    id="credential"
                    type="text"
                    placeholder="Enter your registered email or phone"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                    className="h-12 rounded-xl"
                  />
                </div>

                <Button size="lg" className="w-full rounded-xl font-semibold">
                  Send Reset Instructions
                </Button>
              </form>

              {/* Back to Login */}
              <div className="text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Log In
                </Link>
              </div>

              {/* Footer Links */}
              <div className="text-center text-xs text-muted-foreground">
                <div className="flex justify-center gap-4">
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                  <span>•</span>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Hero Image */}
        <div className="hidden lg:block relative overflow-hidden bg-muted">
          <Image
            src="/images/rolls.jpg"
            alt="Himalayan landscape"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-12 text-white max-w-xl">
            <h2 className="text-5xl font-black leading-tight">
              Connect with Everyone.
              <br />
              Instantly.
            </h2>
            <p className="mt-6 text-lg text-white/90">
              Your reliable partner for bulk SMS communication across Nepal —
              from the Terai plains to the Himalayan peaks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
