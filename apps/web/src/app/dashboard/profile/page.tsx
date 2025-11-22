'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import ImageCropper from '@/components/common/ImageCopper';
import { uploadImage } from '@/lib/data/uploadImage';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phoneNumber: z.string().regex(/^9[78][0-9]{8}$/, 'Invalid Nepali phone number').optional(),
});

type FormData = z.infer<typeof schema>;

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState<string>('');
  const [tempPreview, setTempPreview] = useState<string>('');  // Local crop preview
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    // resolver: zodResolver(schema),
  });


  // Handle image change from cropper
  const handleImageChange = (file: File | null, preview: string) => {
    setImageFile(file);
    setTempPreview(preview);  // Temp blob preview
  };

  // Secure upload to ImageKit
 
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      let finalImageUrl = profileImage;
      if (imageFile) {
        finalImageUrl = await uploadImage(imageFile, "User Name");
        setProfileImage(finalImageUrl);  // Update for preview
      }
      toast.success('Profile updated successfully!');
    } catch (err: any) {
      toast.error(err.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">My Profile</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Profile Image Display */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Image
              src={tempPreview || profileImage || '/default-avatar.png'}
              alt="Profile Picture"
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-white shadow-xl"
              priority={true}  // Above-the-fold
              unoptimized={!!tempPreview}  // Skip opt for local previews
            />
          </div>

          <ImageCropper
            value={profileImage}
            onChange={handleImageChange}
            aspectRatio={1}
          />
        </div>

        {/* Form Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" {...register('firstName')} />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
          </div>

          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" {...register('lastName')} />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register('email')} />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
            <Input id="phoneNumber" placeholder="98XXXXXXXX" {...register('phoneNumber')} />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
          </div>
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? 'Saving Changes...' : 'Save Changes'}
        </Button>
      </form>
    </div>
  );
}