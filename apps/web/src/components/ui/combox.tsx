import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { BaseQueryParams } from "@repo/types";

export interface ComboBoxItem {
  label: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fullData?: Record<string, any> | any;
}

interface SearchableComboBoxProps {
  queryKey: string;
  fetchFn: (query: BaseQueryParams) => Promise<ComboBoxItem[]>;
  selected?: string;
  onSelect: (item: ComboBoxItem) => void;
  placeholder?: string;
}

export const Combobox = ({
  queryKey,
  fetchFn,
  selected,
  onSelect,
  placeholder = "Search...",
}: SearchableComboBoxProps) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [debouncedInput] = useDebounce(input, 300);

  const { data: options = [], isLoading } = useQuery({
    queryKey: [queryKey, debouncedInput, selected],
    queryFn: () =>
      fetchFn({
        q: debouncedInput,
        i: selected,
      }),
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  const selectedOption = options.find((item) => item.value === selected);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between"
        >
          {selectedOption?.label ?? placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            value={input}
            onValueChange={setInput}
            placeholder="Search..."
            disabled={isLoading}
          />
          <CommandEmpty>
            {isLoading ? "Loading..." : "No results found."}
          </CommandEmpty>
          <CommandGroup>
            {options.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={() => {
                  onSelect({
                    ...item,
                    fullData: item.fullData,
                  });
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedOption?.value === item.value
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
