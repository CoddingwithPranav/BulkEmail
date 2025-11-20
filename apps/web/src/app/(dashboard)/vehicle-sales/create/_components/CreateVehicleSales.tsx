'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useResaleCreateMutation } from '@/hooks/queries/resale.query';
import {
  CreateVehicleSaleFormData,
  createVehicleSaleSchema,
} from '@/lib/schemas/resale.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import VehicleSalesForm from '../../_components/VehicleSalesForm';

const CreateVehicleSales = () => {
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

  console.log('CreateVehicleSales form', form.formState.errors);

  const { mutateAsync: createResaleAsync, isPending } =
    useResaleCreateMutation();
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
      await createResaleAsync(payload);
      form.reset();
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <VehicleSalesForm form={form}>
          <Button variant={'brand'} type="submit" className="cursor-pointer">
            {isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </VehicleSalesForm>
      </form>
    </Form>
  );
};

export default CreateVehicleSales;
