export default function Stat({ value, label }) {
  return (
    <div data-stat className="will-animate text-center sm:text-left">
      <p className="font-display text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
        <span data-stat-value data-target={value}>
          {value}
        </span>
        <span className="text-accent">%</span>
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-mist sm:text-base">
        {label}
      </p>
    </div>
  );
}
