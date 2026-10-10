"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/lib/useGSAP";
import { HEADLINE_WORDS, STATS } from "@/lib/content";
import Stat from "@/components/Stat";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    (root) => {
      const q = gsap.utils.selector(root);
      const letters = q("[data-letter]");
      const stats = q("[data-stat]");
      const values = q("[data-stat-value]");
      const car = q("[data-car]")[0];
      const carInner = q("[data-car-inner]")[0];
      const headline = q("[data-headline]")[0];
      const statsRow = q("[data-stats]")[0];
      const hint = q("[data-hint]")[0];

      gsap.set(car, { xPercent: -50 });

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
          isMobile: "(max-width: 767px)",
        },
        (ctx) => {
          const { motion, isMobile } = ctx.conditions;

          if (!motion) {
            gsap.set([letters, stats, carInner, hint], { clearProps: "all" });
            return;
          }

          // 1. Page-load entrance (independent of scroll transforms).
          const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
          intro
            .from(letters, { yPercent: 60, opacity: 0, duration: 0.8, stagger: 0.035 })
            .from(stats, { y: 24, opacity: 0, duration: 0.6, stagger: 0.12 }, "-=0.45")
            .from(carInner, { y: 90, opacity: 0, scale: 0.94, duration: 1, ease: "power2.out" }, 0.2)
            .from(hint, { opacity: 0, duration: 0.6 }, "-=0.4");

          values.forEach((el) => {
            const target = Number(el.dataset.target);
            const counter = { n: 0 };
            intro.to(
              counter,
              {
                n: target,
                duration: 1.2,
                ease: "power1.out",
                onUpdate: () => {
                  el.textContent = Math.round(counter.n);
                },
              },
              0.7
            );
          });

          // 2. Scroll-driven animation: scrubbed, pinned, reversible.
          const scrollDistance = isMobile ? "+=120%" : "+=170%";
          const rise = isMobile ? -62 : -74;
          const endScale = isMobile ? 1.55 : 1.85;

          const scrollTl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: scrollDistance,
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          scrollTl
            .to(car, { yPercent: rise, scale: endScale, duration: 1 }, 0)
            .to(car, { rotation: -6, duration: 0.35, ease: "sine.inOut" }, 0)
            .to(car, { rotation: 5, duration: 0.4, ease: "sine.inOut" }, 0.35)
            .to(car, { rotation: 0, duration: 0.25, ease: "sine.inOut" }, 0.75)
            .to(headline, { letterSpacing: isMobile ? "0.35em" : "0.6em", opacity: 0.25, duration: 1 }, 0)
            .to(statsRow, { y: -40, opacity: 0, duration: 0.5 }, 0.15)
            .to(hint, { opacity: 0, duration: 0.15 }, 0);

          return () => {
            intro.kill();
          };
        }
      );

      return () => mm.revert();
    },
    heroRef
  );

  return (
    <section
      ref={heroRef}
      aria-label="Welcome to Itz Fizz"
      className="relative h-screen min-h-[620px] w-full overflow-hidden bg-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_85%,rgba(255,90,31,0.22),transparent_70%),radial-gradient(40%_30%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-5 pt-[9vh] sm:px-8">
        <h1
          data-headline
          aria-label={HEADLINE_WORDS.join(" ")}
          className="will-animate flex flex-wrap justify-center gap-x-[0.9em] font-display text-[clamp(1.6rem,6.2vw,4.6rem)] font-black leading-tight tracking-[0.28em] sm:tracking-[0.4em]"
        >
          {HEADLINE_WORDS.map((word) => (
            <span key={word} aria-hidden="true" className="inline-flex overflow-hidden pb-[0.1em]">
              {word.split("").map((char, index) => (
                <span key={`${word}-${index}`} data-letter className="will-animate inline-block">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div
          data-stats
          className="will-animate mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-8"
        >
          {STATS.map((stat) => (
            <Stat key={stat.id} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      <div
        data-car
        className="pointer-events-none absolute bottom-[-14vh] left-1/2 z-20 h-[62vh] min-h-[320px] max-h-[620px] aspect-[240/520] origin-center will-animate"
      >
        <div data-car-inner className="relative h-full w-full will-animate">
          <Image
            src="/car.svg"
            alt="Top view of an orange sports car"
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 40vw, 280px"
            className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      <p
        data-hint
        className="will-animate absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-mist"
      >
        Scroll
      </p>
    </section>
  );
}
