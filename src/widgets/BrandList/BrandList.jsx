import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectBrandsState } from "../../store/brands/brands.selectors";
import { Dropdown } from "../../shared/ui";
import { useSelectBrand } from "./hooks";

export const BrandList = () => {
  const { selectBrand } = useSelectBrand();

  const { brands } = useSelector(selectBrandsState);

  const items = useMemo(
    () => brands.map(item => ({ value: item.brand, label: item.brand, parts: item.parts })),
    [brands],
  );

  if (!brands.length) {
    return null;
  }

  return (
    <Dropdown
      label={`Производитель · ${brands.length} найдено`}
      items={items}
      onSelect={selectBrand}
      placeholder="Выберите производителя"
      icon="bi bi-buildings"
      renderItem={item => (
        <>
          <span className="d-block fw-bold text-uppercase">{item.label}</span>
          {item.parts.map(part => (
            <span key={part.goodsID} className="d-flex align-items-baseline gap-1 small opacity-75">
              <span className="text-truncate" title={part.name}>
                {part.name}
              </span>
              <span className="flex-shrink-0 text-nowrap">· {part.number}</span>
            </span>
          ))}
        </>
      )}
    />
  );
};
