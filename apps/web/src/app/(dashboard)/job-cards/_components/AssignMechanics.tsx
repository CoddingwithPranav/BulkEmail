"use client";

import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useJobCardAssignMechanicMutation } from "@/hooks/queries/jobcards.query";
import { fetchMechanics } from "@/lib/api/servicerequests";
import { BaseQueryParams } from "@/lib/types";
import { JobComplaint } from "@/lib/types/job";
import { useEffect, useState } from "react";

export const AssignedMechanics = ({ row }: { row: JobComplaint }) => {
  const [value, setValue] = useState(row.empCode);
  const [open, setOpen] = useState(false);

  const { mutateAsync } = useJobCardAssignMechanicMutation(row.jobComplaintId!);

  const fetchMechanicOptions = (query: BaseQueryParams) =>
    fetchMechanics(query).then((res) =>
      res.data.map((emp) => {
        return {
          label: emp.empName,
          value: emp.empCode,
        };
      })
    );

  useEffect(() => {
    if (row.empCode) {
      setValue(row.empCode);
    }
  }, [row]);

  const assignMechanic = async () => {
    if (value) {
      await mutateAsync({ empCode: value });
      setOpen(false);
      setValue("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          {value ? row.employee?.empName : "Assign"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Assign Mechanics</DialogTitle>
        </DialogHeader>
        <Combobox
          queryKey="mechanics"
          fetchFn={fetchMechanicOptions}
          selected={value}
          onSelect={(item) => setValue(item.value)}
          placeholder="Search mechanics..."
        />
        <div className="flex justify-end pt-4">
          <div className="flex justify-end pt-4">
            <Button type="button" onClick={assignMechanic}>
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
