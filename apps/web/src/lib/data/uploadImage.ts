import axiosInstance from "@/axios";
import ImageKit from "imagekit-javascript";

export const uploadImage = async (file: File, name?:string): Promise<string> => {
  try {
    if(!name){
        name = process.env.NEXT_PUBLIC_DEFAULT_USER_IMAGE_NAME || "default-user-image"
    }
    const authRes = await axiosInstance.get("/imagekit/auth", {
      withCredentials: true,
    });
    if (authRes.status !== 200) throw new Error("Failed to get upload token");
    const { token, expire, signature } = authRes.data;

    const imagekit = new ImageKit({
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL!,
    });
    const uploadRes = await imagekit.upload({
      file,
      fileName: `${name}-${Date.now()}.jpg`,
      folder: "/images",
      token, 
      signature, 
      expire,
      isPrivateFile: false,
      responseFields: ["url", "fileId", "name"],
    });

    if (!uploadRes.url) {
      throw new Error("Upload failed: No URL returned");
    }

    return uploadRes.url;
  } catch (error) {
    console.error("ImageKit upload error:", error);
    throw new Error("Failed to upload image");
  }
};
