import { useRef, useState, useEffect } from "react";

export const useDebounce = (delay = 500) => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutRef.current);
  }, [delay, value]);

  return {
    value,
    setValue,
    debouncedValue,
  };
};
