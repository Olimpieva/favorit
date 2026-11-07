import { useState } from "react";
import { sortOffers } from "../Offers.utils";

export const useSortOffers = (data = []) => {
  const [sort, setSort] = useState({ field: null, direction: "ascending" });

  const offers = sortOffers(data, sort);

  const handleSort = field => {
    setSort(current => ({
      field,
      direction:
        current.field === field && current.direction === "ascending" ? "descending" : "ascending",
    }));
  };

  return { sort, offers, handleSort };
};
