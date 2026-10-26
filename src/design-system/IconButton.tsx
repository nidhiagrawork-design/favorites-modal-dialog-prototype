// STAND-IN for components/icon-button/IconButton.tsx (see ./README.md)
// Prop shape matches Figma Code Connect: <IconButton variantSize="20" size="20" />
import type { ReactNode, MouseEventHandler } from "react";
import "./IconButton.css";

type IconButtonProps = {
  children: ReactNode;
  size?: "20" | "24";
  ariaLabel: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "on-dark" | "default";
  active?: boolean;
};

export function IconButton({ children, ariaLabel, onClick, variant = "default", active, size = "20" }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`icon-button icon-button--${variant} icon-button--size-${size}${active ? " icon-button--active" : ""}`}
      aria-label={ariaLabel}
      onClick={onClick}
      data-component="IconButton"
    >
      {children}
    </button>
  );
}
