"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  useJobcardsQueryById,
  useJobCardUpdateMutation,
} from "@/hooks/queries/jobcards.query";
import {
  CreateJobCardsFormData,
  createjobCardsSchema,
} from "@/lib/schemas/jobcards.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import JobCardsForm from "../../_components/JobCardsForm";

const EditJobCards = ({ id }: { id: string }) => {
  const router = useRouter();
  const form = useForm<CreateJobCardsFormData>({
    resolver: zodResolver(createjobCardsSchema),
    defaultValues: {
      jobNo: "",
      jobDate: "",
      vehicleArrivalDate: "",
      registrationNumber: "",
      status: "pending",
      cusName: "",
      cusCode: "",
      empCode: "",
      tmNo1: "",
      panNo: "",
      pofficeAddress: "",
      phone: "",
      ward: "",
      address: "",
      dealer: "",
      advisor: "",
      chasisNumber: "",
      engineNumber: "",
      vehicleNo: "",
      currentKm: "",
      appointmentTypeId: "",
      jobTypeId: "",
      complaints: [],
    },
  });

  const { mutateAsync: updateJobCardAsync, isPending } =
    useJobCardUpdateMutation(id);

  const onSubmit = async (values: CreateJobCardsFormData) => {
    try {
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
      };
      await updateJobCardAsync(payload);
      form.reset();
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  const { data, isSuccess } = useJobcardsQueryById(id);

  useEffect(() => {
    if (isSuccess && data) {
      const jobcard = data;

      form.reset({
        jobNo: jobcard.jobNo.toString(),
        jobDate: jobcard.jobDate,
        vehicleArrivalDate: jobcard.vehicleArrivalDate,
        chasisNumber: jobcard.chasisNumber,
        registrationNumber: jobcard.registrationNumber,
        engineNumber: jobcard.engineNumber,
        empCode: jobcard.empCode,
        jobTypeId: jobcard.jobTypeId?.toString() ?? "",
        appointmentTypeId: jobcard.appointmentTypeId?.toString() ?? "",
        currentKm: jobcard?.currentKm ? jobcard.currentKm.toString() : "",
        cusName: jobcard.customer.cusName,
        cusCode: jobcard.customer.cusCode,
        tmNo1: jobcard.customer.tmNo1,
        panNo: jobcard.customer.panNo,
        pofficeAddress: jobcard.customer.pofficeAddress,
      });
    }
  }, [data, isSuccess, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <JobCardsForm form={form}>
          <Button variant={"brand"} type="submit">
            {isPending ? "Updating..." : "Update"}
          </Button>
        </JobCardsForm>
      </form>
    </Form>
  );
};

export default EditJobCards;
