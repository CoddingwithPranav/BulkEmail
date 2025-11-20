'use client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Job } from "@/lib/types/job";
import { CheckCircle, FileDown } from "lucide-react";
import { useState } from "react";

type Props = {
  job: Job | null;
  open: boolean;
  onClose: () => void;
};

export function JobCardModal({ job, open, onClose }: Props) {
  const [complaintOpen, setComplaintOpen] = useState(false);

  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl sm:max-w-4xl p-0 overflow-hidden">
        <div className="bg-background p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">
              Job Details - {job.jobCardNo}{" "}
              <Badge variant="outline" className="ml-2 capitalize">
                {job.status}
              </Badge>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
            </Button>
          </div>

          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full justify-start space-x-2 bg-muted p-1 rounded-lg">
              <TabsTrigger value="details">Job Details</TabsTrigger>
              <TabsTrigger value="complaints">Complaints ({job.complaints.length})</TabsTrigger>
              <TabsTrigger value="invoice">Invoice ✓</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="pt-4 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 text-sm">
                <Detail label="Job Card No." value={job.jobCardNo} />
                <Detail label="Customer Name" value={job.customerName} />
                <Detail label="Vehicle Number" value={job.vehicleNumber} />
                <Detail label="Email" value={job.email} />
                <Detail label="Phone" value={job.phone} />
                <Detail label="Address" value={job.address} />
                <Detail label="Current Mileage" value={job.mileage} />
                <Detail label="Engine Number" value={job.engineNumber} />
                <Detail label="Chassis/VIN" value={job.chassisNumber} />
                <Detail label="Dealer" value={job.dealer} />
                <Detail label="Job Type" value={<Badge variant="secondary">{job.jobType}</Badge>} />
                <Detail label="Appointment Type" value={job.appointmentType} />
                <Detail label="Payment Type" value={job.paymentType} />
                <Detail label="Vehicle Arrival" value={job.vehicleArrival} />
                <Detail label="Expected Delivery" value={`${job.expectedDelivery} (EDD)`} />
              </div>
            </TabsContent>

            <TabsContent value="complaints" className="pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Complaints List</div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setComplaintOpen((prev) => !prev)}
                >
                  {complaintOpen ? "Hide" : "Show"}
                </Button>
              </div>
              {complaintOpen && (
                <div className="space-y-2">
                  {job.complaints.map((complaint, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-muted p-2 rounded-md"
                    >
                      <span>{complaint}</span>
                      <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                        Completed <CheckCircle className="w-4 h-4" />
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="invoice" className="pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm">Click below to download the invoice.</p>
                <Button
                  variant="default"
                  onClick={() => alert("Downloading PDF...")}
                  disabled={!job.invoiceGenerated}
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Detail({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
