// app/dashboard/receiver-list/create/page.tsx
import { Container, Heading } from "@/components/common";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Users } from "lucide-react";
import CreateCategories from "./_components/CreateCategories";

export const metadata = {
  title: "Create Categories List",
};

export default function CreateCategoriesListPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/categories">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <Heading level="h3">Create New Categories</Heading>
          <p className="text-sm text-muted-foreground">
            Manually add categories or import from existing data
          </p>
        </div>
      </div>

      <Container>
        <CreateCategories />
      </Container>
    </div>
  );
}