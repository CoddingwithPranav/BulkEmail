// app/verify-otp/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MessageCircle,
  ShieldCheck,
  ArrowLeft,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  useVerifyOTPMutation,
  useResendOTPMutation,
  useResetPasswordMutation,
} from "@/hooks/queries/auth.query";
import { toast } from "sonner";
import axiosInstance from "@/axios";

type Step = "email" | "otp" | "new-password";

export default function ResetPasswordPage() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const router = useRouter();
  const { mutate: resend } = useResendOTPMutation();
  const { mutate: resetPassword, isPending: isResetting } =
    useResetPasswordMutation();

  useEffect(() => {
    if (step === "otp") inputsRef.current[0]?.focus();
  }, [step]);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Enter a valid email");

    try {
      await axiosInstance.post("/auth/forgot-password", { email });
      toast.success("OTP sent to your email!");
      setStep("otp");
      setOtp(["", "", "", "", "", ""]);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to send OTP");
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length !== 6) return toast.error("Enter full 6-digit code");
    setStep("new-password");
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    resetPassword(
      {
        email,
        otp: otp.join(""),
        newPassword,
      },
      {
        onSuccess: () => {
          router.push("/login");
        },
      }
    );
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
      setTimeout(
        () => inputsRef.current[Math.min(pasted.length - 1, 5)]?.focus(),
        0
      );
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

  return (
    <div className="flex min-h-screen bg-background">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md border border-border rounded-lg shadow-md p-8 bg-card">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
            <h1 className="text-2xl font-bold text-foreground">BulkEmail</h1>
          </div>

          {/* STEP 1: EMAIL */}
          {step === "email" && (
            <>
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Reset Password
                </h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  Enter your email to receive a verification code
                </p>
              </div>
              <form onSubmit={handleSendOTP} className="space-y-5">
                <div>
                  <Label>Email Address</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="mt-1 h-12"
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg">
                  Send Code
                </Button>
              </form>
            </>
          )}

          {/* STEP 2: OTP */}
          {step === "otp" && (
            <>
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Enter Code
                </h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  We sent a 6-digit code to
                  <br />
                  <span className="font-semibold">{email}</span>
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
                disabled={otp.join("").length !== 6}
              >
                Verify Code
              </Button>

              <div className="text-center mt-6 text-sm">
                <p className="text-muted-foreground">
                  Didn’t receive it?{" "}
                  <button
                    onClick={() => resend(email)}
                    className="text-primary font-medium hover:underline"
                  >
                    Resend
                  </button>
                </p>
              </div>

              <button
                onClick={() => setStep("email")}
                className="flex items-center gap-2 mx-auto mt-4 text-sm text-primary hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Change Email
              </button>
            </>
          )}

          {/* STEP 3: NEW PASSWORD */}
          {step === "new-password" && (
            <>
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Set New Password
                </h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  Your identity is verified. Choose a strong password.
                </p>
              </div>

              <form onSubmit={handleResetPassword} className="space-y-5">
                <div>
                  <Label>New Password</Label>
                  <div className="relative mt-1">
                    <Input
                      type={showPass ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="h-12 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-4 text-muted-foreground"
                    >
                      {showPass ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <Label>Confirm Password</Label>
                  <Input
                    type={showPass ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12"
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-lg">
                  {isResetting ? "Changing Password..." : "Change Password"}
                </Button>
              </form>
            </>
          )}

          <div className="text-center mt-8">
            <Link
              href="/login"
              className="text-sm text-primary hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - HERO */}
      <div className="hidden lg:flex w-1/2 p-8 lg:p-12">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/village.jpg"
            alt="Himalayas"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-3xl font-bold leading-tight">
              Connect with Everyone.
              <br />
              Instantly.
            </h1>
            <p className="mt-3 text-sm text-white/80 max-w-sm">
              Your reliable partner for bulk Email communication across Nepal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
