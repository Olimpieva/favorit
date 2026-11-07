import cn from "classnames";
import { Offers, Tags } from "./components";
import { formatCurrency } from "@/shared/helpers";
import { usePartDetails } from "./hooks";

export const PartDetails = ({ part, open = false, isAnalogue = false, selected = false }) => {
  const { inStock, price, offers } = usePartDetails(part);

  return (
    <details
      className={cn("border rounded-4 bg-body mb-3", { "border-primary": selected })}
      open={open}
      aria-current={selected ? "true" : undefined}
    >
      <summary className="d-flex flex-column flex-sm-row align-items-sm-center gap-4 p-4">
        <span className="flex-grow-1 text-break">
          <span className="d-block fw-bold fs-4">
            {part.brand} · {part.number}
          </span>
          <span className="d-block fs-5 mt-1">{part.name}</span>
          <span className="d-block text-body-secondary mt-2">
            {price !== null ? `от ${formatCurrency(price)}` : "Цена не указана"}
            {" · "}Всего {part.count ?? 0} шт.
          </span>
        </span>

        <span className="d-flex align-items-center gap-3 ms-auto flex-shrink-0">
          <Tags inStock={inStock} offersCount={offers.length} isAnalogue={isAnalogue} />
          <i className="bi bi-chevron-down text-body-secondary align-self-end" aria-hidden="true" />
        </span>
      </summary>

      <Offers part={part} />
    </details>
  );
};
