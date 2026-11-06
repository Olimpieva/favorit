import { useDispatch, useSelector } from "react-redux";
import { selectBrand } from "@/store/search/search.slice";
import { selectSearchArticle, selectSelectedBrand } from "@/store/search/search.selectors";
import { useGetPartsByArticleQuery } from "@/api/parts/parts.api";
import { selectBrands } from "@/store/parts/parts.selectors";

export const useBrandDropdown = () => {
  const dispatch = useDispatch();

  const article = useSelector(selectSearchArticle);
  const brand = useSelector(selectSelectedBrand);

  const { currentData } = useGetPartsByArticleQuery(article, { skip: !article });
  const brands = selectBrands(currentData);

  const items = brands.map(item => ({
    value: item.brand,
    label: item.brand,
    parts: item.parts,
  }));

  const handleSelectBrand = item => {
    dispatch(selectBrand(item.value));
  };

  return {
    value: brand,
    onSelect: handleSelectBrand,
    items,
    label: `Производитель · ${items.length} найдено`,
  };
};
