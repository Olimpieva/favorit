import { SearchString } from "@/shared/ui";
import { useSearchArticle } from "./hooks";

export const ArticleSearch = () => {
  const { value, onChange, onClear, onRetry, loading, error, isEmpty } = useSearchArticle();

  return (
    <form
      className="article-search w-100 flex-shrink-0 mx-auto px-3 pt-4"
      onSubmit={event => event.preventDefault()}
    >
      <h1 className="h1 fw-bold text-body mb-2">Поиск запчастей по артикулу</h1>
      <p className="text-body-secondary mb-4">Введите артикул, затем выберите производителя.</p>

      <SearchString
        value={value}
        onChange={onChange}
        onClear={onClear}
        label="Артикул детали"
        icon="bi-search"
        placeholder=""
      />

      {loading && (
        <div className="d-flex justify-content-center align-items-center gap-2 mt-3" role="status">
          <span className="spinner-border spinner-border-sm" aria-hidden="true" />
          Ищем производителей…
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3 mb-0" role="alert">
          <p className="mb-2">{error}</p>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={onRetry}>
            Повторить
          </button>
        </div>
      )}

      {isEmpty && (
        <p className="text-body-secondary mt-3 mb-0" role="status">
          По этому артикулу ничего не найдено.
        </p>
      )}
    </form>
  );
};
