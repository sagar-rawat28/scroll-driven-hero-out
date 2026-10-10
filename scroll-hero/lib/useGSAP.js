"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

/**
 * Runs a GSAP setup function scoped to a container ref and reverts
 * every tween and ScrollTrigger it created when the component unmounts.
 * The setup function may return a cleanup callback.
 */
export function useGSAP(setup, scopeRef) {
  useLayoutEffect(() => {
    const root = scopeRef.current;
    if (!root) return undefined;

    let cleanup;
    const ctx = gsap.context(() => {
      cleanup = setup(root);
    }, root);

    return () => {
      if (typeof cleanup === "function") cleanup();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
