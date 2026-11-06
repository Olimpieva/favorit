import { Checkbox, SearchString } from "@/shared/ui";
import { PartInfo } from "../PartInfo";
import { useFilters } from "./hooks/useFilters";
import { useSelector } from "react-redux";
import { selectCurrentPartState } from "@/store/selectedPart/selectedPart.selectors";
import { selectCurrentBrand } from "@/store/brands/brands.selectors";

export const AnalogueList = () => {
  const { id, data, loading, loaded, error } = useSelector(selectCurrentPartState);
  const selectedBrand = useSelector(selectCurrentBrand);

  const { analogues, searchString, onSearchStringChange, clearSearchString, inStock, setInStock } =
    useFilters(data, selectedBrand, id);

  return (
    <section className="col-12 col-xl-6 d-flex flex-column" aria-labelledby="analogues-heading">
      <h2 id="analogues-heading" className="h3 d-flex flex-shrink-0 align-items-center gap-2 mb-3">
        <i className="bi bi-arrow-repeat text-primary" aria-hidden="true" />
        Аналоги
      </h2>

      <div className="d-flex flex-column flex-sm-row align-items-sm-center flex-shrink-0 gap-3 w-100 mt-xl-3 p-3">
        <div className="flex-grow-1">
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
        className="part-results__scroll flex-grow-1 overflow-y-auto p-3"
        tabIndex={0}
        aria-label="Список аналогов"
      >
        {loading && (
          <div className="d-flex align-items-center gap-2 text-body-secondary" role="status">
            <span className="spinner-border spinner-border-sm" aria-hidden="true" />
            Загружаем аналоги…
          </div>
        )}

        {error && (
          <p className="text-danger" role="alert">
            {error}
          </p>
        )}

        {!loading && !error && loaded && !analogues.length && (
          <p className="text-body-secondary">Аналоги не найдены.</p>
        )}

        {!loading &&
          !error &&
          analogues.map(part => <PartInfo key={part.goodsID} part={part} isAnalogue />)}
      </div>
    </section>
  );
};
