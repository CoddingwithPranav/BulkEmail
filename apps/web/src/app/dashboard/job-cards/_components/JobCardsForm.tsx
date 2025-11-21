"use client";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Combobox } from "@/components/ui/combox";
import {
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
import {
  useAppointmentTypes,
  useJobTypes,
} from "@/hooks/queries/servicerequests.query";
import { fetchServiceAdvisorsOptions } from "@/lib/api/servicerequests";
import { CreateJobCardsFormData } from "@/lib/schemas/jobcards.schema";
import { cn } from "@/lib/utils";
import { format, isBefore, startOfDay } from "date-fns";
import { Briefcase, CalendarIcon, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import ComplaintSection from "./ComplaintSection";

const today = startOfDay(new Date());

const JobCardsForm = ({
  form,
  children,
}: {
  form: UseFormReturn<CreateJobCardsFormData>;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
    form.reset();
  };

  const { data: appointmentTypes, isLoading } = useAppointmentTypes();
  const { data: jobTypes, isLoading: jobTypesLoading } = useJobTypes();

  return (
    <>
      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-gray-600" /> Job Card Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <FormField
            control={form.control}
            name="jobNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Card No. *</FormLabel>
                <FormControl>
                  <Input placeholder="Job Card No." {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Job Date *</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal justify-start ",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value
                          ? format(field.value, "PPP")
                          : "Select Job Date"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={field.onChange}
                      disabled={(date) => isBefore(date, today)}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="chasisNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chasis Number</FormLabel>
                <FormControl>
                  <Input placeholder="Chasis Number" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="registrationNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Registration Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Registration Number"
                    {...field}
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="engineNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Engine Number</FormLabel>
                <FormControl>
                  <Input placeholder="Engine Number" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currentKm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Km</FormLabel>
                <FormControl>
                  <Input placeholder="Current Km" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="appointmentTypeId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appointment Type</FormLabel>
                <Select
                  key={field.value}
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={isLoading}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Appointment Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {appointmentTypes?.map((type) => (
                      <SelectItem
                        key={type.appointmentTypeId}
                        value={type.appointmentTypeId.toString()}
                      >
                        {type.appointmentTypeName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="jobTypeId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <Select
                  key={field.value}
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={jobTypesLoading}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Job Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {jobTypes?.map((type) => (
                      <SelectItem
                        key={type.jobTypeId}
                        value={type.jobTypeId.toString()}
                      >
                        {type.jobTypeName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="empCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Advisor *</FormLabel>
                <FormControl>
                  <Combobox
                    queryKey="service-advisors"
                    fetchFn={fetchServiceAdvisorsOptions}
                    selected={field.value}
                    onSelect={(item) => {
                      field.onChange(item.value);
                      // Optionally do something with item.fullData
                    }}
                    placeholder="Search service advisor"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vehicleArrivalDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Vehicle Arrival Date *</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full pl-3 text-left font-normal justify-start ",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value
                          ? format(field.value, "PPP")
                          : "Select a date"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value ? new Date(field.value) : undefined}
                      onSelect={field.onChange}
                      disabled={(date) => isBefore(date, today)}
                    />
                  </PopoverContent>
                </Popover>
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
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Container>

      <Container className="mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <User className="h-5 w-5 text-gray-600" /> Customer Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <FormField
            control={form.control}
            name="cusName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Customer Name" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="panNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pan No</FormLabel>
                <FormControl>
                  <Input placeholder="Pan No" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tmNo1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone No" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pofficeAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder=" Address" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Container>

      {/* Complaints Management */}
      <ComplaintSection />

      <div className="flex justify-end gap-4 my-6">
        <Button type="button" variant="outline" onClick={handleBack}>
          Cancel
        </Button>

        {children}
      </div>
    </>
  );
};

export default JobCardsForm;
