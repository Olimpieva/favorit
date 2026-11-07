export const SortableHeading = ({ field, sort, onSort, icon, children }) => {
  const direction = sort.field === field ? sort.direction : "none";

  const arrow = {
    none: "bi-arrow-down-up",
    ascending: "bi-arrow-up",
    descending: "bi-arrow-down",
  }[direction];

  return (
    <th scope="col" className="text-end text-body-secondary fw-medium" aria-sort={direction}>
      <button
        type="button"
        className="border-0 bg-transparent text-body-secondary p-0 text-nowrap"
        title={direction === "ascending" ? "Сортировать по убыванию" : "Сортировать по возрастанию"}
        onClick={event => {
          event.stopPropagation();
          onSort(field);
        }}
      >
        <i className={`bi ${icon} me-2`} aria-hidden="true" />
        {children}
        <i className={`bi ${arrow} ms-2`} aria-hidden="true" />
      </button>
    </th>
  );
};
