import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPart } from "@/store/search/search.slice";
import { selectSelectedBrand, selectSelectedPartId } from "@/store/search/search.selectors";

export const useSelectPart = parts => {
  const dispatch = useDispatch();

  const brand = useSelector(selectSelectedBrand);
  const partId = useSelector(selectSelectedPartId);

  const handleSelectPart = number => {
    dispatch(selectPart(number));
  };

  useEffect(() => {
    if (!parts.length || !brand) {
      if (partId !== null) dispatch(selectPart(null));
      return;
    }

    if (!parts.some(part => part.number === partId)) {
      dispatch(selectPart(parts[0].number));
    }
  }, [parts, brand, partId, dispatch]);

  return {
    handleSelectPart,
  };
};
