import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  useAppointmentTypes,
  useJobTypes,
} from '@/hooks/queries/servicerequests.query';
import { format, isBefore, startOfDay } from 'date-fns';
import { Briefcase, CalendarIcon, User } from 'lucide-react';

import { Container } from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Combobox } from '@/components/ui/combox';
import { Input } from '@/components/ui/input';
import { useVehicleSalesMutation } from '@/hooks/queries/vehicle.query';
import { fetchServiceAdvisorsOptions } from '@/lib/api/servicerequests';
import { fetchVehicleSalesOptions } from '@/lib/api/vehicle';
import { CreateServiceRequestsFormData } from '@/lib/schemas/servicerequests.schemas';
import { Sale } from '@/lib/types/vehicleSales';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { UseFormReturn } from 'react-hook-form';
import ComplaintSection from './ComplaintSection';

const ServiceRequestsForm = ({
  form,
  children,
}: {
  form: UseFormReturn<CreateServiceRequestsFormData>;
  children: React.ReactNode;
  isEditPage?: boolean;
}) => {
  const router = useRouter();
  const today = startOfDay(new Date());

  const handleBack = () => {
    router.back();
    form.reset();
  };

  const { mutate: getVehicleSales } = useVehicleSalesMutation();
  const { data: appointmentTypes, isLoading } = useAppointmentTypes();
  const { data: jobTypes, isLoading: jobTypesLoading } = useJobTypes();

  const getVehicleSale = () => {
    const chasisNumber = form.getValues('chasisNumber');
    if (chasisNumber) {
      getVehicleSales(chasisNumber, {
        onSuccess: (data) => {
          const { vehicle, customer } = data;
          form.setValue('currentKm', vehicle?.currentKm || '');
          form.setValue('engineNumber', vehicle?.engineeId || '');
          form.setValue('registrationNumber', vehicle?.registrationNo || '');
          form.setValue('cusCode', customer?.cusCode || '');
          form.setValue('cusName', customer?.cusName || '');
          form.setValue('panNo', customer?.panNo || '');
          form.setValue('tmNo1', customer?.tmNo1 || '');
          form.setValue('pofficeAddress', customer?.pofficeAddress || '');
        },
        onError: (error) => {
          console.error('Error fetching vehicle sales:', error);
        },
      });
    }
  };
  const setVehicleSalesDetailsFromSale = (sale: Sale) => {
    const { vehicle, customer } = sale;

    // form.setValue("currentKm", vehicle?.currentKm ?? "");
    form.setValue('engineNumber', vehicle?.engineeId ?? '');
    form.setValue('registrationNumber', vehicle?.registrationNo ?? '');
    form.setValue('cusCode', customer?.cusCode ?? '');
    form.setValue('cusName', customer?.cusName ?? '');
    form.setValue('panNo', customer?.panNo ?? '');
    form.setValue('tmNo1', customer?.tmNo1 ?? '');
    form.setValue('pofficeAddress', customer?.pofficeAddress ?? '');
  };

  return (
    <>
      {/* Job Card Information */}
      <Container>
        <h2 className="text-lg font-medium mb-4 flex items-center">
          <Briefcase className="h-5 w-5 mr-2 text-gray-600" /> Job Card
          Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <FormField
            control={form.control}
            name="jobNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Card No. *</FormLabel>
                <FormControl>
                  <Input readOnly placeholder="Job Card No." {...field} />
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
                          'w-full pl-3 text-left font-normal justify-start ',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value
                          ? format(field.value, 'PPP')
                          : 'Select Sale Date'}
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
          {/* <FormField
            control={form.control}
            name="chasisNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chasis/VIN</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Chasis/VIN"
                    {...field}
                    onBlur={() => getVehicleSale()}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="chasisNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chassis ID *</FormLabel>
                <FormControl>
                  <Combobox
                    queryKey="stock-vehicles"
                    fetchFn={fetchVehicleSalesOptions}
                    selected={field.value}
                    onSelect={(item) => {
                      field.onChange(item.value);
                      setVehicleSalesDetailsFromSale(item.fullData as Sale);
                    }}
                    placeholder="Search chassis ID"
                  />
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
                <FormLabel>Registration No *</FormLabel>
                <FormControl>
                  <Input placeholder="Registration No" {...field} readOnly />
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
                <FormLabel>Current KM</FormLabel>
                <FormControl>
                  <Input placeholder="Current KM" {...field} />
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
                          'w-full pl-3 text-left font-normal justify-start ',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value
                          ? format(field.value, 'PPP')
                          : 'Select Sale Date'}
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
                <FormLabel>PAN Number</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="PAN Number"
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
            name="tmNo1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Phone" {...field} readOnly />
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
                  <Input placeholder="Address" {...field} readOnly />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </Container>

      {/* Complaints Management */}
      <ComplaintSection form={form} />

      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline" type="button" onClick={handleBack}>
          Cancel
        </Button>
        {children}
      </div>
    </>
  );
};

export default ServiceRequestsForm;
