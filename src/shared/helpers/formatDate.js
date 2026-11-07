const formatter = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  timeZone: "Europe/Moscow",
});

export const formatDate = value => {
  const date = new Date(value || NaN);
  return Number.isNaN(date.getTime()) ? "—" : formatter.format(date);
};
