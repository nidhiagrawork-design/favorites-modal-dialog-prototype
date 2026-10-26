// STAND-IN for src/components/shell/LeftNav.tsx (see ./README.md)
// Structure traced to Code Connect "Left bar/IES (consolidated)" (node 13329:118160):
// top group (Create, Bookmarks, Home[active], Feed+badge, Reports, My apps),
// PINNED section (Accounting, Expenses, Sales), Customize pinned to bottom.
import type { ReactElement } from "react";
import { NumericBadge } from "./NumericBadge";
import {
  PlusIcon,
  BookmarkIcon,
  HomeIcon,
  FeedIcon,
  ChartLineIcon,
  DotsNineIcon,
  SlidersVIcon,
  BookmarkCircleIcon,
  StairStepCircleIcon,
  ChevronCircleIcon,
} from "./icons";
import "./LeftNav.css";

type NavItem = {
  label: string;
  icon: ReactElement;
  badge?: string;
  active?: boolean;
};

const topGroup: NavItem[] = [
  { label: "Create", icon: <PlusIcon /> },
  { label: "Bookmarks", icon: <BookmarkIcon /> },
  { label: "Home", icon: <HomeIcon />, active: true },
  { label: "Feed", icon: <FeedIcon />, badge: "9+" },
  { label: "Reports", icon: <ChartLineIcon /> },
  { label: "My apps", icon: <DotsNineIcon /> },
];

const pinnedGroup: NavItem[] = [
  { label: "Accounting", icon: <BookmarkCircleIcon /> },
  { label: "Expenses", icon: <StairStepCircleIcon /> },
  { label: "Sales", icon: <ChevronCircleIcon /> },
];

function LeftNavButton({ item }: { item: NavItem }) {
  return (
    <button type="button" className={`left-nav__item${item.active ? " left-nav__item--active" : ""}`}>
      <span className="left-nav__icon-slot">
        {item.icon}
        {item.badge && <NumericBadge text={item.badge} status="Default" />}
      </span>
      <span className="left-nav__label">{item.label}</span>
    </button>
  );
}

export function LeftNav() {
  return (
    <nav className="left-nav" data-component="LeftNav" aria-label="Primary">
      <div className="left-nav__group">
        {topGroup.map((item) => (
          <LeftNavButton key={item.label} item={item} />
        ))}
      </div>

      <div className="left-nav__group left-nav__group--pinned">
        <span className="left-nav__section-label">PINNED</span>
        {pinnedGroup.map((item) => (
          <LeftNavButton key={item.label} item={item} />
        ))}
      </div>

      <button type="button" className="left-nav__item left-nav__customize">
        <span className="left-nav__icon-slot">
          <SlidersVIcon />
        </span>
        <span className="left-nav__label">Customize</span>
      </button>
    </nav>
  );
}
