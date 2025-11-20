import { BarChart3 } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const data = [
  { name: "Oil Change", value: 45, color: "#3b82f6" },
  { name: "Brake Service", value: 30, color: "#22c55e" },
  { name: "Engine Tune-up", value: 15, color: "#f59e0b" },
  { name: "Other Services", value: 10, color: "#8b5cf6" },
];

export function ServiceTypeChart() {
  return (
    <Card className="h-full gap-3">
      <CardHeader className="pb-0">
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          Service Types Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-64 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, "Percentage"]}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex-1">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.value}%</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
