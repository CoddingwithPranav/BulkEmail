import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import CreateVehicleSales from "./_components/CreateVehicleSales";

const VehicleSaleCreatePage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Create Vehicle Sale</h1>
          <p className="text-sm text-muted-foreground">
            Record a new vehicle sale
          </p>
        </div>
        <Link href="/vehicle-sales" passHref>
          <Button
            variant="ghost"
            className="flex items-center border border-accent"
          >
            <ChevronLeft className="h-5 w-5 mr-1" /> Back
          </Button>
        </Link>
      </div>

      <CreateVehicleSales />
    </div>
  );
};

export default VehicleSaleCreatePage;
