// components/CategorySelect.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategorySelectProps {
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

export default function CategorySelect({
  value,
  onValueChange,
  placeholder = "Select category",
}: CategorySelectProps) {
  const { data, isLoading } = useCategoriesQuery({});

  if (isLoading) return <SelectTrigger><SelectValue>Loading...</SelectValue></SelectTrigger>;

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data?.items?.map((cat) => (
          <SelectItem key={cat.id} value={cat.id}>
            {cat.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}