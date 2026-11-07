"use client";

import { useEffect, useState } from "react";

export function HeroBackgroundVideo() {
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionAllowed(!preference.matches);

    const updatePreference = () => setMotionAllowed(!preference.matches);
    preference.addEventListener("change", updatePreference);

    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  if (!motionAllowed) {
    return null;
  }

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src="/videos/hero1.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
