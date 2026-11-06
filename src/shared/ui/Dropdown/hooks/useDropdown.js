import { useEffect, useRef, useState } from "react";

export const useDropdown = (items, onSelect) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(null);

  const rootRef = useRef(null);
  const toggleRef = useRef(null);

  const selectedItem = items.includes(selection) ? selection : null;

  const toggle = () => setOpen(current => !current);

  const selectItem = item => {
    setSelection(item);
    setOpen(false);
    toggleRef.current?.focus();
    onSelect(item);
  };

  useEffect(() => {
    if (!open) return;

    const onPointerDown = event => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return { open, selectedItem, rootRef, toggleRef, toggle, selectItem };
};
