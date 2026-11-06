const pluralRules = new Intl.PluralRules("ru");

// Формы слова для 1, 2 и 5: ["предложение", "предложения", "предложений"].
export const pluralize = (count, [one, few, many]) => {
  const form = pluralRules.select(count);
  if (form === "one") return one;
  if (form === "few") return few;
  return many;
};
