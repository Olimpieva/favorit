import { minPrice } from "../PartDetails.utils";

export const usePartDetails = part => {
  const offers = part.warehouses ?? [];
  const inStock = Number(part.count) > 0;
  const availableOffers = offers.filter(offer => Number(offer.stock) > 0);
  const price = minPrice(
    (availableOffers.length ? availableOffers : offers).map(offer => offer.price),
  );
  return {
    inStock,
    price,
    offers,
  };
};
