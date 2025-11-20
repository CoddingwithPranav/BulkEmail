import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const activities = [
  {
    id: "1",
    time: "2h ago",
    action: "Service Completed",
    description: "Oil change for Honda Accord",
    type: "completed",
    icon: CheckCircle,
  },
  {
    id: "2",
    time: "4h ago",
    action: "New Appointment",
    description: "Brake repair scheduled for Aug 5th",
    type: "scheduled",
    icon: Calendar,
  },
  {
    id: "3",
    time: "6h ago",
    action: "Service Delayed",
    description: "Engine diagnosis delayed",
    type: "delayed",
    icon: AlertCircle,
  },
  {
    id: "4",
    time: "1d ago",
    action: "Payment Received",
    description: "Transmission service - $450",
    type: "payment",
    icon: DollarSign,
  },
  {
    id: "5",
    time: "1d ago",
    action: "Service Started",
    description: "AC repair for Toyota Prius",
    type: "in-progress",
    icon: Clock,
  },
];

export function RecentActivities() {
  const getActivityColor = (type: string) => {
    switch (type) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "scheduled":
        return "text-blue-600 bg-blue-100";
      case "delayed":
        return "text-red-600 bg-red-100";
      case "payment":
        return "text-emerald-600 bg-emerald-100";
      case "in-progress":
        return "text-amber-600 bg-amber-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <Card className="h-full gap-3">
      <CardHeader className="pb-0">
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activities
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className=" border border-gray-200 rounded-lg p-3"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg ${getActivityColor(
                    activity.type
                  )}`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{activity.action}</span>
                    <span className="text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
