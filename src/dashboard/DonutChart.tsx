import type { DonutSlice } from "./donutData";

type DonutChartProps = {
  slices: DonutSlice[];
  size?: number;
};

const RADIUS = 42;
const STROKE = 16;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
// Fixed gap (in px of arc length) shown between adjacent slices, matching
// the reference design's separated-segment donut instead of a contiguous ring.
const SLICE_GAP = 3;

export function DonutChart({ slices, size = 140 }: DonutChartProps) {
  const total = slices.reduce((sum, s) => sum + s.value, 0);
  const gapCount = slices.length > 1 ? slices.length : 0;
  const drawableCircumference = CIRCUMFERENCE - gapCount * SLICE_GAP;
  let offset = 0;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Category breakdown donut chart">
      <g transform="rotate(-90 50 50)">
        {slices.map((slice) => {
          const fraction = slice.value / total;
          const dash = fraction * drawableCircumference;
          const gap = CIRCUMFERENCE - dash;
          const circle = (
            <circle
              key={slice.label}
              cx="50"
              cy="50"
              r={RADIUS}
              fill="none"
              stroke={slice.color}
              strokeWidth={STROKE}
              strokeLinecap="butt"
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-offset}
            />
          );
          offset += dash + SLICE_GAP;
          return circle;
        })}
      </g>
    </svg>
  );
}
