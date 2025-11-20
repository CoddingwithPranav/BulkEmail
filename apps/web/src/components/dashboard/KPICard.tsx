import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  color: string;
}

export function KPICard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  color,
}: KPICardProps) {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-green-600";
      case "negative":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  // const getBackgroundColor = () => {
  //   switch (color) {
  //     case "#3b82f6":
  //       return "bg-blue-50";
  //     case "#22c55e":
  //       return "bg-green-50";
  //     case "#10b981":
  //       return "bg-emerald-50";
  //     case "#8b5cf6":
  //       return "bg-purple-50";
  //     case "#06b6d4":
  //       return "bg-cyan-50";
  //     case "#f59e0b":
  //       return "bg-amber-50";
  //     default:
  //       return "bg-gray-50";
  //   }
  // };

  const getIconBackground = () => {
    switch (color) {
      case "#3b82f6":
        return "bg-blue-100";
      case "#22c55e":
        return "bg-green-100";
      case "#10b981":
        return "bg-emerald-100";
      case "#8b5cf6":
        return "bg-purple-100";
      case "#06b6d4":
        return "bg-cyan-100";
      case "#f59e0b":
        return "bg-amber-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <Card
      className={`h-full border-l-4 py-2 gap-2 overflow-hidden`}
      // className={`h-full border-l-4 py-2 gap-2 ${getBackgroundColor()} overflow-hidden`}
      style={{ borderLeftColor: color }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 px-2 pt-2 ">
        <CardTitle className="text-xs truncate pr-1" title={title}>
          {title}
        </CardTitle>
        <div
          className={`p-1.5 rounded-lg ${getIconBackground()} flex-shrink-0`}
        >
          <Icon className="h-3 w-3" style={{ color }} />
        </div>
      </CardHeader>
      <CardContent className="px-2 pb-2">
        <div className="space-y-1">
          <div
            className="text-xl truncate"
            style={{ color }}
            title={value.toString()}
          >
            {value}
          </div>
          {change && (
            <p
              className={`text-xs ${getChangeColor()} truncate`}
              title={change}
            >
              {change}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
