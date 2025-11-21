"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MessageSquare, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (pasted) {
      const newOtp = pasted.padEnd(6, "").split("").slice(0, 6);
      setOtp(newOtp);
      inputsRef.current[Math.min(pasted.length - 1, 5)]?.focus();
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  return (
    <div className="min-h-screen bg-background font-['Inter'] flex flex-col">
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
        {/* Left: Form */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <Card className="w-full max-w-md border-0 shadow-none lg:border lg:shadow-xl">
            <CardContent className="pt-8 space-y-8">
              {/* Logo */}
              <div className="text-center lg:text-left">
                <Link href="/" className="inline-flex items-center gap-3">
                  <MessageSquare className="h-9 w-9 text-primary" />
                  <span className="text-2xl font-bold">NepalSMS</span>
                </Link>
              </div>

              {/* Header */}
              <div className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">
                    Check your email
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    We sent a 6-digit code to
                    <br />
                    <span className="font-medium text-foreground">
                      suzaanmahato22@gmail.com
                    </span>
                  </p>
                </div>
              </div>

              {/* OTP Inputs */}
              <form className="space-y-8">
                <div className="flex justify-center gap-3">
                  {otp.map((digit, i) => (
                    <Input
                      key={i}
                      ref={(el) => (inputsRef.current[i] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e.target.value, i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      onPaste={handlePaste}
                      className="w-14 h-14 text-center text-2xl font-semibold rounded-xl"
                      aria-label={`OTP digit ${i + 1}`}
                    />
                  ))}
                </div>

                <Button
                  size="lg"
                  className="w-full rounded-xl font-semibold"
                  disabled={!isComplete}
                >
                  Verify & Continue
                </Button>
              </form>

              {/* Resend */}
              <div className="text-center text-sm">
                <p className="text-muted-foreground">
                  Didn’t receive it?{" "}
                  <button
                    type="button"
                    className="font-medium text-primary hover:underline"
                  >
                    Resend code
                  </button>
                </p>
              </div>

              {/* Back */}
              <div className="text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Log In
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Hero */}
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
