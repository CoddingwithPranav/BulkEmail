"use client";

import ImageCropper from "@/components/common/ImageCopper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { uploadImage } from "@/lib/data/uploadImage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, Save, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Zod Schema (Nepali phone: starts with 97/98, 10 digits)
const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^9[78]\d{8}$/, "Invalid Nepali number (e.g. 9841234567)")
    .optional()
    .or(z.literal("")),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [cropperOpen, setCropperOpen] = useState(false);
  const [pendingImageSrc, setPendingImageSrc] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const handleImageChange = (file: File | null, preview: string) => {
    setImageFile(file);
    setProfileImage(preview);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPendingImageSrc(reader.result?.toString() || "");
      setCropperOpen(true);
    };
    reader.readAsDataURL(file);
    e.target.value = ""; // reset input
  };

  const onSubmit = async (data: ProfileFormValues) => {
    setLoading(true);
    try {
      let finalImageUrl = profileImage;

      if (imageFile) {
        finalImageUrl = await uploadImage(imageFile, "Profile Picture");
        setProfileImage(finalImageUrl);
        setImageFile(null);
      }

      // TODO: Save profile data to backend here
      console.log("Saving profile:", { ...data, profileImage: finalImageUrl });

      toast.success("Profile updated successfully!");
    } catch (err: any) {
      toast.error(err.message || "Failed to save profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-5">
      <div className="max-w-4xl mx-auto">
        {/* Header + Avatar */}
        <div className="flex items-center gap-8 mb-10">
          <div className="relative group">
            <Avatar className="w-32 h-32 ring-4 ring-background shadow-2xl transition-all duration-300 group-hover:ring-primary/40 group-hover:scale-105">
              <AvatarImage
                src={profileImage}
                alt="Profile"
                className="object-cover"
              />
              <AvatarFallback className="bg-primary/10 text-5xl">
                <User className="w-16 h-16" />
              </AvatarFallback>
            </Avatar>

            {/* Edit Icon */}
            <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none">
              <div className="bg-primary text-white rounded-full p-2.5 shadow-2xl border-4 border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-foreground">Edit Profile</h1>
            <p className="text-muted-foreground">
              Update your photo and personal details
            </p>
          </div>
        </div>

        {/* Image Cropper Modal */}
        <ImageCropper
          value={profileImage}
          onChange={handleImageChange}
          aspectRatio={1}
          open={cropperOpen}
          onOpenChange={setCropperOpen}
          imgSrc={pendingImageSrc}
        />

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="w-4 h-4" /> First Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Ram" className="h-11" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="w-4 h-4" /> Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Bahadur"
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="ram@example.com"
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone (Optional) */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Phone className="w-4 h-4" /> Phone Number
                        <span className="text-xs text-muted-foreground">
                          (Optional)
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="9841234567"
                          className="h-11"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-8">
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="px-12 font-semibold"
                >
                  {loading ? (
                    "Saving..."
                  ) : (
                    <>
                      <Save className="w-5 h-5 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Your data is secure • Changes are saved instantly
        </p>
      </div>
    </div>
  );
}
