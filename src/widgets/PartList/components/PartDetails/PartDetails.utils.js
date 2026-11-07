export const minPrice = (prices = []) => {
  const validPrices = prices.map(Number).filter(price => Number.isFinite(price) && price > 0);

  if (!validPrices.length) return null;

  return Math.min(...validPrices);
};
