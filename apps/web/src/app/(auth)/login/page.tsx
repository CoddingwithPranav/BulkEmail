// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useLoginMutation } from "@/hooks/queries/auth.query";
// import { setAuthToken } from "@/lib/data/cookies";
// import { LoginForm, loginSchema } from "@/lib/schemas/auth.schema";
// import { useAuthStore } from "@/lib/store";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { EyeIcon, EyeOffIcon } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";

// export default function LoginPage() {
//   const router = useRouter();
//   const { setToken, setUser } = useAuthStore();

//   const form = useForm<LoginForm>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       name: "",
//       password: "",
//     },
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const { mutate, isPending: isLoading } = useLoginMutation();

//   const onSubmit = async (data: LoginForm) => {
//     mutate(data, {
//       onSuccess: async (response) => {
//         const { user, token } = response.data;
//         await setAuthToken(token.accessToken, user.role);
//         setToken(token.accessToken);
//         setUser(user);
//         // Redirect
//         router.push("/");
//         toast.success("Login successful!");
//       },
//       onError: (error) => {
//         console.log(error);
//       },
//     });
//   };

//   return (
//     <div className="flex min-h-screen">
//       <div className="hidden md:flex w-1/2 relative bg-cover bg-center bg-[url('/images/mg-bg.jpg')] overlay-dark text-white flex-col justify-center items-center px-10">
//         <h1 className="text-4xl font-bold mb-2 z-10">MG Motors</h1>
//         <p className="text-lg mb-4 z-10">Service Center</p>
//         <p className="text-sm text-center max-w-sm mb-8 z-10">
//           Professional automotive service management platform
//         </p>

//         <div className="overflow-hidden w-full z-10">
//           <div className="whitespace-nowrap animate-scroll flex gap-10 items-center">
//             {[2, 2, 2, 2, 2, 2, 2, 2, 2].map((num, index) => (
//               <Image
//                 width={100}
//                 height={100}
//                 key={index}
//                 src={`/images/${num}.png`}
//                 alt={`Dealer ${num}`}
//                 className="h-12 object-contain"
//               />
//             ))}
//           </div>
//         </div>

//         <div className="absolute bottom-10 text-xs text-center text-white/80 z-10">
//           <p>Trusted by over 100+ service centers worldwide</p>
//           <p className="mt-1">AutoCorp • DriveMax • ServicePro • QuickFix</p>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="flex w-full md:w-1/2 justify-center items-center p-8">
//         <div className="w-full max-w-md space-y-6">
//           <div className="text-center">
//             <Image
//               width={48}
//               height={48}
//               src="/images/mg-logo.png"
//               alt="MG Logo"
//               className="w-12 mx-auto mb-2"
//             />
//             <h2 className="text-2xl font-semibold">Welcome Back</h2>
//             <p className="text-sm text-muted-foreground">
//               Sign in to your service center dashboard
//             </p>
//           </div>

//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Login Name</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter your login name" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Password</FormLabel>
//                     <FormControl>
//                       <div className="relative">
//                         <Input
//                           type={showPassword ? "text" : "password"}
//                           placeholder="Enter your password"
//                           {...field}
//                         />
//                         <button
//                           type="button"
//                           className="absolute right-2 top-2.5 text-gray-500"
//                           onClick={() => setShowPassword(!showPassword)}
//                         >
//                           {showPassword ? (
//                             <EyeOffIcon size={18} />
//                           ) : (
//                             <EyeIcon size={18} />
//                           )}
//                         </button>
//                       </div>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <Button type="submit" variant={"brand"} className="w-full">
//                 {isLoading ? "Logging in..." : "Login"}
//               </Button>
//             </form>
//           </Form>

//           <footer className="text-center text-xs text-muted-foreground mt-6">
//             © 2025 MG Motors Service Center. All rights reserved.
//             <br />
//             <span className="text-xs">Secure • Reliable • Professional</span>
//           </footer>
//         </div>
//       </div>

//       {/* CUSTOM SCROLL ANIMATION & OVERLAY */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           animation: scroll 20s linear infinite;
//         }

//         .overlay-dark::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background-color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
//           z-index: 0;
//         }
//       `}</style>
//     </div>
//   );
// }


// app/auth/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/header/ThemeToggle";
import { Eye, EyeOff, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark overflow-hidden">
      {/* LEFT: Form – Takes full height */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-6 lg:p-12">
        <Card className="w-full max-w-lg border-0 shadow-2xl bg-surface-light dark:bg-surface-dark">
          <div className="p-8 lg:p-12 space-y-8">
            {/* Logo + Title */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <MessageCircle className="h-10 w-10 text-primary dark:text-secondary" />
                <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">NepalSMS</h1>
              </div>
              <p className="text-placeholder-light dark:text-placeholder-dark">
                Reliable Bulk SMS for Nepal
              </p>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-14 bg-gray-200/50 dark:bg-white/10 p-1.5 rounded-lg">
                <TabsTrigger value="register" className="data-[state=active]:bg-surface-light data-[state=active]:text-primary dark:data-[state=active]:bg-surface-dark dark:data-[state=active]:text-white rounded-md font-medium">
                  Register
                </TabsTrigger>
                <TabsTrigger value="login" className="data-[state=active]:bg-surface-light data-[state=active]:text-primary dark:data-[state=active]:bg-surface-dark dark:data-[state=active]:text-white rounded-md font-medium">
                  Log In
                </TabsTrigger>
              </TabsList>

              {/* Register Form */}
              <TabsContent value="register" className="mt-8 space-y-6">
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="name">Full Name / Organization</Label>
                    <Input id="name" placeholder="Enter your name or organization" className="mt-2 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" className="mt-2 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex mt-2">
                      <span className="inline-flex items-center rounded-l-lg border border-r-0 border-border-light dark:border-border-dark bg-gray-100 dark:bg-surface-dark px-4 text-sm font-medium">
                        +977
                      </span>
                      <Input id="phone" placeholder="98XXXXXXXX" className="rounded-l-none h-12" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative mt-2">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter a strong password"
                        className="h-12 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3.5 text-placeholder-light dark:text-placeholder-dark hover:text-primary"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    <p className="text-xs text-placeholder-light dark:text-placeholder-dark mt-1">
                      Must be at least 8 characters long.
                    </p>
                  </div>
                  <div>
                    <Label>Account Type</Label>
                    <RadioGroup defaultValue="individual" className="flex gap-8 mt-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="individual" id="individual" />
                        <Label htmlFor="individual" className="cursor-pointer font-medium">Individual</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="organization" id="organization" />
                        <Label htmlFor="organization" className="cursor-pointer font-medium">Organization</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <Button className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 dark:bg-secondary dark:hover:bg-secondary/90 shadow-lg">
                  Create Account
                </Button>
              </TabsContent>

              {/* Login Form */}
              <TabsContent value="login" className="mt-8 space-y-6">
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="login-email">Email or Phone</Label>
                    <Input id="login-email" placeholder="Enter email or phone" className="mt-2 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative mt-2">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="h-12 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3.5 text-placeholder-light dark:text-placeholder-dark hover:text-primary"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>
                <Button className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 dark:bg-secondary dark:hover:bg-secondary/90 shadow-lg">
                  Log In
                </Button>
              </TabsContent>
            </Tabs>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border-light dark:border-border-dark" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-surface-light dark:bg-surface-dark px-4 text-placeholder-light dark:text-placeholder-dark">
                  Or
                </span>
              </div>
            </div>

            <Button variant="outline" className="w-full h-14 text-lg font-medium flex items-center gap-3 border-border-light dark:border-border-dark hover:bg-accent/50">
              <Eye className="h-5 w-5" />
              Try as Guest
            </Button>

            <div className="text-center space-y-4 pt-6">
              <Link href="/forgot-password" className="text-sm font-medium text-primary hover:underline dark:text-secondary">
                Forgot Password?
              </Link>
              <div className="flex justify-center gap-4 text-xs text-placeholder-light dark:text-placeholder-dark">
                <Link href="/terms" className="hover:underline">Terms</Link>
                <span>•</span>
                <Link href="/privacy" className="hover:underline">Privacy</Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Theme Toggle – Top Left */}
        <div className="fixed top-6 left-6 z-50">
          <ThemeToggle />
        </div>
      </div>

      {/* RIGHT: Image – Same height as form, no overflow */}
      <div className="hidden lg:block w-[40vw] h-[95vh] relative overflow-hidden">
        <Image
          src="/images/potrate.jpg"
          alt="Himalayan prayer flags"
          fill
          className="object-contain "
          priority
        />
        
        <div className="absolute bottom-0 left-0 p-12 text-white max-w-lg">
          <h1 className="text-5xl lg:text-6xl font-black leading-tight">
            Connect with Everyone.<br />
            <span className="text-secondary">Instantly.</span>
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Your reliable partner for bulk SMS communication across Nepal — from the Terai plains to the Himalayan peaks.
          </p>
          <p className="mt-12 text-sm text-white/70">Trusted by thousands across Nepal</p>
        </div>
      </div>
    </div>
  );
}
