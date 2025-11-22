import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import CreateCampaign from "./_components/CreateCampaign";

const CreateCampaignPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Create Campaign</h1>
          <p className="text-sm text-muted-foreground">
            Design and launch a new marketing campaign
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

      <CreateCampaign />
    </div>
  );
};

export default CreateCampaignPage;
