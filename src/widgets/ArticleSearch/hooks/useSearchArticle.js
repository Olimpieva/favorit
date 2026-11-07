import { useEffect } from "react";
import { useDebounce } from "@/shared/hooks";
import { useDispatch, useSelector } from "react-redux";
import { resetSearch, setArticle, selectSearchArticle } from "@/store/search";
import { selectBrands } from "@/store/parts";
import { useGetPartsByArticleQuery } from "@/api/parts/parts.api";

export const useSearchArticle = () => {
  const dispatch = useDispatch();

  const article = useSelector(selectSearchArticle);
  const brands = useSelector(selectBrands);

  const { isFetching, isSuccess, isError, error, refetch } = useGetPartsByArticleQuery(article, {
    skip: !article,
  });

  const { value, setValue, debouncedValue } = useDebounce();

  const onChange = event => {
    const nextValue = event.target.value;
    setValue(nextValue);
    if (!nextValue.trim()) dispatch(resetSearch());
  };

  const onClear = () => {
    setValue("");
    dispatch(resetSearch());
  };

  useEffect(() => {
    if (value !== debouncedValue) return;

    const nextArticle = debouncedValue.trim();

    if (nextArticle.length < 2) {
      dispatch(resetSearch());
      return;
    }

    dispatch(setArticle(nextArticle));
  }, [dispatch, debouncedValue, value]);

  return {
    value,
    onChange,
    onClear,
    onRetry: refetch,
    loading: isFetching,
    error: isError ? error?.message : null,
    isEmpty: Boolean(article) && !isFetching && isSuccess && !brands.length,
  };
};
