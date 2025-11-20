
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, MessageSquare, Upload, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function GuestSendPage() {
  const [message, setMessage] = useState("");
  const charCount = message.length;
  const segments = Math.ceil(charCount / 160);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg className="size-6" fill="currentColor" viewBox="0 0 48 48">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Nepali Bulk SMS
            </span>
          </Link>
          <Button asChild>
            <Link href="/auth">Sign Up / Login</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-6 py-12">
        {/* Hero */}
        <div className="text-center md:text-left mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Send Bulk SMS
            <br />
            <span className="text-primary">Instantly as a Guest</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Required for verification purposes as per Nepali regulations.
          </p>
        </div>

        <form className="space-y-12">
          {/* 1. Your Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="size-6" />
                </div>
                1. Your Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input placeholder="Ram" required />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input placeholder="Sharma" required />
                </div>
                <div className="space-y-2">
                  <Label>Citizenship ID</Label>
                  <Input placeholder="e.g., 12-34-56789" required />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input placeholder="98xxxxxxxx" type="tel" required />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="you@example.com" required />
                </div>
              </div>

              {/* Citizenship Photo Upload */}
              <div className="space-y-3">
                <Label>Citizenship Photo</Label>
                <label className="flex h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/20 hover:border-primary/50 hover:bg-muted/40 transition">
                  <Upload className="size-12 text-muted-foreground" />
                  <p className="mt-3 text-sm">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG or PDF (max 5MB)
                  </p>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    required
                  />
                </label>
              </div>
            </CardContent>
          </Card>

          {/* 2. Compose Message */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="size-6" />
                </div>
                2. Compose Your Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Type your SMS here..."
                rows={6}
                className="resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1600}
              />
              <div className="mt-3 flex justify-between text-sm text-muted-foreground">
                <span>{charCount} characters</span>
                <span>
                  {charCount} / 160 • {segments} SMS{segments > 1 ? "s" : ""}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* 3. Recipients */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="size-6" />
                </div>
                3. Add Your Recipients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/20 p-12 text-center">
                <div className="max-w-md space-y-6">
                  <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Upload className="size-12" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Upload Your Contact List
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Drag & drop your CSV file here or click to upload.
                      <br />
                      Must contain a{" "}
                      <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                        phone
                      </code>{" "}
                      column.
                    </p>
                  </div>
                  <label>
                    <Input
                      type="file"
                      accept=".csv"
                      className="hidden"
                      required
                    />
                    <Button size="lg" className="w-full max-w-xs">
                      <Upload className="mr-2 size-5" />
                      Choose CSV File
                    </Button>
                  </label>
                  <Link
                    href="#"
                    className="text-sm font-medium text-secondary hover:underline"
                  >
                    Download sample CSV template
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-center pt-8">
            <Button
              size="lg"
              className="w-full max-w-md text-lg font-bold h-14"
              disabled
            >
              Send Message
            </Button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-10 text-center text-sm text-muted-foreground mt-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-8 mb-4">
            <Link href="#" className="hover:text-primary transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Contact Us
            </Link>
          </div>
          <p>© 2025 Nepali Bulk SMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
