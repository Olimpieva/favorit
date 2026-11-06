import cn from "classnames";

import { pluralize } from "@/shared/helpers/pluralize";

export const Tags = ({ inStock, offersCount, isAnalogue = false }) => (
  <span className="d-flex flex-column align-items-end gap-2 text-end text-nowrap fs-6">
    <span
      className={cn("badge rounded-pill fs-6 fw-medium", {
        "bg-primary text-dark": !isAnalogue,
        "border border-secondary text-body": isAnalogue,
      })}
    >
      {isAnalogue ? "Аналог" : "По вашему запросу"}
    </span>

    <span
      className={cn("ms-auto text-end", {
        "text-success-emphasis": inStock,
        "text-body-secondary": !inStock,
      })}
    >
      <i
        className={cn("bi me-1", {
          "bi-check-circle-fill": inStock,
          "bi-dash-circle": !inStock,
        })}
        aria-hidden="true"
      />
      {inStock ? "В наличии" : "Нет в наличии"}
    </span>

    <span className="text-primary">
      {offersCount} {pluralize(offersCount, ["предложение", "предложения", "предложений"])}
    </span>
  </span>
);
