"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/hooks/queries/auth.query";
import { setAuthToken } from "@/lib/data/cookies";
import { LoginForm, loginSchema } from "@/lib/schemas/auth.schema";
import { useAuthStore } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const { setToken, setUser } = useAuthStore();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending: isLoading } = useLoginMutation();

  const onSubmit = async (data: LoginForm) => {
    mutate(data, {
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

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex w-1/2 relative bg-cover bg-center bg-[url('/images/mg-bg.jpg')] overlay-dark text-white flex-col justify-center items-center px-10">
        <h1 className="text-4xl font-bold mb-2 z-10">MG Motors</h1>
        <p className="text-lg mb-4 z-10">Service Center</p>
        <p className="text-sm text-center max-w-sm mb-8 z-10">
          Professional automotive service management platform
        </p>

        <div className="overflow-hidden w-full z-10">
          <div className="whitespace-nowrap animate-scroll flex gap-10 items-center">
            {[2, 2, 2, 2, 2, 2, 2, 2, 2].map((num, index) => (
              <Image
                width={100}
                height={100}
                key={index}
                src={`/images/${num}.png`}
                alt={`Dealer ${num}`}
                className="h-12 object-contain"
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 text-xs text-center text-white/80 z-10">
          <p>Trusted by over 100+ service centers worldwide</p>
          <p className="mt-1">AutoCorp • DriveMax • ServicePro • QuickFix</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <Image
              width={48}
              height={48}
              src="/images/mg-logo.png"
              alt="MG Logo"
              className="w-12 mx-auto mb-2"
            />
            <h2 className="text-2xl font-semibold">Welcome Back</h2>
            <p className="text-sm text-muted-foreground">
              Sign in to your service center dashboard
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Login Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your login name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-2.5 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOffIcon size={18} />
                          ) : (
                            <EyeIcon size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant={"brand"} className="w-full">
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>

          <footer className="text-center text-xs text-muted-foreground mt-6">
            © 2025 MG Motors Service Center. All rights reserved.
            <br />
            <span className="text-xs">Secure • Reliable • Professional</span>
          </footer>
        </div>
      </div>

      {/* CUSTOM SCROLL ANIMATION & OVERLAY */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .overlay-dark::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
          z-index: 0;
        }
      `}</style>
    </div>
  );
}
