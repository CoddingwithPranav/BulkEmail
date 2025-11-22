import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import EditCampaigns from "./_componets/EditCampaigns";

const CampaignEditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Edit Campaign</h1>
          <p className="text-sm text-muted-foreground">
            Update the details of the campaign 
          </p>
        </div>
        <Link href="/dashboard/campaigns" passHref>
          <Button
            variant="ghost"
            className="flex items-center border border-accent"
          >
            <ChevronLeft className="h-5 w-5 mr-1" /> Back
          </Button>
        </Link>
      </div>

      <EditCampaigns id={id} />
    </div>
  );
};

export default CampaignEditPage;
    