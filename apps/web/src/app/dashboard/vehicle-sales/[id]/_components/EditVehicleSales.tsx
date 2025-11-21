'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  useResaleQueryById,
  useResaleUpdateMutation,
} from '@/hooks/queries/resale.query';
import {
  CreateVehicleSaleFormData,
  createVehicleSaleSchema,
} from '@/lib/schemas/resale.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import VehicleSalesForm from '../../_components/VehicleSalesForm';

const EditVehicleSales = ({ id }: { id: string }) => {
  const router = useRouter();
  const form = useForm<CreateVehicleSaleFormData>({
    resolver: zodResolver(createVehicleSaleSchema),
    defaultValues: {
      registrationNo: '',
      chessisId: '',
      engineeId: '',
      modelNo: '',
      variant: '',
      color: '',
      cusName: '',
      mobile: '',
      panNo: '',
      pofficeAddress: '',
      saleDate: new Date(),
      status: 'pending',
    },
  });

  const { mutateAsync: updateResaleAsync, isPending } =
    useResaleUpdateMutation(id);
  const onSubmit = async (values: CreateVehicleSaleFormData) => {
    try {
      const {
        registrationNo,
        engineeId,
        chessisId,
        cusName,
        mobile,
        panNo,
        pofficeAddress,
      } = values;
      const payload = {
        registrationNo,
        engineeId,
        chessisId,
        cusName,
        mobile,
        panNo,
        pofficeAddress,
      };
      await updateResaleAsync(payload);
      form.reset();
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  const { data, isSuccess } = useResaleQueryById(id);

  useEffect(() => {
    if (isSuccess && data) {
      const resale = data;

      form.reset({
        registrationNo: resale.registrationNo ?? '',
        chessisId: resale.chessisId ?? '',
        engineeId: resale.engineId ?? '',
        modelNo: resale.vehicle.modelNo,
        variant: '',
        color: resale.vehicle.color,
        cusName: resale.newCus?.cusName ?? '',
        mobile: resale.newCus?.tmNo1 ?? '',
        panNo: resale.newCus?.panNo ?? '',
        pofficeAddress: resale.newCus?.pofficeAddress ?? '',
        saleDate: resale.saleDate ? new Date(resale.saleDate) : new Date(),
        status: 'pending',
      });
    }
  }, [data, isSuccess, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <VehicleSalesForm form={form} isEditPage>
          <Button variant={'brand'} type="submit">
            {isPending ? 'Updating...' : 'Update'}
          </Button>
        </VehicleSalesForm>
      </form>
    </Form>
  );
};

export default EditVehicleSales;
