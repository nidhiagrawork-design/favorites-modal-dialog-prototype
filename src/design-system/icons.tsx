// STAND-IN icon set — see ./README.md
// Geometry pulled from Figma Code Connect icon asset names (durable icon set).
// Stroke uses currentColor so callers control color via CSS, matching the
// design system's icon token pattern (--color-icon-*).

type IconProps = { size?: number; className?: string };

export function ChevronDownIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="chevron-down">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckmarkIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="checkmark">
      <path d="M4 10.5L8 14.5L16 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SlidersVIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} data-icon="sliders-v">
      <line x1="6" y1="4" x2="6" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="9" r="2" fill="currentColor" />
      <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="15" r="2" fill="currentColor" />
      <line x1="18" y1="4" x2="18" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="7" r="2" fill="currentColor" />
    </svg>
  );
}

export function StarIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} data-icon="star">
      <path
        d="M12 3.5L14.47 9.11L20.5 9.77L15.9 13.83L17.27 20L12 16.77L6.73 20L8.1 13.83L3.5 9.77L9.53 9.11L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarFillIcon({ size = 24, className }: IconProps) {
  // Reference: Figma Q0HemoQpvXxl4pB3YA7VDZ "IDS - Foundations and tokens",
  // node 12671-43061 (".star-fill", 24px "icon" child, node 12671:43063) —
  // path copied verbatim from the downloaded asset, not redrawn.
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} data-icon="star-fill">
      <path d="M15.2324 7.5508L21.5107 8.9102L17.2305 13.6992L17.8779 20.0898L12 17.5L6.1221 20.0898L6.7696 13.6992L2.4893 8.9102L8.7676 7.5508L12 2L15.2324 7.5508Z" />
    </svg>
  );
}

// Path geometry below (notification-thin, settings-thin, circle-question-thin)
// is copied verbatim from the downloaded Figma assets for node 13401-575703's
// Right Section icons, with fill swapped to currentColor so callers control
// color via CSS instead of the baked-in #21262A.
export function NotificationIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="notification-thin">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.66667C10.4602 1.66667 10.8333 2.03977 10.8333 2.5V2.56022C13.6602 2.96465 15.8333 5.39466 15.8333 8.33333V12.4845C15.8333 12.4943 15.8361 12.5041 15.8415 12.5122L16.665 13.7476C17.2095 14.5643 17.5 15.524 17.5 16.5055L17.4951 16.6073C17.4442 17.1087 17.0204 17.5 16.5055 17.5H11.4421C11.1537 17.9977 10.6166 18.3333 10 18.3333C9.38342 18.3333 8.84628 17.9977 8.55794 17.5H3.49447C2.97958 17.5 2.55583 17.1088 2.50488 16.6073L2.5 16.5055C2.5 15.5853 2.75515 14.6842 3.23568 13.9022L3.33496 13.7476L4.15853 12.5122C4.16384 12.5041 4.16666 12.4943 4.16667 12.4845V8.33333C4.16667 5.39467 6.33983 2.96465 9.16667 2.56022V2.5C9.16667 2.03977 9.53975 1.66667 10 1.66667ZM10 3.75C7.46869 3.75 5.41667 5.80202 5.41667 8.33333V12.4845C5.41666 12.741 5.34076 12.9921 5.19857 13.2056L4.375 14.4409C4.01484 14.9813 3.80333 15.6051 3.75895 16.25H16.241C16.1966 15.6051 15.9852 14.9813 15.625 14.4409L14.8014 13.2056C14.6593 12.9922 14.5833 12.7411 14.5833 12.4845V8.33333C14.5833 5.80202 12.5313 3.75 10 3.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SettingsIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="settings-thin">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99989 6.66667C11.8408 6.66667 13.3332 8.15905 13.3332 10C13.3332 11.8409 11.8408 13.3333 9.99989 13.3333C8.15899 13.3333 6.66656 11.8409 6.66656 10C6.66656 8.15909 8.15899 6.66673 9.99989 6.66667ZM9.99989 7.91667C8.84935 7.91673 7.91656 8.84944 7.91656 10C7.91656 11.1506 8.84935 12.0833 9.99989 12.0833C11.1505 12.0833 12.0832 11.1506 12.0832 10C12.0832 8.84941 11.1505 7.91667 9.99989 7.91667Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8332 1.66667C11.7536 1.66684 12.4999 2.41296 12.4999 3.33333V3.81592C13.0743 4.04835 13.609 4.35826 14.0909 4.73307L14.5084 4.493C15.3054 4.03292 16.3251 4.30639 16.7854 5.10335L17.6187 6.54704C18.0783 7.34405 17.8052 8.36311 17.0084 8.82324L16.6015 9.05762C16.6451 9.3657 16.6698 9.68069 16.6698 10.0008L16.6617 10.3434C16.652 10.5348 16.6327 10.7239 16.6071 10.9106L17.0084 11.1426C17.8053 11.6029 18.0781 12.6225 17.6179 13.4196L16.7846 14.8625C16.3243 15.6592 15.3053 15.9327 14.5084 15.4728L14.1161 15.2466C13.6273 15.6305 13.084 15.9475 12.4991 16.1841V16.6325C12.4989 17.5528 11.7528 18.2992 10.8324 18.2992H9.16574C8.2458 18.2987 7.49925 17.5525 7.49908 16.6325V16.1833C6.91428 15.9464 6.37063 15.6299 5.88205 15.2458L5.49061 15.472C4.69362 15.9319 3.67466 15.6592 3.21441 14.8625L2.38108 13.4188C1.92128 12.6218 2.19388 11.602 2.99061 11.1418L3.39263 10.909C3.36726 10.7228 3.34859 10.5342 3.33892 10.3434L3.32997 10.0008C3.32997 9.68046 3.35384 9.36511 3.39751 9.0568L2.99143 8.82243C2.19462 8.36216 1.92113 7.34323 2.38108 6.54622L3.21441 5.10254C3.6747 4.30581 4.69446 4.0331 5.49143 4.493L5.90809 4.73307C6.39009 4.35806 6.92529 4.04849 7.49989 3.81592V3.33333C7.49989 2.413 8.24628 1.6669 9.16656 1.66667H10.8332ZM9.16656 2.91667C8.93664 2.9169 8.74989 3.10336 8.74989 3.33333V3.90055C8.74989 4.38362 8.41296 4.79385 7.96538 4.97559C7.50547 5.16234 7.0692 5.41362 6.67714 5.71859C6.29711 6.01422 5.77497 6.10004 5.35796 5.85937L4.86643 5.57536C4.6673 5.46062 4.41185 5.52861 4.29677 5.72754L3.46343 7.17122C3.34873 7.37035 3.41751 7.62499 3.61643 7.74007L4.09657 8.01758C4.5151 8.25961 4.70136 8.75708 4.63368 9.23584C4.56343 9.73289 4.56274 10.2407 4.63042 10.7381C4.69526 11.215 4.50834 11.7091 4.09169 11.9499L3.61561 12.2249C3.41696 12.3401 3.34886 12.5948 3.46343 12.7938L4.29677 14.2375C4.4118 14.4364 4.66647 14.5043 4.86561 14.3896L5.35389 14.1081C5.76274 13.8721 6.27214 13.9494 6.6397 14.2456C6.84151 14.4082 7.05403 14.5576 7.28179 14.6899L7.49908 14.8096C7.65014 14.8883 7.80551 14.96 7.96457 15.0244C8.41228 15.2057 8.74908 15.6156 8.74908 16.0986V16.6325C8.74925 16.8621 8.93616 17.0487 9.16574 17.0492H10.8324C11.0624 17.0492 11.2489 16.8625 11.2491 16.6325V16.0994C11.2491 15.6163 11.5866 15.2066 12.0344 15.0252C12.1932 14.9609 12.3482 14.8889 12.4991 14.8104L12.7172 14.6899C12.9355 14.5632 13.1451 14.4209 13.3438 14.2651C13.7245 13.9667 14.249 13.88 14.6679 14.1219L15.1334 14.3905C15.3324 14.5051 15.5871 14.4363 15.7022 14.2375L16.5355 12.7946C16.6506 12.5954 16.5825 12.34 16.3834 12.2249L15.9089 11.9507C15.492 11.71 15.3046 11.2159 15.3694 10.7389C15.437 10.2415 15.4364 9.73369 15.3661 9.23665C15.2984 8.75797 15.4847 8.26038 15.9032 8.01839L16.3834 7.74089C16.5825 7.6259 16.6502 7.37125 16.5355 7.17204L15.7022 5.72835C15.5871 5.52926 15.3326 5.46116 15.1334 5.57617L14.6426 5.85937C14.2255 6.10026 13.7037 6.01509 13.3235 5.7194C12.931 5.41419 12.4982 5.16344 12.0344 4.97559C11.5868 4.7942 11.2499 4.38434 11.2499 3.90137V3.33333C11.2499 3.10332 11.0632 2.91684 10.8332 2.91667H9.16656Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HelpIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="circle-question-thin">
      <path
        d="M10 12.9167C10.3452 12.9167 10.625 13.1965 10.625 13.5417C10.625 13.8868 10.3452 14.1667 10 14.1667C9.65483 14.1667 9.375 13.8868 9.375 13.5417C9.375 13.1965 9.65483 12.9167 10 12.9167Z"
        fill="currentColor"
      />
      <path
        d="M10 6.04167C11.2657 6.04167 12.2917 7.06768 12.2917 8.33333C12.2917 9.20157 11.8085 9.95598 11.0994 10.3442C10.9401 10.4315 10.808 10.5328 10.7227 10.6323C10.6402 10.7285 10.625 10.7934 10.625 10.8333V11.6667C10.625 12.0118 10.3452 12.2917 10 12.2917C9.65483 12.2917 9.375 12.0118 9.375 11.6667V10.8333C9.375 10.4132 9.55777 10.0704 9.77376 9.81852C9.9871 9.56986 10.2545 9.3818 10.4989 9.24805C10.8236 9.07029 11.0417 8.72682 11.0417 8.33333C11.0417 7.75803 10.5753 7.29167 10 7.29167C9.42467 7.29167 8.95833 7.75803 8.95833 8.33333C8.95833 8.6785 8.6785 8.95833 8.33333 8.95833C7.98816 8.95833 7.70833 8.6785 7.70833 8.33333C7.70833 7.06768 8.73433 6.04167 10 6.04167Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.66667C14.6023 1.66667 18.3333 5.39762 18.3333 10C18.3333 14.6023 14.6023 18.3333 10 18.3333C5.39762 18.3333 1.66667 14.6023 1.66667 10C1.66667 5.39762 5.39762 1.66667 10 1.66667ZM10 2.91667C6.08798 2.91667 2.91667 6.08798 2.91667 10C2.91667 13.912 6.08798 17.0833 10 17.0833C13.912 17.0833 17.0833 13.912 17.0833 10C17.0833 6.08798 13.912 2.91667 10 2.91667Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SearchIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className} data-icon="search">
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="12.2" y1="12.2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function PlusIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="circle-plus-thin">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 6.5v7M6.5 10h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function BookmarkIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="bookmark-thin">
      <path d="M6 3.5h8a.5.5 0 0 1 .5.5v12.3l-4.5-2.7-4.5 2.7V4a.5.5 0 0 1 .5-.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="home-thin">
      <path d="M3.5 9.5 10 4l6.5 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 8.5v7.2h9V8.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function FeedIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="devices-thin">
      <line x1="4" y1="5.5" x2="10.5" y2="5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="4" y="7.5" width="9" height="6" rx="0.8" stroke="currentColor" strokeWidth="1.3" />
      <line x1="4" y1="15.5" x2="10.5" y2="15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function ChartLineIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="chart-line-thin">
      <path d="M3.5 16.5h13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M4 14 8 9l3 3 5-6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DotsNineIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className} data-icon="dots-nine-thin">
      {[4, 10, 16].flatMap((cx) => [4, 10, 16].map((cy) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.3" />))}
    </svg>
  );
}

export function BookmarkCircleIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="bookmark-circle">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 7h4v5.5l-2-1.3-2 1.3V7Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function StairStepCircleIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="stair-step-circle">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 13h1.7v-1.7H10V9.7h1.3V8H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronCircleIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="chevron-circle">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8.5 6.7L11.8 10L8.5 13.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="chevron-right">
      <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DotsThreeVerticalIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" className={className} data-icon="dots-three-vertical">
      <circle cx="10" cy="4.5" r="1.4" />
      <circle cx="10" cy="10" r="1.4" />
      <circle cx="10" cy="15.5" r="1.4" />
    </svg>
  );
}

export function FilterIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="filter">
      <path d="M3 4.5h14L11 11v5l-2 1.2v-6.2L3 4.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function EyeOffIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="eye-off">
      <path
        d="M3 3l14 14M8.2 8.3a2.5 2.5 0 0 0 3.5 3.5M6 5.6C4.2 6.7 3 8.3 2.5 10c1.3 3.4 4.4 5.5 7.5 5.5 1.2 0 2.3-.3 3.4-.9M9.3 4.6c.2 0 .5 0 .7 0 3.1 0 6.2 2.1 7.5 5.4-.4 1-1 2-1.8 2.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleSparkleIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="circle-sparkle">
      <circle cx="10" cy="10" r="8" fill="currentColor" />
      <path d="M10 5.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" fill="white" />
    </svg>
  );
}

export function ChecklistIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} data-icon="checklist">
      <rect x="4" y="3" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.5 7.5l1 1 2-2M6.5 12.5l1 1 2-2M11 8h3M11 13h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PropellerIcon({ size = 20, className }: IconProps) {
  // Path copied verbatim from the downloaded Figma asset for the Intuit
  // Intelligence Propeller icon (node 13401-575706;44639:5389;...;67559:7187).
  return (
    <svg width={size} height={size * 1.0102} viewBox="0 0 20 20.2036" fill="none" className={className} data-icon="intuit-intelligence-propeller">
      <path
        d="M10 8.27832L16.208 2.06738L17.9336 3.79297L12.957 8.77051H20V11.2129H12.9336L17.9336 16.2148L16.208 17.9404L11.2256 12.9551V20H8.78418V12.9375L3.78418 17.9404L2.05859 16.2148L7.0498 11.2207H0V8.77832H7.0498L2.05859 3.78516L3.78418 2.05859L10 8.27832Z"
        fill="currentColor"
      />
      <path
        d="M10 0C11.1504 0.000219526 12.083 0.933046 12.083 2.08398C12.083 3.23492 11.1504 4.16775 10 4.16797C8.84946 4.16797 7.91602 3.23505 7.91602 2.08398C7.91602 0.932911 8.84945 0 10 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
