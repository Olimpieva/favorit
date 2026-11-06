import { selectPartsByBrand } from "@/store/brands/brands.selectors";
import { useSelector } from "react-redux";
import { AnalogueList, PartInfo } from "./components";
import { useSelectPart } from "./hooks";

export const PartList = () => {
  const parts = useSelector(selectPartsByBrand);

  const { handleSelectPart } = useSelectPart();

  if (!parts.length) return null;

  return (
    <div className="part-results row row-gap-4 flex-xl-nowrap flex-grow-1 mt-4 text-start">
      <section
        className="col-12 col-xl-6 d-flex flex-column"
        aria-labelledby="searched-part-heading"
      >
        <h2
          id="searched-part-heading"
          className="h3 d-flex flex-shrink-0 align-items-center gap-2 mb-2"
        >
          <i className="bi bi-box-seam text-primary" aria-hidden="true" />
          Результаты поиска
        </h2>
        <p className="text-body-secondary flex-shrink-0 mb-3">По артикулу и производителю</p>

        <div className="flex-shrink-0">
          {parts.map((part, index) => (
            <PartInfo key={part.goodsID} part={part} open={index === 0} />
          ))}
        </div>
      </section>
      <AnalogueList />
    </div>
  );
};
