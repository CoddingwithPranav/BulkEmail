"use client";

import { Button } from "@/components/ui/button";
import { useReceiversQueryById, useReceiverUpdateMutation } from "@/hooks/queries/reveivers.query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import MyReceiverFormFields from "../../_components/ReceiverForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { queryClient } from "@/lib/query-client";
import { UpdateReceiverInput, updateReceiverSchema } from "@repo/types";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";

export default function EditReceiver({ id }: { id: string }) {
   const router = useRouter();
   
     const { data: contact, isLoading, isSuccess } = useReceiversQueryById(id);
     const { mutateAsync: updateContact, isPending } = useReceiverUpdateMutation(id);
   
     const formValues = contact ? {
       firstName: contact.firstName ?? "",
       lastName: contact.lastName ?? "",
       phoneNumber: contact.phoneNumber,
       province: contact.province ?? "",
       district: contact.district ?? "",
       municipality: contact.municipality ?? ""
     } : undefined; 
     const form = useForm<UpdateReceiverInput>({
       resolver: zodResolver(updateReceiverSchema),
       values: formValues, 
     });
   
     const onSubmit = async (values: UpdateReceiverInput) => {
       try {
         await updateContact(values);
         await queryClient.invalidateQueries({ 
           queryKey: ["receiver-list"] 
         });
         router.back();
       } catch (error: any) {
         toast.error(error?.message || "Failed to update receiver");
         console.error("Update failed:", error);
       }
     };
   
     if (isLoading) {
       return (
         <div className="flex items-center justify-center py-12">
           <p className="text-muted-foreground">Loading Receiver...</p>
         </div>
       );
     }
   
     if (!contact) {
       return (
         <div className="text-center py-12">
           <p className="text-destructive">Receiver not found</p>
           <Button variant="outline" onClick={() => router.back()} className="mt-4">
             Go Back
           </Button>
         </div>
       );
     }
     return (
       <div className="mx-auto  p-6">
         <Form {...form} >
           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
             <MyReceiverFormFields form={form} />
   
             <div className="flex justify-end gap-4 pt-8 border-t">
               <Button
                 type="button"
                 variant="outline"
                 onClick={() => router.back()}
                 disabled={isPending}
               >
                 Cancel
               </Button>
   
               <Button type="submit" variant="brand" disabled={isPending}>
                 {isPending ? "Updating..." : "Update Receiver"}
               </Button>
             </div>
           </form>
         </Form>
       </div>
     );
    }