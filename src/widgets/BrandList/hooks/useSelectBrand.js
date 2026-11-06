import { useState } from "react";

export const useSelectBrand = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const selectBrand = item => {
    setSelectedBrand({ brand: item.brand, parts: item.parts });
  };

  return {
    selectedBrand,
    selectBrand,
  };
};
