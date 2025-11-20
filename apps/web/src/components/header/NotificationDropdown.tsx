import { AlertTriangle, BellRing, CheckCircle, Clock } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ScrollArea } from "../ui/scroll-area";

export function NotificationDropdown() {
  const notifications = [
    {
      id: 1,
      title: "Service Completed",
      message: "Vehicle KL-01-AA-1234 service completed",
      time: "2 minutes ago",
      type: "success",
      icon: CheckCircle,
    },
    {
      id: 2,
      title: "New Service Request",
      message: "Customer John Doe submitted new request",
      time: "5 minutes ago",
      type: "info",
      icon: Clock,
    },
    {
      id: 3,
      title: "High Priority Issue",
      message: "Urgent repair needed for KL-03-CC-9012",
      time: "10 minutes ago",
      type: "warning",
      icon: AlertTriangle,
    },
    {
      id: 4,
      title: "Payment Received",
      message: "Invoice INV-2025-001 payment confirmed",
      time: "1 hour ago",
      type: "success",
      icon: CheckCircle,
    },
    {
      id: 5,
      title: "Mechanic Assignment",
      message: "New complaint assigned to Raj Kumar",
      time: "2 hours ago",
      type: "info",
      icon: Clock,
    },
  ];

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "info":
        return "text-blue-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <BellRing className="h-4 w-4" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
            {notifications.filter((n) => n.time.includes("minutes")).length}
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="p-3 border-b">
          <h3 className="font-medium">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            You have{" "}
            {notifications.filter((n) => n.time.includes("minutes")).length}{" "}
            unread notifications
          </p>
        </div>
        <ScrollArea className="h-80">
          <div className="p-1">
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="p-3 cursor-pointer"
              >
                <div className="flex gap-3 w-full">
                  <notification.icon
                    className={`h-4 w-4 mt-0.5 ${getNotificationColor(
                      notification.type
                    )}`}
                  />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        </ScrollArea>
        <div className="p-2 border-t">
          <Button variant="ghost" size="sm" className="w-full justify-center">
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
