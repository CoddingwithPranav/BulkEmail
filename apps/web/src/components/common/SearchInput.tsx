import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search, XIcon } from "lucide-react";

interface SearchInputProps {
  value: string;
  onValueChange: (val: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchInput = ({
  value,
  onValueChange,
  placeholder,
  className,
}: SearchInputProps) => {
  return (
    <div className={cn("relative w-full max-w-sm", className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder={placeholder || "Search..."}
        className="pl-9 pr-8"
      />
      {value && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-1 text-muted-foreground"
          onClick={() => onValueChange("")}
        >
          <XIcon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};
