const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatCurrency = value => {
  return Number.isNaN(value) ? "—" : formatter.format(value);
};
