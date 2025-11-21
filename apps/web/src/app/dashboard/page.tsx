"use client";
import {
  AlertTriangle,
  Calendar as CalendarIcon,
  Car,
  CheckCircle,
  DollarSign,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { CustomerRating } from "../../components/dashboard/CustomerRating";
import { DailyServicing } from "../../components/dashboard/DailyServicing";
import { DashboardFilter } from "../../components/dashboard/DashboardFilter";
import { KPICard } from "../../components/dashboard/KPICard";
import { RecentActivities } from "../../components/dashboard/RecentActivities";
import { ServiceTypeChart } from "../../components/dashboard/ServiceType";
import { UpcomingServices } from "../../components/dashboard/UpcomingServices";
import { WeeklyChart } from "../../components/dashboard/WeeklyChart";
import { Calendar } from "../../components/ui/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Car Service Dashboard</h1>
            <p className="text-muted-foreground">
              Track your automotive service operations and customer satisfaction
            </p>
          </div>
          <DashboardFilter />
        </div>

        <div className="grid grid-cols-3 gap-4 auto-rows-min">
          <div className="col-span-2 grid grid-cols-3 grid-rows-2 gap-3">
            <div>
              <KPICard
                title="Pending Services"
                value="8"
                change="-2 from yesterday"
                changeType="positive"
                icon={AlertTriangle}
                color="#f59e0b"
              />
            </div>

            <div>
              <KPICard
                title="Total Services"
                value="1,248"
                change="+12% from last month"
                changeType="positive"
                icon={Car}
                color="#3b82f6"
              />
            </div>

            <div>
              <KPICard
                title="Completed Today"
                value="23"
                change="+5 from yesterday"
                changeType="positive"
                icon={CheckCircle}
                color="#22c55e"
              />
            </div>

            <div>
              <KPICard
                title="Monthly Revenue"
                value="$24,580"
                change="+8.2% from last month"
                changeType="positive"
                icon={DollarSign}
                color="#10b981"
              />
            </div>

            <div>
              <KPICard
                title="Active Customers"
                value="342"
                change="+15 new this month"
                changeType="positive"
                icon={Users}
                color="#8b5cf6"
              />
            </div>

            <div>
              <KPICard
                title="Available Technicians"
                value="6"
                change="2 on break"
                changeType="neutral"
                icon={Wrench}
                color="#06b6d4"
              />
            </div>
          </div>

          <div className="row-span-2">
            <Card className="h-max gap-2 py-3">
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    className="rounded-md border-0 p-0"
                  />
                </div>
                <div className="border-t pt-3">
                  <DailyServicing selectedDate={selectedDate} />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-full">
            <WeeklyChart />
          </div>

          <div>
            <ServiceTypeChart />
          </div>

          <div>
            <UpcomingServices />
          </div>

          <div>
            <RecentActivities />
          </div>

          <div>
            <CustomerRating />
          </div>
        </div>
      </div>
    </div>
  );
}
