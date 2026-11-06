import { useSearchArticle } from "./hooks";

export const ArticleSearch = () => {
  const { value, onChange, onClear, loading, error, isEmpty } = useSearchArticle();

  return (
    <form
      className="article-search w-100 mx-auto px-3 pt-4"
      onSubmit={event => event.preventDefault()}
    >
      <h1 className="h1 fw-bold text-body mb-2">Поиск запчастей по артикулу</h1>
      <p className="text-body-secondary mb-4">Введите артикул, затем выберите производителя</p>

      <div className="article-search__field d-flex align-items-center gap-3 text-start bg-body-secondary border rounded-4 px-3">
        <i className="bi bi-search text-body-secondary fs-5" aria-hidden="true" />
        <label className="flex-grow-1 min-w-0 mb-0 py-2">
          <span className="d-block small text-body-secondary lh-sm">Артикул детали</span>
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="article-search__input form-control text-start border-0 bg-transparent text-body fw-bold fs-5 shadow-none px-0"
            aria-label="Артикул детали"
          />
        </label>
        {value ? (
          <button
            type="button"
            className="btn btn-link text-body-secondary text-decoration-none p-0 lh-1"
            aria-label="Очистить"
            onClick={onClear}
          >
            <i className="bi bi-x-lg" />
          </button>
        ) : null}
      </div>

      {loading && (
        <div className="d-flex justify-content-center align-items-center gap-2 mt-3" role="status">
          <span className="spinner-border spinner-border-sm" aria-hidden="true" />
          Ищем производителей…
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3 mb-0" role="alert">
          {error}
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
