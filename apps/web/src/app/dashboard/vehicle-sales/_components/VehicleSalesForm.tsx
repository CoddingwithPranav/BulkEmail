import { Container } from '@/components/common';
import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/combox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { fetchStockVehicleOptions } from '@/lib/api/vehicle';
import { CreateVehicleSaleFormData } from '@/lib/schemas/resale.schema';
import { Vehicle } from '@/lib/types/vehicle';

import { CarFront, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

const VehicleSalesForm = ({
  form,
  children,
  isEditPage = false,
}: {
  form: UseFormReturn<CreateVehicleSaleFormData>;
  children?: React.ReactNode;
  isEditPage?: boolean;
}) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
    form.reset();
  };

  const setVehicleDetails = (data: Vehicle) => {
    form.setValue('engineeId', data.engineeId);
    form.setValue('registrationNo', data.registrationNo);
    form.setValue('modelNo', data.modelNo);
    form.setValue('color', data.colorName);
  };

  return (
    <>
      <Container>
        <h2 className="text-lg font-medium mb-4 flex items-center">
          <CarFront className="h-5 w-5 mr-2 text-gray-600" /> Vehicle
          Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {isEditPage ? (
            <FormField
              control={form.control}
              name="chessisId"
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
          ) : (
            <FormField
              control={form.control}
              name="chessisId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chassis ID *</FormLabel>
                  <FormControl>
                    <Combobox
                      queryKey="stock-vehicles"
                      fetchFn={fetchStockVehicleOptions}
                      selected={field.value}
                      onSelect={(item) => {
                        field.onChange(item.value);
                        setVehicleDetails(item.fullData as Vehicle);
                      }}
                      placeholder="Search chassis ID"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="registrationNo"
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
            name="engineeId"
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
            name="modelNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model Number*</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="MG S5"
                    className="px-3 py-2 text-sm rounded border transition-all duration-200 h-9"
                    readOnly
                  />
                </FormControl>
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
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter color"
                    className="px-3 py-2 text-sm rounded border transition-all duration-200 h-9"
                    readOnly
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Container>

      {/* Customer Information */}
      <Container>
        <h2 className="text-lg font-medium mb-4 flex items-center">
          <User className="h-5 w-5 mr-2 text-gray-600" /> Customer Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <FormField
            control={form.control}
            name="cusName"
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
            name="mobile"
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
            name="panNo"
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
            name="pofficeAddress"
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
      {/* <Container>
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
                        'justify-start text-left font-normal w-full',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value
                        ? format(field.value, 'PPP')
                        : 'Select Sale Date *'}
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
      </Container> */}

      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline" type="button" onClick={handleBack}>
          Cancel
        </Button>
        {children}
      </div>
    </>
  );
};

export default VehicleSalesForm;
