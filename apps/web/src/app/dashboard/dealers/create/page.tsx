"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Container } from "@/components/common";
import { cn } from "@/lib/utils";
import { format, isBefore, startOfDay } from "date-fns";
import {
  BadgeIndianRupee,
  CalendarIcon,
  CarFront,
  ChevronLeft,
  User,
} from "lucide-react";

// ----- Zod schema -----
const createVehicleSaleSchema = z.object({
  registrationNumber: z.string().min(1, "Registration Number is required"),
  chassisId: z.string().min(1, "Chassis ID is required"),
  engineId: z.string().min(1, "Engine ID is required"),
  model: z.string().min(1, "Model is required"),
  variant: z.string().min(1, "Variant is required"),
  color: z.string().min(1, "Color is required"),
  fuelType: z.enum(["petrol", "diesel", "electric"]),
  customerName: z.string().min(1, "Customer Name is required"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  panNumber: z.string().min(1, "PAN Number is required"),
  address: z.string().min(1, "Address is required"),
  saleDate: z.date(),
  salePrice: z
    .string()
    .regex(/^\d+$/, "Sale Price must be a number")
    .min(1, "Sale Price is required"),
  dealer: z.string().min(1, "Dealer is required"),
  paymentMode: z.enum(["cash", "finance"]),
  status: z.enum(["pending", "complete"]),
});

type CreateVehicleSaleFormData = z.infer<typeof createVehicleSaleSchema>;

export default function CreateVehicleSale() {
  const form = useForm<CreateVehicleSaleFormData>({
    resolver: zodResolver(createVehicleSaleSchema),
    defaultValues: {
      registrationNumber: "KL-01-AA-1234",
      chassisId: "MA1234567890",
      engineId: "ENG789012345",
      fuelType: "petrol",
      salePrice: "0",
      paymentMode: "cash",
      status: "pending",
    },
  });

  const today = startOfDay(new Date());

  const isDateDisabled = (dateToCheck: Date) => {
    return isBefore(dateToCheck, today);
  };

  return (
    <div className="container mx-auto px-4 py-6 dark:bg-background">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Create Vehicle Sale</h1>
          <p className="text-sm text-muted-foreground">
            Record a new vehicle sale
          </p>
        </div>
        <Link href="/vehicle-sales" passHref>
          <Button
            variant="ghost"
            className="flex items-center border border-accent"
          >
            <ChevronLeft className="h-5 w-5 mr-1" /> Back
          </Button>
        </Link>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            console.log("Form Data:", data);
          })}
          className="space-y-6"
        >
          {/* Vehicle Information */}
          <Container>
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <CarFront className="h-5 w-5 mr-2 text-gray-600" /> Vehicle
              Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="registrationNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Registration Number *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="KL-01-AA-1234"
                        className="px-3 py-2 text-sm rounded border transition-all duration-200 h-9"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="chassisId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chassis ID *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="MA1234567890"
                        className="px-3 py-2 text-sm rounded border transition-all duration-200 h-9"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="engineId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Engine ID *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="ENG789012345"
                        className="px-3 py-2 text-sm rounded border transition-all duration-200 h-9"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Model *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="model1">Model 1</SelectItem>
                        {/* Add more models here */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="variant"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Variant *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select variant" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="variant1">Variant 1</SelectItem>
                        {/* Add more variants here */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Color *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="red">Red</SelectItem>
                        {/* Add more colors here */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fuelType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fuel Type *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petrol">Petrol</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Container>

          {/* Customer Information */}
          <Container>
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-gray-600" /> Customer
              Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="customerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Name *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Customer Name"
                        className="px-3 py-2 text-sm rounded border transition-all duration-200 h-9"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="+91 9876543210"
                        className="px-3 py-2 text-sm rounded border transition-all duration-200 h-9"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="panNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PAN Number *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="ABCDE1234F"
                        className="px-3 py-2 text-sm rounded border transition-all duration-200 h-9"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="col-span-1 md:col-span-4">
                    <FormLabel>Address *</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Address"
                        className="resize-none text-sm rounded border transition-all duration-200"
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Container>

          {/* Sale Information */}
          <Container>
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <BadgeIndianRupee className="h-5 w-5 mr-2 text-gray-600" /> Sale
              Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="saleDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sale Date *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "justify-start text-left font-normal w-full",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value
                            ? format(field.value, "PPP")
                            : "Select Sale Date *"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            if (!date) return;
                            if (!isDateDisabled(date)) {
                              field.onChange(date);
                            }
                          }}
                          disabled={isDateDisabled}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="salePrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sale Price (₹) *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="0"
                        className="px-3 py-2 text-sm rounded border transition-all duration-200 h-9"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dealer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dealer *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select dealer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dealer1">Dealer 1</SelectItem>
                        <SelectItem value="dealer2">Dealer 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentMode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Mode *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="complete">Complete</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Container>

          <div className="flex justify-end gap-4 mt-6">
            <Button
              variant="outline"
              type="button"
              onClick={() => form.reset()}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-red-600 text-white">
              Create Sale
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
