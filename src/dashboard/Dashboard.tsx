import {
  ChevronRightIcon,
  DotsThreeVerticalIcon,
  FilterIcon,
  SlidersVIcon,
  EyeOffIcon,
  PlusIcon,
} from "../design-system/icons";
import { AppCarousel } from "./AppCarousel";
import { DonutChart } from "./DonutChart";
import { incomeSlices, expenseSlices, apPaSlices, categoryColors } from "./donutData";
import imgClientInsights from "../assets/feed/client-insights.svg";
import imgCustomerHub from "../assets/feed/customer-hub.svg";
import imgExpenses from "../assets/feed/expenses.svg";
import "./Dashboard.css";

// Icons: "Customer Hub" and "Expenses" are real named app icons from the
// GBSG App-icon library (fdshZi6XC9QY9zLdxOvzWP, node 4946-17494) and match
// the "Customer AI"/"Expenses AI" tiles exactly. There is no app icon named
// "Intercompany mappings" in that library — "Client Insights" is used here
// as the closest visual match (same sparkle-burst-in-circle silhouette as
// the reference); flagging this substitution rather than inventing an icon.
const feedCards = [
  {
    icon: <PlusIcon size={22} />,
    iconTone: "neutral" as const,
    title: "Add new company",
    body: "Add a new company to your IES contract in minutes.",
    cta: "Get started",
  },
  {
    icon: <img src={imgClientInsights} alt="" width={24} height={24} />,
    iconTone: "image" as const,
    title: "Intercompany mappings",
    body: "2 intercompany mappings are ready for your review.",
    cta: "Review all",
  },
  {
    icon: <img src={imgCustomerHub} alt="" width={24} height={24} />,
    iconTone: "image" as const,
    title: (
      <>
        Customer <span className="dashboard-card__ai-label">AI</span>
      </>
    ),
    body: "4 new leads from your connected sources are ready for your review an…",
    cta: "View all",
  },
  {
    icon: <img src={imgExpenses} alt="" width={24} height={24} />,
    iconTone: "image" as const,
    title: (
      <>
        Expenses <span className="dashboard-card__ai-label">AI</span>
      </>
    ),
    body: "$6,595.60 in new bills are ready for you to review and schedule payments",
    cta: "Review all",
  },
];

const legendEntries = [
  { label: "Advertising", color: categoryColors.advertising },
  { label: "Rentals", color: categoryColors.rentals },
  { label: "Travel", color: categoryColors.travel },
];

function DonutLegend({ extra }: { extra: number }) {
  return (
    <div className="dashboard-legend">
      {legendEntries.map((entry) => (
        <span key={entry.label} className="dashboard-legend__item">
          <span className="dashboard-legend__swatch" style={{ background: entry.color }} />
          {entry.label}
        </span>
      ))}
      <span className="dashboard-legend__more">+{extra}</span>
    </div>
  );
}

// Reference: Figma oFzaU8erKFMwWELFEXdFm5, "Widget REFRESH SINGLE LINE"
// (node 274-41801) — the bar is two adjacent solid + 30%-opacity segments
// (not a filled-vs-track progress bar): Income's solid portion is 228/316
// (~72%) of the bar width, Expenses' solid portion is 191/277 (~69%).
function BarStat({
  label,
  value,
  pct,
  solidColor,
  lightColor,
}: {
  label: string;
  value: string;
  pct: number;
  solidColor: string;
  lightColor: string;
}) {
  return (
    <div className="dashboard-barstat">
      <div className="dashboard-barstat__label">{label}</div>
      <div className="dashboard-barstat__value">{value}</div>
      <div className="dashboard-barstat__bar">
        <div className="dashboard-barstat__segment" style={{ width: `${pct}%`, background: solidColor }} />
        <div className="dashboard-barstat__segment" style={{ width: `${100 - pct}%`, background: lightColor }} />
      </div>
    </div>
  );
}

export function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard__greeting">Good morning!</h1>

      <AppCarousel />

      <section className="dashboard-section">
        <div className="dashboard-section__header">
          <h2 className="dashboard-section__title">Business Feed</h2>
          <a className="dashboard-section__link" href="#feed">
            View all <ChevronRightIcon size={16} />
          </a>
        </div>
        <div className="dashboard-feed">
          {feedCards.map((card, i) => (
            <article className="dashboard-card" key={i} data-component="SmartTileXSmall">
              <div className="dashboard-card__header">
                <span className={`dashboard-card__icon dashboard-card__icon--${card.iconTone}`}>{card.icon}</span>
                <h3 className="dashboard-card__title">{card.title}</h3>
                <button type="button" className="dashboard-card__menu" aria-label="More options">
                  <DotsThreeVerticalIcon />
                </button>
              </div>
              <div className="dashboard-card__body-wrap">
                <p className="dashboard-card__body">{card.body}</p>
                <a className="dashboard-card__cta" href="#action">
                  {card.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <div className="dashboard-section__header">
          <h2 className="dashboard-section__title">Multi-entity overview</h2>
          <div className="dashboard-section__tools">
            <button type="button" className="dashboard-icon-btn" aria-label="Filter">
              <FilterIcon />
            </button>
            <button type="button" className="dashboard-icon-btn" aria-label="Customize widgets">
              <SlidersVIcon size={18} />
            </button>
            <button type="button" className="dashboard-icon-btn" aria-label="Hide overview">
              <EyeOffIcon />
            </button>
          </div>
        </div>

        <div className="dashboard-grid">
          <article className="dashboard-tile dashboard-tile--pnl">
            <div className="dashboard-tile__header">
              <h3 className="dashboard-tile__title dashboard-tile__title--pnl">Profit and loss</h3>
              <button type="button" className="dashboard-tile__period">
                This month <ChevronRightIcon size={14} className="dashboard-tile__period-chevron" />
              </button>
            </div>
            <BarStat
              label="Income"
              value="$2,412,500.00"
              pct={72.15}
              solidColor="var(--color-spearmint-60)"
              lightColor="rgba(0, 183, 151, 0.3)"
            />
            <BarStat
              label="Expenses"
              value="$2,237,700.45"
              pct={68.95}
              solidColor="var(--color-blueberry-80)"
              lightColor="rgba(32, 94, 163, 0.3)"
            />
            <a className="dashboard-tile__footer-link dashboard-tile__footer-link--pnl" href="#report">
              See a full report
            </a>
            <button type="button" className="dashboard-tile__kebab" aria-label="More options">
              <DotsThreeVerticalIcon />
            </button>
          </article>

          <article className="dashboard-tile">
            <div className="dashboard-tile__header">
              <h3 className="dashboard-tile__title">Income</h3>
              <button type="button" className="dashboard-tile__period">
                This month <ChevronRightIcon size={14} className="dashboard-tile__period-chevron" />
              </button>
            </div>
            <div className="dashboard-tile__amount">$2,102,100.00</div>
            <div className="dashboard-tile__donut">
              <DonutChart slices={incomeSlices} />
            </div>
            <DonutLegend extra={3} />
            <a className="dashboard-tile__footer-link" href="#report">
              See a full report
            </a>
            <button type="button" className="dashboard-tile__kebab" aria-label="More options">
              <DotsThreeVerticalIcon />
            </button>
          </article>

          <article className="dashboard-tile">
            <div className="dashboard-tile__header">
              <h3 className="dashboard-tile__title">Expense</h3>
              <button type="button" className="dashboard-tile__period">
                This month <ChevronRightIcon size={14} className="dashboard-tile__period-chevron" />
              </button>
            </div>
            <div className="dashboard-tile__amount">$1,940,151.20</div>
            <div className="dashboard-tile__donut">
              <DonutChart slices={expenseSlices} />
            </div>
            <DonutLegend extra={3} />
            <a className="dashboard-tile__footer-link" href="#report">
              See a full report
            </a>
            <button type="button" className="dashboard-tile__kebab" aria-label="More options">
              <DotsThreeVerticalIcon />
            </button>
          </article>

          <article className="dashboard-tile">
            <div className="dashboard-tile__header">
              <h3 className="dashboard-tile__title">Accounts Payable</h3>
              <button type="button" className="dashboard-tile__period">
                This month <ChevronRightIcon size={14} className="dashboard-tile__period-chevron" />
              </button>
            </div>
            <div className="dashboard-tile__amount">$275,800.15</div>
            <div className="dashboard-tile__donut">
              <DonutChart slices={apPaSlices} />
            </div>
          </article>

          <article className="dashboard-tile">
            <div className="dashboard-tile__header">
              <h3 className="dashboard-tile__title">Accounts Receivable</h3>
              <button type="button" className="dashboard-tile__period">
                This month <ChevronRightIcon size={14} className="dashboard-tile__period-chevron" />
              </button>
            </div>
            <div className="dashboard-tile__amount">$410,550.60</div>
            <div className="dashboard-tile__donut">
              <DonutChart slices={apPaSlices} />
            </div>
          </article>

          <article className="dashboard-tile dashboard-tile--reports">
            <h3 className="dashboard-tile__title">Consolidated reports</h3>
            <ul className="dashboard-report-list">
              <li>
                <span>Profit &amp; loss</span>
                <button type="button" className="dashboard-icon-btn" aria-label="More options">
                  <DotsThreeVerticalIcon />
                </button>
              </li>
              <li>
                <span>Balance sheet</span>
                <button type="button" className="dashboard-icon-btn" aria-label="More options">
                  <DotsThreeVerticalIcon />
                </button>
              </li>
              <li>
                <span>Cash flow statement</span>
                <button type="button" className="dashboard-icon-btn" aria-label="More options">
                  <DotsThreeVerticalIcon />
                </button>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
