"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import {
  useJobCardAssignPartsMutation,
  useJobCardUpdateAssignPartsMutation,
} from "@/hooks/queries/jobcards.query";
import { getItems } from "@/lib/api/item";
import { BaseQueryParams } from "@/lib/types";
import { ItemMaster, JobComplaint, JobComplaintPart } from "@/lib/types/job";
import { Edit } from "lucide-react";

const formSchema = z.object({
  itCode: z.string().min(1, "Select a part"),
  unit: z.string().min(1, "Select a unit"),
  rate: z.number().min(1, "Rate must be at least 1"),
  qty: z.number().min(1, "Quantity must be at least 1"),
});

type AssignPartForm = z.infer<typeof formSchema>;

const AssignForm = ({
  form,
  setOpen,
  onSubmit,
}: {
  form: UseFormReturn<AssignPartForm>;
  setOpen: (open: boolean) => void;
  onSubmit: (data: AssignPartForm) => void;
}) => {
  const fetchItemOptions = async (params: BaseQueryParams) => {
    const res = await getItems(params);
    return res.items.map((item) => ({
      label: `${item.itCode} - ${item.itName}`,
      value: item.itCode,
      fullData: item,
    }));
  };

  const handleSelectItem = (item: ItemMaster) => {
    form.setValue("itCode", item.itCode);
    form.setValue("unit", item.keyUnit);
    form.setValue("rate", item.mrp);
    form.setValue("qty", 1);
  };

  const handleClose = () => {
    setOpen(false);
    form.reset();
  };

  return (
    <>
      <FormField
        control={form.control}
        name="itCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select Part</FormLabel>
            <FormControl>
              <Combobox
                queryKey="items"
                fetchFn={fetchItemOptions}
                selected={field.value}
                onSelect={(item) => handleSelectItem(item.fullData)}
                placeholder="Search items by code, ID, or name..."
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-2">
        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit</FormLabel>
              <FormControl>
                <Input
                  type="string"
                  placeholder="Select part"
                  readOnly
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rate</FormLabel>
              <FormControl>
                <Input
                  type="string"
                  placeholder="Select part"
                  readOnly
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="qty"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quantity</FormLabel>
            <FormControl>
              <Input
                type="number"
                min={1}
                {...field}
                onChange={(e) => field.onChange(+e.target.value)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          type="button"
          variant={"brand"}
          onClick={form.handleSubmit(onSubmit)}
          disabled={form.formState.isSubmitting}
        >
          Save
        </Button>
      </div>
    </>
  );
};
export const AssignParts = ({ row }: { row: JobComplaint }) => {
  const [open, setOpen] = useState(false);

  const assignMutation = useJobCardAssignPartsMutation(row.jobComplaintId);

  const form = useForm<AssignPartForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itCode: "",
      qty: 1,
      rate: 0,
      unit: "",
    },
  });

  const onSubmit = async (data: AssignPartForm) => {
    try {
      await assignMutation.mutateAsync({
        itCode: data.itCode,
        unit: data.unit,
        rate: data.rate,
        qty: data.qty,
      });

      setOpen(false);

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          form.reset();
        }
        setOpen(isOpen);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-sm text-blue-600">
          + Add Part
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Assign Complaint Part</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4">
            <AssignForm form={form} setOpen={setOpen} onSubmit={onSubmit} />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export const UpdateParts = ({ row }: { row: JobComplaintPart }) => {
  const [open, setOpen] = useState(false);

  const updateMutation = useJobCardUpdateAssignPartsMutation(
    row.complaintConsId
  );

  const form = useForm<AssignPartForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itCode: row.itCode,
      qty: row.qty,
      rate: row.rate,
      unit: row.unit,
    },
  });

  const onSubmit = async (data: AssignPartForm) => {
    try {
      await updateMutation.mutateAsync({
        itCode: data.itCode,
        unit: data.unit,
        rate: data.rate,
        qty: data.qty,
      });

      setOpen(false);

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          form.reset();
        }
        setOpen(isOpen);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Edit className="w-4 h-4" />{" "}
          <span className="sr-only">Update Part</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Update Complaint Part</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4">
            <AssignForm form={form} setOpen={setOpen} onSubmit={onSubmit} />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
