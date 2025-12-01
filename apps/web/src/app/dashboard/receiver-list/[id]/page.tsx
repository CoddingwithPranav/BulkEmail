import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import EditReceiver from "./_components/EditReceiver";
import { Container } from "@/components/common/Container";

const ReceiverEditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Edit Receiver</h1>
          <p className="text-sm text-muted-foreground">
            Update the details of the Receiver 
          </p>
        </div>
        <Link href="/dashboard/receiver-list" passHref>
          <Button
            variant="ghost"
            className="flex items-center border border-accent"
          >
            <ChevronLeft className="h-5 w-5 mr-1" /> Back
          </Button>
        </Link>
      </div>

      <Container >
      <EditReceiver id={id} />
        </Container>

    </div>
  );
};

export default ReceiverEditPage;
    