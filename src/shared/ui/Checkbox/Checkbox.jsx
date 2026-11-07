import cn from "classnames";

export const Checkbox = ({ label, checked, onChange, disabled, className, ...props }) => (
  <label className={cn("checkbox d-inline-flex align-items-center gap-2 mb-0", className)}>
    <input
      {...props}
      type="checkbox"
      className={cn("form-check-input flex-shrink-0 shadow-none mt-0", {
        "bg-primary border-primary": checked,
        "border-secondary": !checked,
      })}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
    />
    {label && <span>{label}</span>}
  </label>
);
