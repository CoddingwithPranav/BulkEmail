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
import {
  LoginForm,
  loginSchema,
  RegisterForm,
  registerSchema,
} from "@/lib/schemas/auth.schema";
import { useAuthStore } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function AuthPage() {
  const { setToken, setUser } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">("register");
  const [accountType, setAccountType] = useState<"INDIVIDUAL" | "ORGANIZATION">(
    "INDIVIDUAL"
  );
  const { mutate: loginMutate, isPending: isLoginLoading } = useLoginMutation();
  const { mutate: registerMutate, isPending: isRegisterLoading } =
    useRegisterMutation();
  const router = useRouter();

  const registerForm = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      accountType: "INDIVIDUAL",
    },
  });

  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
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
        // Redirect
        router.push("/");
        toast.success("Login successful!");
      },
      onError: (error) => {
        console.log(error);
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
      isGuest: false,
      accountType: data.accountType,
    };

    registerMutate(payload, {
      onSuccess: async (response) => {
        const { user, token } = response.data;
        await setAuthToken(token.accessToken, user.role);
        setToken(token.accessToken);
        setUser(user);
        // Redirect
        router.push("/");
        toast.success("Login successful!");
      },
      onError: (error) => {
        console.log(error);
      },
    });
    setActiveTab("login");
    registerForm.reset();
  };

  const handleGuest = () => {
    router.push("/guest");
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* LEFT SIDE - FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md border border-border rounded-lg shadow-md p-8 bg-card">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">NepalSMS</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Reliable Bulk SMS for Nepal.
          </p>

          <h2 className="text-3xl font-bold text-foreground">
            {activeTab === "register" ? "Create Your Account" : "Welcome Back"}
          </h2>
          <p className="text-muted-foreground mt-1 mb-6 text-sm">
            {activeTab === "register"
              ? "Or log in if you already have an account."
              : "Sign in to access your dashboard."}
          </p>

          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
            <TabsList className="grid w-full grid-cols-2 bg-muted p-1 rounded-lg mb-8">
              <TabsTrigger value="register">Register</TabsTrigger>
              <TabsTrigger value="login">Log In</TabsTrigger>
            </TabsList>

            {/* ====================== REGISTER ====================== */}
            <TabsContent value="register">
              <form
                onSubmit={registerForm.handleSubmit(onRegister)}
                className="space-y-5"
              >
                <div>
                  <Label>Full Name / Organization Name</Label>
                  <Input
                    {...registerForm.register("fullName")}
                    placeholder="Enter your full name or organization"
                    className="mt-1 h-12"
                  />
                  {registerForm.formState.errors.fullName && (
                    <p className="text-sm text-destructive mt-1">
                      {registerForm.formState.errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Email Address</Label>
                  <Input
                    {...registerForm.register("email")}
                    type="email"
                    placeholder="name@example.com"
                    className="mt-1 h-12"
                  />
                  {registerForm.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {registerForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Phone Number</Label>
                  <div className="flex mt-1">
                    <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 bg-muted text-muted-foreground">
                      +977
                    </span>
                    <Input
                      {...registerForm.register("phoneNumber")}
                      placeholder="98XXXXXXXX"
                      className="rounded-l-none h-12"
                    />
                  </div>
                  {registerForm.formState.errors.phoneNumber && (
                    <p className="text-sm text-destructive mt-1">
                      {registerForm.formState.errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Password</Label>
                  <div className="relative mt-1">
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...registerForm.register("password")}
                      placeholder="Enter a strong password"
                      className="h-12 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {registerForm.formState.errors.password && (
                    <p className="text-sm text-destructive mt-1">
                      {registerForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="text-sm font-medium">Account Type</Label>
                  <div className="flex gap-4 mt-2">
                    {(["INDIVIDUAL", "ORGANIZATION"] as const).map((type) => (
                      <Button
                        key={type}
                        type="button"
                        variant="outline"
                        className={`flex-1 ${accountType === type ? "bg-primary text-white border-primary" : ""}`}
                        onClick={() => {
                          setAccountType(type);
                          registerForm.setValue("accountType", type);
                        }}
                      >
                        {type === "INDIVIDUAL" ? "Individual" : "Organization"}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-lg"
                  disabled={registerForm.formState.isSubmitting}
                >
                  {registerForm.formState.isSubmitting
                    ? "Creating..."
                    : "Create Account"}
                </Button>
              </form>
            </TabsContent>

            {/* ====================== LOGIN ====================== */}
            <TabsContent value="login">
              <form
                onSubmit={loginForm.handleSubmit(onLogin)}
                className="space-y-5"
              >
                <div>
                  <Label>Email or Phone</Label>
                  <Input
                    {...loginForm.register("name")}
                    placeholder="email@example.com or 98XXXXXXXX"
                    className="mt-1 h-12"
                  />
                </div>

                <div>
                  <Label>Password</Label>
                  <div className="relative mt-1">
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...loginForm.register("password")}
                      placeholder="Enter your password"
                      className="h-12 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
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
                  disabled={loginForm.formState.isSubmitting}
                >
                  {loginForm.formState.isSubmitting
                    ? "Logging in..."
                    : "Log In"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="flex items-center my-8">
            <span className="flex-1 border-t border-border/50" />
            <span className="px-3 text-xs text-muted-foreground">OR</span>
            <span className="flex-1 border-t border-border/50" />
          </div>

          <Button
            variant="outline"
            className="w-full h-12"
            onClick={handleGuest}
          >
            <Eye className="h-4 w-4 mr-2" />
            Try as Guest
          </Button>

          {activeTab === "login" && (
            <div className="text-center mt-6">
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          )}

          <div className="flex justify-center gap-4 text-xs mt-6 text-muted-foreground">
            <Link href="#">Terms of Service</Link>
            <span>•</span>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE */}
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
              Your reliable partner for bulk SMS communication across Nepal,
              from the Terai plains to the Himalayan peaks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
