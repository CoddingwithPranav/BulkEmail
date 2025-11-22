"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactCrop, {
  type Crop,
  centerCrop,
  makeAspectCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop({ unit: "%", width: 90 }, aspect, mediaWidth, mediaHeight),
    mediaWidth,
    mediaHeight
  );
}

interface ImageCropperProps {
  value?: string;
  onChange: (file: File | null, preview: string) => void;
  aspectRatio?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imgSrc: string; // We now receive the image source from parent
}

export default function ImageCropper({
  value,
  onChange,
  aspectRatio = 1,
  open,
  onOpenChange,
  imgSrc: initialImgSrc,
}: ImageCropperProps) {
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Sync external imgSrc when dialog opens
  useEffect(() => {
    if (open && initialImgSrc) {
      setImgSrc(initialImgSrc);
    } else if (!open) {
      setImgSrc("");
      setCrop(undefined);
      setCompletedCrop(null);
    }
  }, [open, initialImgSrc]);

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, aspectRatio));
  };

  const getCroppedImg = () => {
    if (!completedCrop || !imgRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = imgRef.current;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = Math.floor(completedCrop.width * scaleX);
    canvas.height = Math.floor(completedCrop.height * scaleY);

    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    );

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const file = new File([blob], `cropped-${Date.now()}.jpg`, {
          type: "image/jpeg",
        });
        const previewUrl = URL.createObjectURL(blob);
        onChange(file, previewUrl);
        onOpenChange(false);
      },
      "image/jpeg",
      0.95
    );
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null, "");
  };

  const handleClose = (isOpen: boolean) => {
    onOpenChange(isOpen);
    if (!isOpen) {
      setImgSrc("");
      setCrop(undefined);
      setCompletedCrop(null);
    }
  };

  if (!open && !imgSrc) return null;

  return (
    <>
      {/* Remove button on avatar when image exists */}
      {value && (
        <button
          type="button"
          onClick={handleRemove}
          className="absolute -top-3 -right-3 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-lg transition transform hover:scale-110 z-50"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Crop Your Photo</DialogTitle>
          </DialogHeader>

          <div className="py-6">
            {imgSrc ? (
              <ReactCrop
                crop={crop}
                onChange={(_, percentCrop) => setCrop(percentCrop)}
                onComplete={(c) => setCompletedCrop(c)}
                aspect={aspectRatio}
                circularCrop={aspectRatio === 1}
                className="mx-auto"
              >
                <img
                  ref={imgRef}
                  src={imgSrc}
                  alt="Crop me"
                  onLoad={onImageLoad}
                  className="max-h-96 w-full object-contain"
                />
              </ReactCrop>
            ) : (
              <div className="h-96 flex items-center justify-center text-muted-foreground">
                Loading image...
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={getCroppedImg} disabled={!completedCrop}>
              Apply
            </Button>
          </div>

          <canvas ref={canvasRef} className="hidden" />
        </DialogContent>
      </Dialog>
    </>
  );
}