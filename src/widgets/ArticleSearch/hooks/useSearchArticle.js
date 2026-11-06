import { useEffect } from "react";
import { useDebounce } from "@/shared/hooks";
import { useDispatch, useSelector } from "react-redux";
import { resetSearch, setArticle } from "@/store/search/search.slice";
import { selectSearchArticle } from "@/store/search/search.selectors";
import { useGetPartsByArticleQuery } from "@/api/parts/parts.api";

export const useSearchArticle = () => {
  const dispatch = useDispatch();

  const article = useSelector(selectSearchArticle);

  const { currentData, isFetching, isSuccess, isError, error } = useGetPartsByArticleQuery(
    article,
    {
      skip: !article,
    },
  );

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
    loading: isFetching,
    error: isError ? error?.message : null,
    isEmpty: !isFetching && isSuccess && currentData?.length === 0,
  };
};
