import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentBrand, selectPartsByBrand } from "@/store/brands/brands.selectors";
import {
  fetchPartInfo,
  selectPart,
  resetSelectedPart,
} from "@/store/selectedPart/selectedPart.actions";

export const useSelectPart = () => {
  const dispatch = useDispatch();

  const parts = useSelector(selectPartsByBrand);
  const selectedBrand = useSelector(selectCurrentBrand);

  const handleSelectPart = part => {
    dispatch(selectPart(part.number));
    dispatch(fetchPartInfo({ number: part.number, brand: selectedBrand }));
  };

  useEffect(() => {
    if (!parts.length || !selectedBrand) {
      dispatch(resetSelectedPart());
      return;
    }

    const newCurrentPart = parts[0];

    dispatch(selectPart(newCurrentPart.number));

    const promise = dispatch(
      fetchPartInfo({ number: newCurrentPart.number, brand: selectedBrand }),
    );

    return () => promise.abort();
  }, [parts, selectedBrand, dispatch]);

  return {
    handleSelectPart,
  };
};
