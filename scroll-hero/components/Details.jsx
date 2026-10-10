import { DETAILS } from "@/lib/content";

export default function Details() {
  return (
    <section
      aria-labelledby="details-heading"
      className="relative bg-panel px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="details-heading"
          className="font-display text-3xl tracking-[0.12em] text-white sm:text-5xl"
        >
          HOW IT WORKS
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {DETAILS.map((item) => (
            <article key={item.title}>
              <h3 className="text-lg font-semibold text-accent">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-16 text-sm text-mist">
          Statistics shown are illustrative design content, not measured results.
        </p>
      </div>
    </section>
  );
}
