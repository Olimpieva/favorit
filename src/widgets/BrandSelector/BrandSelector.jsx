import { Dropdown } from "@/shared/ui";
import { useBrandDropdown } from "./hooks";

export const BrandSelector = () => {
  const { value, onSelect, items, label } = useBrandDropdown();

  if (!items.length) {
    return null;
  }

  return (
    <Dropdown
      label={label}
      items={items}
      value={value}
      onSelect={onSelect}
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
