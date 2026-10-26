// STAND-IN for src/components/FusionShell/index.tsx (see ./README.md)
// Structure/props traced 1:1 to the Code Connect snippet for
// "Global header/IES (consolidated)" (node 13401:575698), Right Section
// exactly matching node 13401-575703 — Notifications, Settings, Help,
// avatar, Omni Access Point. No Checklist icon in this component.
import type { ReactNode } from "react";
import { IconButton } from "./IconButton";
import { NotificationIcon, SettingsIcon, HelpIcon, PropellerIcon } from "./icons";
import "./FusionShell.css";

type FusionShellProps = {
  companySwitcher?: boolean;
  logoDivider?: boolean;
  companySwitcherTrigger: ReactNode;
  userInitial: string;
};

export function FusionShellHeader({ companySwitcherTrigger, userInitial }: FusionShellProps) {
  return (
    <header className="fusion-shell-header" data-component="FusionShell/GlobalHeader">
      <div className="fusion-shell-header__left">
        <span className="fusion-shell-header__logo">
          INTUIT
          <span className="fusion-shell-header__logo-sub">Enterprise Suite</span>
        </span>
        <span className="fusion-shell-header__divider" aria-hidden />
        {companySwitcherTrigger}
      </div>
      <div className="fusion-shell-header__middle" />
      <div className="fusion-shell-header__right">
        <IconButton ariaLabel="Notifications" variant="on-dark">
          <NotificationIcon />
        </IconButton>
        <IconButton ariaLabel="Settings" variant="on-dark">
          <SettingsIcon />
        </IconButton>
        <IconButton ariaLabel="Help" variant="on-dark">
          <HelpIcon />
        </IconButton>
        <span className="fusion-shell-header__avatar">{userInitial}</span>
        <button type="button" className="fusion-shell-header__omni" aria-label="Intuit Intelligence">
          <PropellerIcon />
        </button>
      </div>
    </header>
  );
}
