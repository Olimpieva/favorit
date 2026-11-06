import { useEffect } from "react";
import { useDebounce } from "../../../shared/hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartsByArticle, resetBrands } from "../../../store/brands/brands.actions";
import { selectBrandsState } from "../../../store/brands/brands.selectors";

export const useSearchArticle = () => {
  const dispatch = useDispatch();
  const { loading, loaded, error, brands } = useSelector(selectBrandsState);

  const { value, setValue, debouncedValue } = useDebounce();

  const onChange = event => setValue(event.target.value);

  const onClear = () => setValue("");

  useEffect(() => {
    const article = debouncedValue.trim();

    if (!article || value !== debouncedValue) {
      dispatch(resetBrands());
      return;
    }

    const promise = dispatch(fetchPartsByArticle(article));
    return () => promise.abort();
  }, [dispatch, debouncedValue, value]);

  return {
    value,
    setValue,
    onChange,
    onClear,
    loading,
    error,
    isEmpty: loaded && brands.length === 0,
  };
};
