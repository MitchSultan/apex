export const schoolModels = [
  {
    name: "STEM Club Partner",
    description: "A term-based enrichment offer with curriculum-linked sessions and hazard awareness workshops.",
    price: "[KES X] / term",
  },
  {
    name: "School Day Pilot",
    description: "A student experience day with parent consent and a report back to the school leadership team.",
    price: "[KES X] / cohort",
  },
  {
    name: "School Sports & Recreation",
    description: "A structured extracurricular programme with progression badges and teacher engagement.",
    price: "[KES X] / term",
  },
  {
    name: "CSR & Bursary Sponsor",
    description: "A community impact pathway that lets sponsors fund learner access and school outreach.",
    price: "[KES X] / learner",
  },
] as const;

export const schoolObjections = [
  {
    objection: "The board will see it as risky.",
    answer:
      "We present a clear risk assessment, safeguarding policy, insurers, and emergency plan so the board sees the controls before the thrill.",
  },
  {
    objection: "Trip approvals are a headache.",
    answer:
      "We provide a written approval pack and guidance on the school trip process so teachers can move quickly without guesswork.",
  },
  {
    objection: "Parents won't pay.",
    answer:
      "We provide M-Pesa instalments, bursaries and sponsor pathways so uptake can happen without cost barriers.",
  },
] as const;

export const schoolPathways = [
  "STEM and sports science",
  "Road safety and car control",
  "Physical education and discipline",
  "Career exploration in motorsport and engineering",
] as const;
