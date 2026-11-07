const getSortValue = (offer, field) => {
  const value = offer[field];
  if (value == null || value === "") return null;

  const number = field === "price" ? Number(value) : new Date(value).getTime();
  return Number.isFinite(number) ? number : null;
};

export const sortOffers = (offers, { field, direction }) => {
  if (!field) return offers;

  return [...offers].sort((a, b) => {
    const first = getSortValue(a, field);
    const second = getSortValue(b, field);

    if (first === null) return second === null ? 0 : 1;
    if (second === null) return -1;

    return direction === "ascending" ? first - second : second - first;
  });
};
