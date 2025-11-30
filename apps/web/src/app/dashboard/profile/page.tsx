"use client";

import { useCallback, useEffect, useState } from "react";
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
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  useUserProfile,
  useUpdateMyProfile,
} from "@/hooks/queries/auth.query";

const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^9[78]\d{8}$/, "Invalid Nepali number")
    .optional()
    .or(z.literal("")),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [cropperOpen, setCropperOpen] = useState(false);
  const [pendingImageSrc, setPendingImageSrc] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: user, isLoading: userLoading } = useUserProfile();
  const updateProfile = useUpdateMyProfile();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  });

  useEffect(() => {
    if (!user) return;

    form.reset({
      firstName: user.firstName ?? "",
      lastName: user.lastName ?? "",
      email: user.email ?? "",
      phoneNumber: user.phoneNumber ?? "",
    });

    setProfileImage(user.profileImage ?? "");
  }, [user, form]);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        setPendingImageSrc(reader.result?.toString() ?? "");
        setCropperOpen(true);
      };
      reader.readAsDataURL(file);

      e.target.value = ""; 
    },
    []
  );

  // Handle cropped image
  const handleImageChange = useCallback(
    (file: File | null, preview: string) => {
      setImageFile(file);
      setProfileImage(preview);
    },
    []
  );

  const onSubmit = useCallback(
  async (data: ProfileFormValues) => {
    try {
      setLoading(true);

      let finalImageUrl = profileImage;

      if (imageFile) {
        finalImageUrl = await uploadImage(imageFile, "Profile Picture");
      }
      const payload = {
        ...data,
        email: user?.email, 
        profileImage: finalImageUrl,
      };

      await updateProfile.mutateAsync(payload);

      setImageFile(null);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to update profile";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  },
  [imageFile, profileImage, updateProfile, user?.email]
);


  if (userLoading) {
    return <div className="text-center py-10">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-background p-5">
      <div className="max-w-4xl mx-auto">

        {/* Avatar Section */}
        <div className="flex items-center gap-8 mb-10">
          <div className="relative group">
            <Avatar className="w-32 h-32 ring-4 shadow-2xl transition-all duration-300 group-hover:ring-primary/40 group-hover:scale-105">
              <AvatarImage src={profileImage} alt="Profile" className="object-cover" />
              <AvatarFallback className="bg-primary/10 text-5xl">
                <User className="w-16 h-16" />
              </AvatarFallback>
            </Avatar>

            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="text-muted-foreground text-lg">{user?.email}</p>
          </div>
        </div>

        {/* Cropper Modal */}
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
            <div className="bg-card border rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">

                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel><User className="w-4 h-4 inline mr-1" /> First Name</FormLabel>
                      <FormControl><Input placeholder="Ram" {...field} /></FormControl>
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
                      <FormLabel><User className="w-4 h-4 inline mr-1" /> Last Name</FormLabel>
                      <FormControl><Input placeholder="Bahadur" {...field} /></FormControl>
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
                      <FormLabel><Mail className="w-4 h-4 inline mr-1" /> Email</FormLabel>
                      <FormControl><Input placeholder="ram@example.com" disabled readOnly  {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel><Phone className="w-4 h-4 inline mr-1" /> Phone</FormLabel>
                      <FormControl><Input placeholder="9841234567" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>

              {/* Submit button */}
              <div className="flex justify-end mt-8">
                <Button type="submit" size="lg" disabled={loading}>
                  {loading ? "Saving..." : <><Save className="w-5 h-5 mr-2" /> Save Changes</>}
                </Button>
              </div>

            </div>
          </form>
        </Form>

      </div>
    </div>
  );
}
