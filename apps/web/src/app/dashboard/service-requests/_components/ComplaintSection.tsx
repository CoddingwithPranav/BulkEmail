import { Container, SearchInput } from "@/components/common";
import { DataTable } from "@/components/datatable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useComplaintQuery } from "@/hooks/queries/complaint.query";
import { useDataTable } from "@/hooks/table/use-data-table";
import {
  ComplaintSchema,
  CreateServiceRequestsFormData,
} from "@/lib/schemas/servicerequests.schemas";
import { Complaint } from "@/lib/types/complaint";
import { createColumnHelper } from "@tanstack/react-table";
import { debounce } from "lodash";

import { AlertTriangle, Trash2Icon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useFieldArray, UseFormReturn } from "react-hook-form";

const PAGE_SIZE = 5;

const columnHelper = createColumnHelper<ComplaintSchema>();
const useComplaintTableColumns = (
  removeFn: (index: number) => void,
  fields: ComplaintSchema[]
) => {
  return useMemo(
    () => [
      columnHelper.display({
        id: "complaintName",
        header: () => <div className="flex items-center">Complaint Name</div>,
        cell: ({ row }) => (
          <div>
            <span>{row.original.complaintCode}</span> /{" "}
            <span>{row.original.complaintMaster?.complaintName}</span>
          </div>
        ),
      }),
      columnHelper.display({
        id: "complaintRate",
        header: () => <div className="flex items-center">Rate</div>,
        cell: ({ row }) => (
          <div className="text-right">{row.original.complaintMaster?.rate}</div>
        ),
      }),
      columnHelper.display({
        id: "complaintType",
        header: () => <div className="flex items-center">Complaint Type</div>,
        cell: ({ row }) => (
          <div>
            {
              row.original.complaintMaster?.complaintTypeMaster
                ?.complaintTypeName
            }
          </div>
        ),
      }),
      columnHelper.display({
        id: "actions",
        header: () => <div className="flex items-center">Actions</div>,
        cell: ({ row }) => {
          const index = fields.findIndex(
            (field) => field.complaintCode === row.original.complaintCode
          );
          return (
            <Button
              type="button"
              variant="destructive"
              className="text-sm cursor-pointer"
              onClick={() => removeFn(index)}
            >
              <Trash2Icon className="w-4 h-4 mr-1" />
              Remove
            </Button>
          );
        },
      }),
    ],
    [removeFn, fields]
  );
};

const ComplaintSection = ({
  form,
}: {
  form: UseFormReturn<CreateServiceRequestsFormData>;
}) => {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { fields, remove, replace } = useFieldArray({
    control: form.control,
    name: "complaints",
  });

  const { data: { complaints = [] } = {} } = useComplaintQuery({
    page: 1,
    limit: PAGE_SIZE,
    q: debouncedSearchText,
  });

  const handleSearchChange = debounce((value: string) => {
    if (value.length && value.length < 3) return;
    setDebouncedSearchText(value);
  }, 300);

  const [selected, setSelected] = useState<Complaint[]>([]);

  useEffect(() => {
    if (isDialogOpen) {
      const existing = fields.map((f) => ({
        complaintCode: f.complaintCode,
        complaintName: f.complaintMaster?.complaintName ?? "",
        rate: f.complaintMaster?.rate ?? 0,
        complaintTypeId: f.complaintMaster?.complaintTypeId ?? 0,
        complaintType: {
          complaintTypeName:
            f.complaintMaster?.complaintTypeMaster?.complaintTypeName ?? "",
          description:
            f.complaintMaster?.complaintTypeMaster?.description ?? "",
        },
      }));
      setSelected(existing as Complaint[]);
    }
  }, [fields, isDialogOpen]);

  const isSelected = (code: string) =>
    selected.some((s) => s.complaintCode === code);

  const handleToggle = (complaint: Complaint) => {
    if (isSelected(complaint.complaintCode)) {
      setSelected((prev) =>
        prev.filter((c) => c.complaintCode !== complaint.complaintCode)
      );
    } else {
      setSelected((prev) => [...prev, complaint]);
    }
  };

  const handleDone = () => {
    const mapped = selected.map((complaint) => ({
      complaintCode: complaint.complaintCode,
      complaintMaster: {
        complaintCode: complaint.complaintCode,
        complaintName: complaint.complaintName,
        rate: complaint.rate,
        complaintTypeId: complaint.complaintTypeId,
        complaintTypeMaster: {
          complaintTypeName: complaint.complaintType?.complaintTypeName ?? "",
        },
      },
    }));

    replace(mapped as ComplaintSchema[]);
    setIsDialogOpen(false);
  };

  const columns = useComplaintTableColumns(remove, fields);
  const { table } = useDataTable({
    data: fields,
    columns,
    count: fields.length,
    enablePagination: true,
    pageSize: PAGE_SIZE,
  });

  return (
    <Container>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-gray-600" />
          Complaints Management
        </h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" className="text-sm text-blue-600">
              + Add Complaint
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] gap-2">
            <DialogHeader>
              <DialogTitle>Search Complaints</DialogTitle>
            </DialogHeader>
            <SearchInput
              className="max-w-full"
              placeholder="Type at least 3 characters..."
              value={searchText}
              onValueChange={(value) => {
                setSearchText(value);
                handleSearchChange(value);
              }}
            />
            <div className="max-h-64 overflow-auto border rounded-md p-2 space-y-1">
              {complaints.map((complaint) => (
                <div
                  key={complaint.complaintCode}
                  className="flex items-center space-x-2 py-1"
                >
                  <Checkbox
                    checked={isSelected(complaint.complaintCode)}
                    onCheckedChange={() => handleToggle(complaint)}
                  />
                  <div className="text-sm">
                    <div className="font-medium">
                      {complaint.complaintName}{" "}
                      <Badge variant="outline">
                        {complaint.complaintType?.complaintTypeName}
                      </Badge>
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Code: {complaint.complaintCode} | Rate: Rs.
                      {complaint.rate}
                    </div>
                  </div>
                </div>
              ))}
              {complaints.length === 0 && (
                <div className="flex flex-col items-center justify-center text-sm text-muted-foreground py-2">
                  <span>No complaints found.</span>
                  <Button
                    type="button"
                    variant="link"
                    className="p-0 h-auto text-xs text-blue-600 mt-1"
                    onClick={() => {
                      setSearchText("");
                      setDebouncedSearchText("");
                    }}
                  >
                    Clear search and try again
                  </Button>
                </div>
              )}
            </div>
            <div className="flex justify-end pt-4 gap-2">
              <Button
                type="button"
                variant={"outline"}
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="button" variant={"brand"} onClick={handleDone}>
                Done
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <DataTable
        table={table}
        columns={columns}
        count={fields.length ?? 0}
        pageSize={PAGE_SIZE}
      />
    </Container>
  );
};

export default ComplaintSection;
