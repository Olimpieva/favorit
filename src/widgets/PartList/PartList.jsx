import { useSelector } from "react-redux";
import { selectSearchArticle, selectSelectedBrand } from "@/store/search/search.selectors";
import { useGetPartsByArticleQuery } from "@/api/parts/parts.api";
import { selectPartsByBrand } from "@/store/parts/parts.selectors";
import { AnalogueList, PartInfo } from "./components";
import { useSelectPart } from "./hooks";

export const PartList = () => {
  const article = useSelector(selectSearchArticle);
  const brand = useSelector(selectSelectedBrand);

  const { parts } = useGetPartsByArticleQuery(article, {
    skip: !article,
    selectFromResult: ({ currentData }) => ({
      parts: selectPartsByBrand(currentData, brand),
    }),
  });

  const { handleSelectPart } = useSelectPart(parts);

  if (!parts.length) return null;

  return (
    <div className="row row-gap-4 flex-xl-nowrap flex-grow-1 mt-4 text-start min-h-0">
      <section
        className="col-12 col-xl-6 d-flex flex-column min-h-0"
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
            <div key={part.goodsID} onClick={() => handleSelectPart(part.number)}>
              <PartInfo part={part} open={index === 0} />
            </div>
          ))}
        </div>
      </section>
      <AnalogueList />
    </div>
  );
};
