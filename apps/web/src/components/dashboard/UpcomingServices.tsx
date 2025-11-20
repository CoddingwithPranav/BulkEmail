import { Calendar, Clock, User } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const upcomingServices = [
  {
    id: "1",
    date: "Aug 2",
    time: "09:00",
    customer: "Robert Wilson",
    service: "AC Repair",
    priority: "high",
  },
  {
    id: "2",
    date: "Aug 2",
    time: "11:30",
    customer: "Lisa Parker",
    service: "Engine Tune-up",
    priority: "medium",
  },
  {
    id: "3",
    date: "Aug 3",
    time: "14:00",
    customer: "David Brown",
    service: "Transmission Check",
    priority: "low",
  },
  {
    id: "4",
    date: "Aug 3",
    time: "16:30",
    customer: "Anna Miller",
    service: "Brake Replacement",
    priority: "high",
  },
  {
    id: "5",
    date: "Aug 4",
    time: "10:00",
    customer: "Tom Anderson",
    service: "Oil Change",
    priority: "low",
  },
];

export function UpcomingServices() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="h-full gap-3">
      <CardHeader className="pb-0">
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Services
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        {upcomingServices.map((service) => (
          <div
            key={service.id}
            className=" border border-gray-200 rounded-lg p-3 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{service.date}</span>
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{service.time}</span>
              </div>
              <Badge
                className={`${getPriorityColor(
                  service.priority
                )} border text-xs`}
              >
                {service.priority}
              </Badge>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{service.customer}</span>
              </div>
              <p className="pl-6 text-muted-foreground">{service.service}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
