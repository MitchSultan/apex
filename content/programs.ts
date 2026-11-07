export type Program = {
  slug: string;
  name: string;
  ageBand: string;
  duration: string;
  price: string;
  summary: string;
};

export const programs: Program[] = [
  {
    slug: "taster",
    name: "Taster Day",
    ageBand: "Ages 14–19",
    duration: "1 session",
    price: "[KES X]",
    summary: "A first look at closed-course car control, coach-led instruction and parent handoff.",
  },
  {
    slug: "level-1",
    name: "Beginner Drift Course – Level 1",
    ageBand: "Ages 14–19",
    duration: "6 weeks",
    price: "[KES X]",
    summary: "Build fundamentals in vehicle dynamics, safe inputs and low-speed car control.",
  },
  {
    slug: "holiday-camps",
    name: "Holiday Camps",
    ageBand: "Ages 14–19",
    duration: "5-day block",
    price: "[KES X]",
    summary: "High-energy learning blocks with progression badges, theory and practical vehicle coaching.",
  },
];
