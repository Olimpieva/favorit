import { request } from "../api.utils.js";
import { errors } from "../api.errors.js";

export const searchParts = async (article, { brand, analogues = false, signal } = {}) => {
  const number = article.trim();

  if (!number) throw new Error("Введите артикул детали.");
  if (analogues && !brand) throw new Error("Выберите производителя для поиска аналогов.");

  const data = await request(
    { number, brand, analogues: analogues ? "on" : undefined },
    { signal },
  );

  if (data.goods != null && !Array.isArray(data.goods)) {
    throw new Error(errors[500]);
  }

  return data;
};
