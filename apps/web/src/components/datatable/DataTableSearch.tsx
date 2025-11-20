import { ChangeEvent, useCallback, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { useSelectedParams } from "@/hooks/use-selected-parms";
import { debounce } from "lodash";
import { Search } from "lucide-react";

type DataTableSearchProps = {
  placeholder?: string;
  prefix?: string;
  autofocus?: boolean;
};

export const DataTableSearch = ({
  placeholder,
  prefix,
  autofocus,
}: DataTableSearchProps) => {
  const placeholderText = placeholder || "Search...";
  const selectedParams = useSelectedParams({
    param: "q",
    prefix,
    multiple: false,
  });

  const query = selectedParams.get();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (!value) {
        selectedParams.delete();
      } else {
        selectedParams.add(value);
      }
    }, 500),
    [selectedParams]
  );

  useEffect(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);

  return (
    <div className="relative flex-1 max-w-sm">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        autoComplete="off"
        name="q"
        type="search"
        autoFocus={autofocus}
        defaultValue={query?.[0] || undefined}
        onChange={debouncedOnChange}
        placeholder={placeholderText}
        className="pl-10"
      />
    </div>
  );
};
