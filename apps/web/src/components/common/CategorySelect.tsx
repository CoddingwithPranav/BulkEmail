"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCategoriesDDLQuery } from "@/hooks/queries/categories.query";
import { Skeleton } from "@/components/ui/skeleton";

interface CategorySelectProps {
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

export default function CategorySelect({
  value,
  onValueChange,
  placeholder = "Select a category",
}: CategorySelectProps) {
  const { data: categories = [], isLoading } = useCategoriesDDLQuery();

  const isReady = !isLoading && categories.length > 0;

  if (!isReady) {
    return <Skeleton className="h-10 w-full" />;
  }

  return (
    <Select key={categories.map(c => c.id).join(",")} value={value ?? ""} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {categories.map((cat) => (
          <SelectItem key={cat.id} value={cat.id!}>
            {cat.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}