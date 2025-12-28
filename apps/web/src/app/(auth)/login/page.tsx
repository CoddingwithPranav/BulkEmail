"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginMutation,
  useRegisterMutation,
} from "@/hooks/queries/auth.query";
import { setAuthToken } from "@/lib/data/cookies";
import { useAuthStore } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginBodySchema,
  LoginForm,
  registerBodySchema,
  RegisterForm,
} from "@repo/types";
import { Eye, EyeOff, Mail, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function AuthPage() {
  const { setToken, setUser } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">(
    "register"
  );
  const [accountType, setAccountType] = useState<"INDIVIDUAL" | "ORGANIZATION">(
    "INDIVIDUAL"
  );
  const { mutate: loginMutate, isPending: isLoginLoading } = useLoginMutation();
  const { mutate: registerMutate, isPending: isRegisterLoading } =
    useRegisterMutation();
  const router = useRouter();

  const registerForm = useForm<RegisterForm>({
    resolver: zodResolver(registerBodySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      accountType: "INDIVIDUAL",
    },
  });

  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginBodySchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const onLogin = async (data: LoginForm) => {
    loginMutate(data, {
      onSuccess: async (response) => {
        const { user, token } = response.data;
        await setAuthToken(token.accessToken, user.role);
        setToken(token.accessToken);
        setUser(user);
        router.push("/dashboard");
        toast.success("Login successful!");
      },
      onError: (error) => {
        console.log(error);
        toast.error("Login failed. Please check your credentials.");
      },
    });
  };

  const onRegister = async (data: RegisterForm) => {
    const trimmedName = (data.fullName ?? "").trim();
    const nameParts = trimmedName.split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || firstName;

    const payload = {
      firstName,
      lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      accountType: accountType,
      isEmailVerified: false,
    };

    registerMutate(payload, {
      onSuccess: () => {
        toast.success("Account created! Please verify your email.");
        router.push(
          `/verify-account?email=${encodeURIComponent(data.email!)}`
        );
      },
      onError: (error: any) => {
        toast.error(error.response?.data?.message || "Registration failed");
      },
    });
  };

  return (
    <div className="flex min-h-screen bg-background">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-brand bg-clip-text text-transparent">
                Bulk Email
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">
              {activeTab === "register" ? "Create Your Account" : "Welcome Back"}
            </h1>
            <p className="text-muted-foreground">
              {activeTab === "register"
                ? "Join thousands of teams sending better emails"
                : "Sign in to your Bulk Email account"}
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
            <TabsList className="grid w-full grid-cols-2 bg-muted p-1 rounded-lg mb-8">
              <TabsTrigger value="register">Sign Up</TabsTrigger>
              <TabsTrigger value="login">Sign In</TabsTrigger>
            </TabsList>

            {/* Register Tab */}
            <TabsContent value="register" className="space-y-6">
              <form
                onSubmit={registerForm.handleSubmit(onRegister)}
                className="space-y-5"
              >
                <div>
                  <Label className="text-sm font-medium">
                    Full Name / Organization
                  </Label>
                  <Input
                    {...registerForm.register("fullName")}
                    placeholder="John Doe or Your Company"
                    className="mt-2 h-12 rounded-lg"
                  />
                  {registerForm.formState.errors.fullName && (
                    <p className="text-sm text-destructive mt-1.5">
                      {registerForm.formState.errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium">Email Address</Label>
                  <Input
                    {...registerForm.register("email")}
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 h-12 rounded-lg"
                  />
                  {registerForm.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1.5">
                      {registerForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium">Phone Number</Label>
                  <div className="flex mt-2 rounded-lg overflow-hidden border border-input">
                    <span className="inline-flex items-center px-4 bg-muted text-muted-foreground font-medium">
                      +977
                    </span>
                    <Input
                      {...registerForm.register("phoneNumber")}
                      placeholder="9801234567"
                      className="border-0 h-12 rounded-none"
                    />
                  </div>
                  {registerForm.formState.errors.phoneNumber && (
                    <p className="text-sm text-destructive mt-1.5">
                      {registerForm.formState.errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium">Password</Label>
                  <div className="relative mt-2">
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...registerForm.register("password")}
                      placeholder="Create a strong password"
                      className="h-12 pr-10 rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {registerForm.formState.errors.password && (
                    <p className="text-sm text-destructive mt-1.5">
                      {registerForm.formState.errors.password.message}
                    </p>
                  )}
                </div>


                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold rounded-lg"
                  disabled={isRegisterLoading}
                >
                  {isRegisterLoading
                    ? "Creating Account..."
                    : "Create Account"}
                </Button>
              </form>
            </TabsContent>

            {/* Login Tab */}
            <TabsContent value="login" className="space-y-6">
              <form
                onSubmit={loginForm.handleSubmit(onLogin)}
                className="space-y-5"
              >
                <div>
                  <Label className="text-sm font-medium">
                    Email or Phone
                  </Label>
                  <Input
                    {...loginForm.register("name")}
                    placeholder="you@example.com or 9801234567"
                    className="mt-2 h-12 rounded-lg"
                  />
                  {loginForm.formState.errors.name && (
                    <p className="text-sm text-destructive mt-1.5">
                      {loginForm.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-sm font-medium">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...loginForm.register("password")}
                      placeholder="Enter your password"
                      className="h-12 pr-10 rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {loginForm.formState.errors.password && (
                    <p className="text-sm text-destructive mt-1.5">
                      {loginForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-base font-semibold rounded-lg"
                  disabled={isLoginLoading}
                >
                  {isLoginLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Right Side - Gradient Background */}
      <div className="hidden lg:flex w-1/2 p-8 lg:p-12">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/village.jpg"
            alt="Himalayas"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <div className="space-y-4 "
            >
              <Image src="/images/logo.svg" alt="Logo" width={60} height={60} className="" />
              <h2 className="text-4xl font-bold text-white">
                Send Better Emails
              </h2>
              <p className="text-xl text-white/70 max-w-sm">
                Reach your audience with professional, personalized email
                campaigns. Fast, reliable, and built for scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
