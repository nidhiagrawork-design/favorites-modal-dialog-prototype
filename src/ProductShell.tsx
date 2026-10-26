// Reference: Figma fdshZi6XC9QY9zLdxOvzWP, node 13331-94144 ("Product shell")
import type { ReactNode } from "react";
import { FusionShellHeader } from "./design-system/FusionShell";
import { LeftNav } from "./design-system/LeftNav";
import "./ProductShell.css";

type ProductShellProps = {
  companySwitcherTrigger: ReactNode;
  children: ReactNode;
};

export function ProductShell({ companySwitcherTrigger, children }: ProductShellProps) {
  return (
    <div className="product-shell">
      <FusionShellHeader companySwitcherTrigger={companySwitcherTrigger} userInitial="J" />
      <LeftNav />
      <main className="product-shell__content">{children}</main>
    </div>
  );
}
