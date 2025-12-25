import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import UploadFile from "./_components/UploadFile";

const ContactUploadPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Upload Files</h1>
          <p className="text-sm text-muted-foreground">
            Add a new contact to your list
          </p>
        </div>
        <div className="flex justify-between gap-5">
          <Link href="/dashboard/contacts" passHref>
            <Button
              variant="ghost"
              className="flex items-center border border-accent"
            >
              <ChevronLeft className="h-5 w-5 mr-1" /> Back
            </Button>
          </Link>
          <Button
            variant="outline"
            className="flex items-center border border-accent"
          >
            <a
              href="/templates/template.xlsx"
              download="template.xlsx"
            >
              Download XLSX Template
            </a>
          </Button>
          </div>
      </div>
      <UploadFile />
    </div>
  );
};

export default ContactUploadPage;
