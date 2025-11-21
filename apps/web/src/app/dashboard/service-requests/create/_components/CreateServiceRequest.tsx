'use client';

import {
  useServiceRequestCreateMutation,
  useServiceRequestNo,
} from '@/hooks/queries/servicerequests.query';
import {
  CreateServiceRequestsFormData,
  createServiceRequestsSchema,
} from '@/lib/schemas/servicerequests.schemas';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ServiceRequestsForm from '../../_components/ServiceRequestsForm';

const CreateServiceRequest = ({}) => {
  const router = useRouter();
  const form = useForm<CreateServiceRequestsFormData>({
    resolver: zodResolver(createServiceRequestsSchema),
    defaultValues: {
      jobNo: '',
      registrationNumber: '',
      status: 'pending',
      jobTypeId: '',
      appointmentTypeId: '',
      jobDate: new Date().toISOString().split('T')[0],
      vehicleArrivalDate: new Date().toISOString().split('T')[0],
      cusName: '',
      tmNo1: '',
      pofficeAddress: '',
      phone: '',
      empCode: '',
      ward: '',
      address: '',
      dealer: '',
      advisor: '',
      chasisNumber: '',
      engineNumber: '',
      vehicleNo: '',
      currentKm: '',
      complaints: [],
    },
  });

  const { data: jobNo, isLoading } = useServiceRequestNo();

  const { mutateAsync: createjobCardAsync, isPending } =
    useServiceRequestCreateMutation();
  const onSubmit = async (values: CreateServiceRequestsFormData) => {
    try {
      const { complaints } = values;
      const payload = {
        engineNumber: values.engineNumber,
        chasisNumber: values.chasisNumber,
        appointmentTypeId: Number(values.appointmentTypeId),
        jobTypeId: Number(values.jobTypeId),
        jobDate: values.jobDate,
        vehicleArrivalDate: values.vehicleArrivalDate,
        registrationNumber: values.registrationNumber,
        cusCode: values.cusCode,
        empCode: values.empCode,
        complaints: complaints?.map((complaint) => ({
          complaintCode: complaint.complaintCode,
        })),
      };
      await createjobCardAsync(payload);
      form.reset();
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (jobNo) {
      form.setValue('jobNo', jobNo.toString());
    }
  }, [isLoading, jobNo, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <ServiceRequestsForm form={form}>
          <Button variant={'brand'} type="submit" className="cursor-pointer">
            {isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </ServiceRequestsForm>
      </form>
    </Form>
  );
};

export default CreateServiceRequest;
