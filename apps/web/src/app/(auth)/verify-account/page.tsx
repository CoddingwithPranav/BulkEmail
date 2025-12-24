// app/verify-account/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useVerifyOTPMutation, useResendOTPMutation } from "@/hooks/queries/auth.query";
import { toast } from "sonner";

export default function VerifyAccountPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email") || "";
  const decodedEmail = email ? decodeURIComponent(email) : "";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const { mutate: verify, isPending: verifying } = useVerifyOTPMutation();
  const { mutate: resend, isPending: resending } = useResendOTPMutation();

  useEffect(() => {
    if (!decodedEmail || !decodedEmail.includes("@")) {
      toast.error("Invalid or missing email");
      router.push("/login");
    } else {
      inputsRef.current[0]?.focus();
    }
  }, [decodedEmail, router]);

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted) {
      const newOtp = pasted.padEnd(6, "").split("");
      setOtp(newOtp);
      setTimeout(() => inputsRef.current[Math.min(pasted.length - 1, 5)]?.focus(), 0);
    }
  };

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length !== 6) return toast.error("Enter full 6-digit code");

    verify(
      { email: decodedEmail, otp: code },
      {
        onSuccess: () => {
          toast.success("Email verified successfully!");
          router.push("/login");
        },
        onError: (err: any) => {
          toast.error(err.response?.data?.message || "Invalid OTP");
          setOtp(["", "", "", "", "", ""]);
          inputsRef.current[0]?.focus();
        },
      }
    );
  };

  const handleResend = () => {
    resend(decodedEmail, {
      onSuccess: () => toast.success("New code sent!"),
      onError: () => toast.error("Failed to resend"),
    });
  };

  if (!decodedEmail) return null;

  return (
    <div className="flex min-h-screen bg-background">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md border border-border rounded-lg shadow-md p-8 bg-card">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
            <h1 className="text-2xl font-bold text-foreground">BulkEmail</h1>
          </div>
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Verify Your Email</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              We sent a 6-digit code to<br />
              <span className="font-semibold text-foreground break-all">{decodedEmail}</span>
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-8">
            {otp.map((digit, i) => (
              <Input
                key={i}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onPaste={i === 0 ? handlePaste : undefined}
                className="w-14 h-14 text-center text-2xl font-bold rounded-xl border-2 focus:border-primary"
              />
            ))}
          </div>

          <Button
            onClick={handleVerify}
            className="w-full h-12 text-lg"
            disabled={verifying || otp.join("").length !== 6}
          >
            {verifying ? "Verifying..." : "Verify & Continue"}
          </Button>

          <div className="text-center mt-6 text-sm">
            <p className="text-muted-foreground">
              Didn’tReceive?{" "}
              <button onClick={handleResend} disabled={resending} className="text-primary font-medium hover:underline">
                {resending ? "Sending..." : "Resend Code"}
              </button>
            </p>
          </div>

          <div className="text-center mt-6">
            <Link href="/login" className="text-sm text-primary hover:underline">
              Back to Login
            </Link>
          </div>

          <div className="flex justify-center gap-4 text-xs mt-10 text-muted-foreground">
            <Link href="#">Terms</Link>
            <span>•</span>
            <Link href="#">Privacy</Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - HERO */}
      <div className="hidden lg:flex w-1/2 p-8 lg:p-12">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
          <Image src="/images/potrate.jpg" alt="Himalayas" fill className="object-cover" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-3xl font-bold leading-tight">
              Connect with Everyone.<br />Instantly.
            </h1>
            <p className="mt-3 text-sm text-white/80 max-w-sm">
              Your reliable partner for bulk SMS communication across Nepal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}