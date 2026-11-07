const formatter = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Moscow",
});

export const formatDate = value => {
  const date = new Date(value || NaN);
  return Number.isNaN(date.getTime()) ? "—" : formatter.format(date);
};
