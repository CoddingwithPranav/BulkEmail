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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("register");
  const [type, setType] = useState("individual");

  return (
    <div className="flex min-h-screen bg-background">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md border border-border rounded-lg shadow-md p-8 bg-card backdrop-blur">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">NepalSMS</h1>
          </div>

          <p className="text-muted-foreground mb-8">
            Reliable Bulk SMS for Nepal.
          </p>

          <h2 className="text-3xl font-bold text-foreground">
            Create Your Account
          </h2>
          <p className="text-muted-foreground mt-1 mb-6 text-sm">
            Or log in if you already have an account.
          </p>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 bg-muted p-1 rounded-lg mb-8">
              <TabsTrigger
                value="register"
                className="rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                Register
              </TabsTrigger>
              <TabsTrigger
                value="login"
                className="rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                Log In
              </TabsTrigger>
            </TabsList>

            {/* REGISTER FORM */}
            <TabsContent value="register">
              <div className="space-y-5">
                <div>
                  <Label className="text-foreground">
                    Full Name / Organization Name
                  </Label>
                  <Input
                    className="mt-1 h-12 bg-input text-foreground placeholder:text-muted-foreground"
                    placeholder="Enter your full name or organization name"
                  />
                </div>

                <div>
                  <Label className="text-foreground">Email Address</Label>
                  <Input
                    className="mt-1 h-12 bg-input text-foreground placeholder:text-muted-foreground"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label className="text-foreground">Phone Number</Label>
                  <div className="flex mt-1">
                    <span className="inline-flex items-center px-4 rounded-l-md border border-r-0 bg-muted text-muted-foreground">
                      +977
                    </span>
                    <Input
                      className="rounded-l-none h-12 bg-input text-foreground placeholder:text-muted-foreground"
                      placeholder="98XXXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-foreground">Password</Label>
                  <div className="relative mt-1">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter a strong password"
                      className="h-12 pr-10 bg-input text-foreground placeholder:text-muted-foreground"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Must be at least 8 characters long.
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground">
                    Account Type
                  </label>
                  <div className="flex gap-4 mt-2">
                    <Button
                      variant="outline"
                      className={`flex-1 rounded-lg ${type === "individual" ? "bg-primary text-white border-primary" : ""}`}
                      onClick={() => setType("individual")}
                    >
                      Individual
                    </Button>
                    <Button
                      variant="outline"
                      className={`flex-1 rounded-lg ${type === "organization" ? "bg-primary text-white border-primary" : ""}`}
                      onClick={() => setType("organization")}
                    >
                      Organization
                    </Button>
                  </div>
                </div>

                <Button className="w-full h-12 text-lg">Create Account</Button>
              </div>
            </TabsContent>

            {/* LOGIN */}
            <TabsContent value="login">
              <div className="space-y-5">
                <div>
                  <Label className="text-foreground">Email or Phone</Label>
                  <Input
                    className="mt-1 h-12 bg-input text-foreground placeholder:text-muted-foreground"
                    placeholder="Enter email or phone"
                  />
                </div>

                <div>
                  <Label className="text-foreground">Password</Label>
                  <div className="relative mt-1">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="h-12 pr-10 bg-input text-foreground placeholder:text-muted-foreground"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <Button className="w-full h-12 text-lg">Log In</Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex items-center my-8">
            <span className="flex-1 border-t border-border/50" />
            <span className="px-3 text-xs text-muted-foreground">OR</span>
            <span className="flex-1 border-t border-border/50" />
          </div>

          <Button
            variant="outline"
            className="w-full h-12 flex items-center gap-2"
          >
            <Eye className="h-4 w-4" />
            <Link href="/guest"> Try as Guest </Link>
          </Button>

          <div className="text-center mt-6">
            <Link href="#" className="text-sm text-primary">
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-center gap-4 text-xs mt-6 text-muted-foreground">
            <Link href="#">Terms of Service</Link>
            <span>•</span>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex w-1/2 p-8 lg:p-12">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/potrate.jpg"
            alt="Himalayas"
            fill
            className="object-cover"
          />
          {/* TEXT OVERLAY */}
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
