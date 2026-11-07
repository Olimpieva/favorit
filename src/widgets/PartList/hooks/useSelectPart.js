import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPart, selectSelectedBrand, selectSelectedPartNumber } from "@/store/search";

export const useSelectPart = parts => {
  const dispatch = useDispatch();

  const brand = useSelector(selectSelectedBrand);
  const selectedPartNumber = useSelector(selectSelectedPartNumber);

  const handleSelectPart = number => {
    dispatch(selectPart(number));
  };

  useEffect(() => {
    if (!parts.length || !brand) {
      if (selectedPartNumber !== null) dispatch(selectPart(null));
      return;
    }

    const hasSelectedPart = parts.some(part => part.number === selectedPartNumber);

    if (!hasSelectedPart) {
      dispatch(selectPart(parts[0].number));
    }
  }, [parts, brand, selectedPartNumber, dispatch]);

  return {
    selectedPartNumber,
    handleSelectPart,
  };
};
