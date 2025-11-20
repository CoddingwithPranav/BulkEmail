import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const data = [
  { day: "Mon", completed: 12, incomplete: 3 },
  { day: "Tue", completed: 15, incomplete: 2 },
  { day: "Wed", completed: 8, incomplete: 5 },
  { day: "Thu", completed: 18, incomplete: 1 },
  { day: "Fri", completed: 22, incomplete: 4 },
  { day: "Sat", completed: 25, incomplete: 2 },
  { day: "Sun", completed: 10, incomplete: 1 },
];

export function WeeklyChart() {
  return (
    <Card className="h-full flex flex-col gap-3">
      <CardHeader className="pb-0">
        <CardTitle>Weekly Services</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: 10,
              bottom: 20,
            }}
            maxBarSize={100}
            barCategoryGap="30%"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            />
            <Legend />
            <Bar
              dataKey="completed"
              fill="#22c55e"
              name="Completed"
              radius={[2, 2, 0, 0]}
              maxBarSize={28}
            />
            <Bar
              dataKey="incomplete"
              fill="#ef4444"
              name="Incomplete"
              radius={[2, 2, 0, 0]}
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
