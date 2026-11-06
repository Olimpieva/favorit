import { useDebounce } from "@/shared/hooks";
import { useEffect, useMemo, useState } from "react";

export const useFilters = (data, selectedBrand, selectedPartId) => {
  const { value, setValue, debouncedValue } = useDebounce();

  const onSearchStringChange = event => setValue(event.target.value);

  const clearSearchString = () => setValue("");

  const [inStock, setInStock] = useState(false);

  const query = value.trim().length >= 2 ? debouncedValue.trim().toLowerCase() : "";

  const analogues = useMemo(() => {
    const currentAnalogues = data?.analogues ?? [];

    return currentAnalogues.filter(item => {
      const matchesStock = !inStock || Number(item.count) > 0;
      const matchesSearch =
        query.length < 2 ||
        String(item.number ?? "")
          .toLowerCase()
          .includes(query) ||
        String(item.brand ?? "")
          .toLowerCase()
          .includes(query);

      return matchesStock && matchesSearch;
    });
  }, [inStock, data, query]);

  useEffect(() => {
    setValue("");
    setInStock(false);
  }, [selectedBrand, selectedPartId, setValue]);

  return {
    analogues,
    searchString: value,
    onSearchStringChange,
    clearSearchString,
    inStock,
    setInStock,
  };
};
