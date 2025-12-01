import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import EditCategoriesPage from "./_componenets/EditCategories";

const ContactEditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Edit Categories</h1>
          <p className="text-sm text-muted-foreground">
            Update the details of the categories below 
          </p>
        </div>
        <Link href="/dashboard/categories" passHref>
          <Button
            variant="ghost"
            className="flex items-center border border-accent"
          >
            <ChevronLeft className="h-5 w-5 mr-1" /> Back
          </Button>
        </Link>
      </div>

      <Container>
      <EditCategoriesPage id={id} />
      </Container>

    </div>
  );
};

export default ContactEditPage;
    