import { useDispatch, useSelector } from "react-redux";
import { selectBrand, selectSelectedBrand } from "@/store/search";
import { selectBrands } from "@/store/parts";

export const useBrandDropdown = () => {
  const dispatch = useDispatch();

  const brands = useSelector(selectBrands);
  const selectedBrand = useSelector(selectSelectedBrand);

  const items = brands.map(item => ({
    value: item.brand,
    label: item.brand,
    parts: item.parts,
  }));

  const handleSelectBrand = item => {
    dispatch(selectBrand(item.value));
  };

  return {
    value: selectedBrand,
    onSelect: handleSelectBrand,
    items,
    label: `Производитель · ${items.length} найдено`,
  };
};
