export const safetyPrinciples = [
  {
    title: "Welfare of the individual",
    description: "A learner's safety and wellbeing come before any lap, any lesson or any photo.",
  },
  {
    title: "Equality and inclusion",
    description: "Every learner is welcome, whatever their gender, background, disability, faith or ability to pay.",
  },
  {
    title: "Accountability",
    description: "Every adult at [Academy] is responsible for acting on a concern and documenting what happened.",
  },
  {
    title: "Confidentiality",
    description: "Concerns are shared only with people who need to know in order to protect a learner.",
  },
] as const;

export const safetyLayers = [
  "Venue and closed-course controls",
  "Vehicle readiness and low-speed caps",
  "Kit standards and briefing",
  "Instructor qualification and oversight",
  "Session rules and incident reporting",
  "Safeguarding policy and consent",
  "Emergency response and first aid",
] as const;

export const safetyMetrics = [
  { label: "Instructor ratio", value: "1:1" },
  { label: "Level 1 cap", value: "≤40 km/h" },
  { label: "Staff vetted", value: "100%" },
  { label: "First aid on site", value: "Yes" },
] as const;
