'use client';

import {
  useServiceRequestQueryById,
  useServiceRequestUpdateMutation,
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

const EditServiceRequest = ({ id }: { id: string }) => {
  const router = useRouter();
  const form = useForm<CreateServiceRequestsFormData>({
    resolver: zodResolver(createServiceRequestsSchema),
    defaultValues: {
      jobNo: '',
      jobDate: '',
      vehicleArrivalDate: '',
      chasisNumber: '',
      registrationNumber: '',
      engineNumber: '',
      currentKm: '',
      appointmentTypeId: '',
      jobTypeId: '',
      advisor: '',
      cusCode: '',
      cusName: '',
      panNo: '',
      tmNo1: '',
      empCode: '',
      pofficeAddress: '',
      complaints: [],
    },
  });

  const { mutateAsync: updateJobCardAsync, isPending } =
    useServiceRequestUpdateMutation(id);
  const onSubmit = async (values: CreateServiceRequestsFormData) => {
    try {
      const { complaints } = values;
      const payload = {
        engineNumber: values.engineNumber,
        chasisNumber: values.chasisNumber,
        registrationNumber: values.registrationNumber,
        jobDate: values.jobDate,
        vehicleArrivalDate: values.vehicleArrivalDate,
        currentKm: Number(values.currentKm),
        jobTypeId: Number(values.jobTypeId),
        appointmentTypeId: Number(values.appointmentTypeId),
        empCode: values.empCode,
        cusCode: values.cusCode,
        complaints: complaints?.map((complaint) => ({
          complaintCode: complaint.complaintCode,
        })),
      };
      await updateJobCardAsync(payload);
      form.reset();
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  const { data, isSuccess } = useServiceRequestQueryById(id);
  console.log(data);

  useEffect(() => {
    if (isSuccess && data) {
      const jobcard = data;
      form.reset({
        jobNo: jobcard.jobNo.toString(),
        jobDate: jobcard.jobDate,
        vehicleArrivalDate: jobcard.vehicleArrivalDate,
        chasisNumber: jobcard.chasisNumber,
        registrationNumber: jobcard.registrationNumber,
        empCode: jobcard.empCode,
        engineNumber: jobcard.engineNumber,
        jobTypeId: jobcard.jobTypeId?.toString() ?? '',
        appointmentTypeId: jobcard.appointmentTypeId?.toString() ?? '',

        currentKm: jobcard?.currentKm ? jobcard.currentKm.toString() : '',
        cusName: jobcard.customer.cusName,
        cusCode: jobcard.customer.cusCode,
        tmNo1: jobcard.customer.tmNo1,
        panNo: jobcard.customer.panNo,
        pofficeAddress: jobcard.customer.pofficeAddress,
        complaints: jobcard.complaints.map((complaint) => ({
          jobComplaintId: complaint.jobComplaintId,
          complaintCode: complaint.complaintCode,
          jobId: complaint.jobId,
          complaintDescription: complaint.complaintDescription,
          complaintMaster: complaint.complaintMaster
            ? {
                complaintCode: complaint.complaintMaster.complaintCode,
                complaintName: complaint.complaintMaster.complaintName,
                rate: complaint.complaintMaster.rate,
                complaintTypeId: complaint.complaintMaster.complaintTypeId,
                complaintTypeMaster: complaint.complaintMaster
                  .complaintTypeMaster
                  ? {
                      complaintTypeId:
                        complaint.complaintMaster.complaintTypeMaster
                          .complaintTypeId,
                      complaintTypeName:
                        complaint.complaintMaster.complaintTypeMaster
                          .complaintTypeName,
                      description:
                        complaint.complaintMaster.complaintTypeMaster
                          .description,
                    }
                  : undefined,
              }
            : undefined,
        })),
      });
    }
  }, [data, isSuccess, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <ServiceRequestsForm form={form} isEditPage>
          <Button variant={'brand'} type="submit">
            {isPending ? 'Updating...' : 'Update'}
          </Button>
        </ServiceRequestsForm>
      </form>
    </Form>
  );
};

export default EditServiceRequest;
