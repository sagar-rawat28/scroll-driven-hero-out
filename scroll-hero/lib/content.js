export const HEADLINE_WORDS = ["WELCOME", "ITZ", "FIZZ"];

export const STATS = [
  { id: "performance", value: 95, label: "Performance improvement" },
  { id: "interactions", value: 80, label: "Faster user interactions" },
  { id: "responsive", value: 100, label: "Responsive experience" },
];

export const DETAILS = [
  {
    title: "Scrubbed, not autoplayed",
    text: "The car's path is tied to scroll progress through a ScrollTrigger scrub, so it reverses naturally when you scroll back up.",
  },
  {
    title: "Transform-only motion",
    text: "Only x, y, scale, rotation and opacity are animated, which keeps work on the compositor and avoids layout thrash.",
  },
  {
    title: "Responsive by design",
    text: "gsap.matchMedia swaps scroll distance and travel values per breakpoint and honours reduced-motion preferences.",
  },
];
