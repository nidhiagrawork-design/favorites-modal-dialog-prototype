// STAND-IN for ids-web NumericBadge (see ./README.md)
// Prop shape matches Figma Code Connect: <NumericBadge text="9+" status="Default" />
import "./NumericBadge.css";

type NumericBadgeProps = {
  text: string;
  status?: "Default";
};

export function NumericBadge({ text }: NumericBadgeProps) {
  return (
    <span className="numeric-badge" data-component="NumericBadge">
      {text}
    </span>
  );
}
