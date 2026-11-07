import { formatDate, formatCurrency } from "@/shared/helpers";
import { SortableHeading } from "@/shared/ui";
import { useSortOffers } from "./hooks/useSortOffers";

export const Offers = ({ part }) => {
  const { sort, offers, handleSort } = useSortOffers(part.warehouses);

  return (
    <div className="border-top p-3 p-sm-4">
      {offers.length ? (
        <table className="table align-middle small mb-0">
          <caption className="visually-hidden">
            Предложения для {part.brand} {part.number}
          </caption>

          <thead>
            <tr>
              <th scope="col" className="text-body-secondary fw-medium">
                <i className="bi bi-house-door me-2" aria-hidden="true" />
                Склад
              </th>
              <SortableHeading field="price" sort={sort} onSort={handleSort} icon="bi-tag">
                Цена
              </SortableHeading>
              <th scope="col" className="text-end text-body-secondary fw-medium">
                <i className="bi bi-box-seam me-2" aria-hidden="true" />
                Остаток
              </th>
              <SortableHeading field="shipmentDate" sort={sort} onSort={handleSort} icon="bi-truck">
                Отправка
              </SortableHeading>
            </tr>
          </thead>

          <tbody>
            {offers.map((offer, offerIndex) => (
              <tr key={`${offer.id ?? "warehouse"}-${offerIndex}`}>
                <td className="text-body-secondary">{offer.code}</td>
                <td className="text-end text-body-secondary">
                  {formatCurrency(Number(offer.price))}
                </td>
                <td className="text-end text-body-secondary">{offer.stock ?? 0} шт.</td>
                <td className="text-end text-body-secondary">{formatDate(offer.shipmentDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-body-secondary mb-0">Предложений по складам пока нет.</p>
      )}
    </div>
  );
};
