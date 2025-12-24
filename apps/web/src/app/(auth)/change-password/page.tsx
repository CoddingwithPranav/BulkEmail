// app/change-password/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useChangePasswordMutation } from "@/hooks/queries/auth.query";
import { useAuthStore } from "@/lib/store";
import { clearAuthToken } from "@/lib/data/cookies";
import { toast } from "sonner";

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const router = useRouter();
  const { clearAuth } = useAuthStore();
  const { mutate: changePassword, isPending } = useChangePasswordMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("New password must be at least 6 characters");
      return;
    }

    changePassword(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          toast.success("Password changed successfully! Logging you out...");
          setTimeout(async () => {
            await clearAuthToken();
            clearAuth();
            router.push("/login");
          }, 2000);
        },
        onError: (error: any) => {
          toast.error(
            error.response?.data?.message || "Current password is incorrect"
          );
        },
      }
    );
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md border border-border rounded-lg shadow-md p-8 bg-card">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
            <h1 className="text-2xl font-bold text-foreground">BulkEmail</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Reliable Bulk SMS for Nepal.
          </p>

          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Change Password
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Enter your current password and choose a new secure one.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label>Current Password</Label>
              <div className="relative mt-1">
                <Input
                  type={showPass.current ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="h-12 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPass({ ...showPass, current: !showPass.current })
                  }
                  className="absolute right-3 top-4 text-muted-foreground"
                >
                  {showPass.current ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <Label>New Password</Label>
              <div className="relative mt-1">
                <Input
                  type={showPass.new ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="h-12 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPass({ ...showPass, new: !showPass.new })
                  }
                  className="absolute right-3 top-4 text-muted-foreground"
                >
                  {showPass.new ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <Label>Confirm New Password</Label>
              <div className="relative mt-1">
                <Input
                  type={showPass.confirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-12 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPass({ ...showPass, confirm: !showPass.confirm })
                  }
                  className="absolute right-3 top-4 text-muted-foreground"
                >
                  {showPass.confirm ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg"
              disabled={isPending}
            >
              {isPending ? "Updating..." : "Update Password"}
            </Button>
          </form>

          <div className="text-center mt-8">
            <Link
              href="/login"
              className="text-sm text-primary hover:underline"
            >
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 p-8 lg:p-12">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/potrate.jpg"
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
              Your reliable partner for bulk SMS communication across Nepal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
