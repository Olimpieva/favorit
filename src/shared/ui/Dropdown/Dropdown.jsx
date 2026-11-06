import cn from "classnames";
import { useDropdown } from "./hooks";

export const Dropdown = ({ label, placeholder, items, onSelect, renderItem, icon }) => {
  const { open, selectedItem, rootRef, toggleRef, toggle, selectItem } = useDropdown(items, onSelect);

  return (
    <div className="article-search w-100 mx-auto px-3 mt-3" ref={rootRef}>
      <div className="dropdown w-100">
        <button
          ref={toggleRef}
          type="button"
          className={cn(
            "app-dropdown__toggle d-flex align-items-center gap-3 w-100 text-start bg-body-secondary border rounded-4 px-3 py-0",
            { "border-primary": open },
          )}
          aria-expanded={open}
          onClick={toggle}
        >
          {icon && <i className={cn("text-body-secondary fs-5", icon)} aria-hidden="true" />}
          <span className="flex-grow-1 min-w-0 py-2">
            <span className="d-block small text-body-secondary lh-sm">{label}</span>
            <span
              className={cn("app-dropdown__value d-block fw-bold fs-5 text-truncate text-body", {
                "text-uppercase": selectedItem,
              })}
            >
              {selectedItem?.label || placeholder}
            </span>
          </span>
          <i
            className={cn(
              "bi flex-shrink-0 text-body-secondary",
              open ? "bi-chevron-up" : "bi-chevron-down",
            )}
            aria-hidden="true"
          />
        </button>

        <div
          className={cn("dropdown-menu w-100 p-0 mt-2 border-0 bg-transparent shadow-none", {
            show: open,
          })}
          data-bs-popper="static"
        >
          <div className="list-group app-dropdown__menu rounded-4 overflow-auto text-start">
            {items.map(item => (
              <button
                key={item.value}
                type="button"
                className={cn("list-group-item list-group-item-action text-start py-3", {
                  "active bg-primary border-primary text-black": item === selectedItem,
                  "bg-body-secondary text-body": item !== selectedItem,
                })}
                aria-pressed={item === selectedItem}
                onClick={() => selectItem(item)}
              >
                {renderItem ? renderItem(item) : item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
