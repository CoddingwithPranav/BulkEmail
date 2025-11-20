import { OnlyFor } from "@/components/common";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useServiceRequestApproveMutation } from "@/hooks/queries/servicerequests.query";
import { SystemRole } from "@/lib/types";
import { ServiceRequests } from "@/lib/types/ServiceRequest";
import { createColumnHelper } from "@tanstack/react-table";
import { Check, Edit } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

const columnHelper = createColumnHelper<ServiceRequests>();

const AcceptDialog = ({ jobId }: { jobId: string }) => {
  const { mutateAsync: approveServiceRequest } =
    useServiceRequestApproveMutation();
  const handleApprove = async (id: string) => {
    try {
      await approveServiceRequest(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-xs px-2 py-1 bg-green-400 text-white hover:bg-green-100 cursor-pointer"
        >
          <Check className="w-4 h-4 mr-1" />
          Accept
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure to accept?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the item.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="outline"
              size="sm"
              className="text-xs px-2 py-1 bg-green-400 text-white hover:bg-green-100 cursor-pointer"
              onClick={() => handleApprove(jobId)}
            >
              <Check className="w-4 h-4 mr-1" />
              Accept
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const useServiceRequestsTableColumns = () => {
  return useMemo(
    () => [
      columnHelper.display({
        id: "jobNo",
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Request No</span>
          </div>
        ),
        cell: ({ row }) => <div>{row.original.jobNo} </div>,
      }),
      columnHelper.display({
        id: "customer",
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Customer</span>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <div>{row.original.customer.cusName}</div>
            <div>{row.original.customer.tmNo1}</div>
          </div>
        ),
      }),
      columnHelper.display({
        id: "registrationNo",
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Registration Number</span>
          </div>
        ),
        cell: ({ row }) => <div>{row.original.registrationNumber} </div>,
      }),
      columnHelper.display({
        id: "vehicle",
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Vehicle</span>
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <div>Eng:{row.original.engineNumber}</div>
            <div>Che:{row.original.chasisNumber}</div>
          </div>
        ),
      }),

      columnHelper.display({
        id: "jobDate",
        header: () => (
          <div className="flex h-full w-full items-center">
            <span>Scheduled Date</span>
          </div>
        ),
        cell: ({ row }) => <div>{row.original.jobDate} </div>,
      }),
      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <Link href={`/service-requests/${row.original.jobId}`}>
              <Button variant="outline" size="sm" className="text-xs px-2 py-1">
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Button>
            </Link>
            <OnlyFor allowedRoles={[SystemRole.EMPLOYEE]}>
              <AcceptDialog jobId={row.original.jobId} />
            </OnlyFor>
          </div>
        ),
      }),
    ],
    []
  );
};

export default useServiceRequestsTableColumns;
