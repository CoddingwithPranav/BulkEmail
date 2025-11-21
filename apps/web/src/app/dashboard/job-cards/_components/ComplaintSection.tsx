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
import { createColumnHelper } from "@tanstack/react-table";
import { debounce } from "lodash";

import {
  useJobCardAssignComplaintsMutation,
  useJobCardComplaintsQuery,
} from "@/hooks/queries/jobcards.query";
import { Complaint, JobComplaint } from "@/lib/types/job";
import { formatDate } from "date-fns";
import { AlertTriangle, Trash2Icon } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AssignedMechanics } from "./AssignMechanics";
import { AssignParts } from "./Parts";
import ViewParts from "./ViewParts";

const PAGE_SIZE = 5;

const columnHelper = createColumnHelper<JobComplaint>();
const useComplaintTableColumns = () => {
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
        id: "assignMechanic",
        header: () => <div className="flex items-center">Mechanic</div>,
        cell: ({ row }) => <AssignedMechanics row={row.original} />,
      }),
      columnHelper.display({
        id: "assignedDate",
        header: () => <div className="flex items-center">Assigned Date</div>,
        cell: ({ row }) => (
          <div>
            {row.original.assignDate
              ? formatDate(new Date(row.original.assignDate), "yyyy-MM-dd")
              : null}
          </div>
        ),
      }),
      columnHelper.display({
        id: "noOfParts",
        header: () => <div className="flex items-center">Parts</div>,
        cell: ({ row }) => <span>{row.original.parts?.length || 0}</span>,
      }),
      columnHelper.display({
        id: "addPart",
        header: () => <div className="flex items-center">Add Part</div>,
        cell: ({ row }) => <AssignParts row={row.original} />,
      }),
      columnHelper.display({
        id: "actions",
        header: () => <div className="flex items-center">Actions</div>,
        cell: ({ row }) => {
          return (
            <div className="flex gap-2 items-center">
              <ViewParts row={row.original} />
              <Button
                type="button"
                size="icon"
                variant="destructive"
                className="text-sm cursor-pointer"
              >
                <Trash2Icon />
              </Button>
            </div>
          );
        },
      }),
    ],
    []
  );
};

const ComplaintSection = () => {
  const [searchText, setSearchText] = useState("");
  const { id: jobId } = useParams();
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data, isLoading } = useJobCardComplaintsQuery(jobId as string);

  const { mutateAsync } = useJobCardAssignComplaintsMutation(jobId as string);

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
      const currentMappedCodes =
        data?.complaints.map(
          (s) =>
            ({
              ...s.complaintMaster,
            } as Complaint)
        ) ?? [];

      setSelected(() => currentMappedCodes);
    }
  }, [data?.complaints, isDialogOpen]);

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

  const handleDone = async () => {
    const mapped = selected.map((complaint) => ({
      complaintCode: complaint.complaintCode,
    }));

    await mutateAsync({
      complaints: mapped,
    });
    setIsDialogOpen(false);
  };

  const columns = useComplaintTableColumns();

  const { table } = useDataTable({
    data: data?.complaints ?? [],
    columns,
    count: data?.count ?? 0,
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
                    onCheckedChange={() =>
                      handleToggle({
                        ...complaint,
                        complaintTypeMaster: complaint.complaintType,
                      })
                    }
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
        isLoading={isLoading}
        columns={columns}
        count={data?.count ?? 0}
        pageSize={PAGE_SIZE}
      />
    </Container>
  );
};

export default ComplaintSection;
