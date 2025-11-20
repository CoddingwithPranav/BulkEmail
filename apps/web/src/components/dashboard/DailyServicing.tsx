import { Calendar, Clock, User } from "lucide-react";
import { Badge } from "../ui/badge";

interface ServiceAppointment {
  id: string;
  time: string;
  customerName: string;
  carModel: string;
  serviceType: string;
  status: "scheduled" | "in-progress" | "completed";
}

const appointments: ServiceAppointment[] = [
  {
    id: "1",
    time: "09:00",
    customerName: "John Smith",
    carModel: "Toyota Camry",
    serviceType: "Oil Change",
    status: "completed",
  },
  {
    id: "2",
    time: "10:30",
    customerName: "Sarah Johnson",
    carModel: "Honda Civic",
    serviceType: "Brake Inspection",
    status: "in-progress",
  },
  {
    id: "3",
    time: "14:00",
    customerName: "Mike Davis",
    carModel: "Ford Explorer",
    serviceType: "Full Service",
    status: "scheduled",
  },
];

export function DailyServicing({ selectedDate }: { selectedDate: Date }) {
  console.log(selectedDate);
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "scheduled":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "in-progress":
        return "Active";
      case "completed":
        return "Done";
      case "scheduled":
        return "Scheduled";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-muted-foreground" />
        <h4 className="font-medium">Todays Services</h4>
        <Badge variant="secondary" className="ml-auto">
          {appointments.length} total
        </Badge>
      </div>

      <div className="space-y-2">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className=" border border-gray-200 rounded-lg p-3 space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{appointment.time}</span>
              </div>
              <Badge className={`${getStatusColor(appointment.status)} border`}>
                {getStatusText(appointment.status)}
              </Badge>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{appointment.customerName}</span>
              </div>
              <div className="pl-6 space-y-1">
                <p className="text-muted-foreground text-sm">
                  {appointment.carModel}
                </p>
                <p className="font-medium text-sm">{appointment.serviceType}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
