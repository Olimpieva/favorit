import { useDispatch, useSelector } from "react-redux";
import { selectBrand } from "@/store/brands/brands.actions";
import { selectBrandsState } from "@/store/brands/brands.selectors";

export const useBrandDropdown = () => {
  const dispatch = useDispatch();

  const brands = useSelector(selectBrandsState);

  const items = brands.items.map(item => ({
    value: item.brand,
    label: item.brand,
    parts: item.parts,
  }));

  const handleSelectBrand = item => {
    dispatch(selectBrand(item.value));
  };

  return {
    onSelect: handleSelectBrand,
    items,
    label: `Производитель · ${items.length} найдено`,
  };
};
