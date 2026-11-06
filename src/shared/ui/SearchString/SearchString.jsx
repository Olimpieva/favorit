import cn from "classnames";

export const SearchString = ({ value, onChange, onClear, label, icon, placeholder = "Поиск" }) => {
  return (
    <div className="search-string d-flex align-items-center gap-3 text-start bg-body-secondary border rounded-4 px-3">
      {icon && <i className={cn("bi text-body-secondary fs-5", icon)} aria-hidden="true" />}

      <label className="flex-grow-1 mb-0 py-2 min-w-0">
        {label && <span className="d-block small text-body-secondary lh-sm">{label}</span>}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-control text-start border-0 bg-transparent text-body fw-bold fs-5 lh-sm shadow-none px-0"
          aria-label={label || placeholder}
        />
      </label>

      {value && onClear && (
        <button
          type="button"
          className="btn btn-link text-body-secondary text-decoration-none p-0 lh-1"
          aria-label="Очистить"
          onClick={onClear}
        >
          <i className="bi bi-x-lg" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
