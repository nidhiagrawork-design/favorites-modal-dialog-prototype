// STAND-IN for @ids-ts/text-field (see ./README.md)
// Prop shape matches Figma Code Connect:
// <TextField placeholder="Search for a company" addonBefore={...} size="medium" />
import type { ReactNode } from "react";
import "./TextField.css";

type TextFieldProps = {
  placeholder?: string;
  size?: "medium";
  addonBefore?: ReactNode;
  value: string;
  onChange: (value: string) => void;
};

export function TextField({ placeholder, addonBefore, value, onChange }: TextFieldProps) {
  return (
    <label className="text-field" data-component="TextField">
      {addonBefore && <span className="text-field__addon">{addonBefore}</span>}
      <input
        className="text-field__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
