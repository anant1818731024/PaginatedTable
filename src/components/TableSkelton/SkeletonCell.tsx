// SkeletonCell.tsx
export function SkeletonCell({ height = 16 }: { height?: number }) {
  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 100 ${height}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="g">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="50%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>
      </defs>

      <rect
        x="0"
        y="0"
        width="100"
        height={height}
        rx="6"
        fill="url(#g)"
      >
        <animate
          attributeName="x"
          from="-100"
          to="100"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}
