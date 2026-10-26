// Reference: Figma fdshZi6XC9QY9zLdxOvzWP, "App Carousel/IAS" (node 14310-211713)
// Rebuilt directly from get_design_context's markup/asset list — every chip
// icon below is the actual downloaded Figma asset (src/assets/carousel/*.svg),
// not a hand-drawn approximation. Code Connect resolves the trailing control
// to @ids-ts/icon-control's IconControl (label, size="small", shape="square")
// wrapping a chevron-right icon — reproduced as a stand-in (see
// design-system/README.md) since that package isn't reachable from this repo.
import { useRef } from "react";
import { ChevronRightIcon } from "../design-system/icons";
import imgWork from "../assets/carousel/work.svg";
import imgClientInsights from "../assets/carousel/client-insights.svg";
import imgBooksClose from "../assets/carousel/books-close.svg";
import imgCustomerHub from "../assets/carousel/customer-hub.svg";
import imgTeam from "../assets/carousel/team.svg";
import imgProAdvisor from "../assets/carousel/proadvisor.svg";
import imgAccounting from "../assets/carousel/accounting.svg";
import imgExpenses from "../assets/carousel/expenses.svg";
import imgProjectManagement from "../assets/carousel/project-management.svg";
import imgInventory from "../assets/carousel/inventory.svg";
import imgSalesTax from "../assets/carousel/sales-tax.svg";
import imgBusinessTax from "../assets/carousel/business-tax.svg";
import imgLending from "../assets/carousel/lending.svg";
import "./AppCarousel.css";

type AppChip = {
  label: string;
  icon: string;
};

// Chip order and labels copied verbatim from the Figma node's child list.
const chips: AppChip[] = [
  { label: "Work", icon: imgWork },
  { label: "Client Insights", icon: imgClientInsights },
  { label: "Books close", icon: imgBooksClose },
  { label: "Clients", icon: imgCustomerHub },
  { label: "Team", icon: imgTeam },
  { label: "ProAdvisor", icon: imgProAdvisor },
  { label: "Accounting", icon: imgAccounting },
  { label: "Expenses & Pay Bills", icon: imgExpenses },
  { label: "Project Management", icon: imgProjectManagement },
  { label: "Inventory", icon: imgInventory },
  { label: "Sales Tax", icon: imgSalesTax },
  { label: "Business Tax", icon: imgBusinessTax },
  { label: "Lending", icon: imgLending },
];

export function AppCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByChip = () => {
    trackRef.current?.scrollBy({ left: 220, behavior: "smooth" });
  };

  return (
    <div className="app-carousel" data-component="AppCarousel/IAS">
      <div className="app-carousel__track" ref={trackRef}>
        {chips.map((chip) => (
          <button type="button" key={chip.label} className="app-carousel__chip">
            <img src={chip.icon} alt="" width={32} height={32} className="app-carousel__chip-icon" />
            <span className="app-carousel__chip-label">{chip.label}</span>
          </button>
        ))}
        <div className="app-carousel__fade" aria-hidden />
      </div>
      <button type="button" className="app-carousel__nav" aria-label="See more apps" onClick={scrollByChip}>
        <ChevronRightIcon size={20} />
      </button>
    </div>
  );
}
