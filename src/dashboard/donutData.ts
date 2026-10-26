// Category legend + colors shared by the donut charts in the reference screenshot.
export type DonutSlice = {
  label: string;
  value: number;
  color: string;
};

// Colors chosen from the reference image's teal/navy/purple/pink/yellow/cyan palette.
export const categoryColors = {
  advertising: "#1a9c8c",
  rentals: "#1f3a6e",
  travel: "#7b3ff2",
  d: "#e0c93e",
  e: "#19b4d1",
  f: "#d81b8e",
};

export const incomeSlices: DonutSlice[] = [
  { label: "Advertising", value: 22, color: categoryColors.advertising },
  { label: "Rentals", value: 16, color: categoryColors.rentals },
  { label: "Travel", value: 14, color: categoryColors.travel },
  { label: "D", value: 12, color: categoryColors.d },
  { label: "E", value: 18, color: categoryColors.e },
  { label: "F", value: 18, color: categoryColors.f },
];

export const expenseSlices: DonutSlice[] = [
  { label: "Advertising", value: 20, color: categoryColors.advertising },
  { label: "Rentals", value: 24, color: categoryColors.rentals },
  { label: "Travel", value: 16, color: categoryColors.travel },
  { label: "D", value: 8, color: categoryColors.d },
  { label: "E", value: 14, color: categoryColors.e },
  { label: "F", value: 18, color: categoryColors.f },
];

export const apPaSlices: DonutSlice[] = [
  { label: "Advertising", value: 30, color: categoryColors.advertising },
  { label: "F", value: 20, color: categoryColors.f },
  { label: "E", value: 20, color: categoryColors.e },
  { label: "D", value: 15, color: categoryColors.d },
  { label: "Rentals", value: 15, color: categoryColors.rentals },
];
