import { Checkbox, SearchString } from "@/shared/ui";
import { PartDetails } from "../PartDetails";
import { useFilters } from "./hooks/useFilters";
import { useSelector } from "react-redux";
import { selectSelectedBrand, selectSelectedPartNumber } from "@/store/search";
import { useGetPartDetailsQuery } from "@/api/parts/parts.api";

export const AnalogueList = () => {
  const partNumber = useSelector(selectSelectedPartNumber);
  const brand = useSelector(selectSelectedBrand);

  const { currentData, isFetching, isError, error, refetch } = useGetPartDetailsQuery(
    { number: partNumber, brand },
    { skip: !partNumber || !brand },
  );

  const { analogues, searchString, onSearchStringChange, clearSearchString, inStock, setInStock } =
    useFilters(currentData, brand, partNumber);

  return (
    <section
      className="col-12 col-xl-6 d-flex flex-column min-h-0"
      aria-labelledby="analogues-heading"
    >
      <h2 id="analogues-heading" className="h3 d-flex flex-shrink-0 align-items-center gap-2 mb-3">
        <i className="bi bi-arrow-repeat text-primary" aria-hidden="true" />
        Аналоги
      </h2>

      <div className="d-flex flex-column flex-sm-row align-items-sm-center flex-shrink-0 gap-3 w-100 mt-xl-3 p-3">
        <div className="flex-grow-1 min-w-0">
          <SearchString
            placeholder="Производитель или артикул детали"
            icon="bi-search"
            value={searchString}
            onChange={onSearchStringChange}
            onClear={clearSearchString}
          />
        </div>

        <Checkbox
          className="ms-auto flex-shrink-0 text-nowrap"
          label="Только в наличии"
          checked={inStock}
          onChange={event => setInStock(event.target.checked)}
        />
      </div>

      <div
        className="analogue-list flex-grow-1 overflow-y-auto p-3 min-h-0"
        tabIndex={0}
        aria-label="Список аналогов"
      >
        {isFetching && (
          <div className="d-flex align-items-center gap-2 text-body-secondary" role="status">
            <span className="spinner-border spinner-border-sm" aria-hidden="true" />
            Загружаем аналоги…
          </div>
        )}

        {isError && (
          <div className="alert alert-danger" role="alert">
            <p className="mb-2">{error?.message}</p>
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={refetch}>
              Повторить
            </button>
          </div>
        )}

        {!isFetching && !isError && currentData !== undefined && !analogues.length && (
          <p className="text-body-secondary">Аналоги не найдены.</p>
        )}

        {!isFetching &&
          !isError &&
          analogues.map(part => <PartDetails key={part.goodsID} part={part} isAnalogue />)}
      </div>
    </section>
  );
};
