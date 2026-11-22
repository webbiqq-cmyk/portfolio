import portrait from "@/assets/hasan.jpg";

export const site = {
  name: "Muhammad Hassan",
  shortName: "M. Hassan",
  url: "https://hasanportfolio.com",
  location: "Bahrain",
  nationality: "Bahraini",
  role: "Electronics Engineer",
  tagline: "Electronics engineer building industrial control and full-stack systems",
  description:
    "Muhammad Hassan — final-year Electronics Engineering student at Bahrain Polytechnic working across industrial automation, embedded systems and full-stack web software.",
  intro: [
    "I'm a final-year Electronics Engineering student at Bahrain Polytechnic, currently training as a junior electronics engineer on PLC-controlled textile machinery at WestPoint Home Bahrain.",
    "Before that I worked as a software developer at Leading Trading Est, building the company's e-commerce site and an internal CRM. I work on both ends of an industrial system: sensors, drives and control loops on one side; dashboards, databases and web applications on the other.",
  ],
  email: "hasnshahidd@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-hassan-3b5b5a349/",
  /** GitHub account(s), shown in contact + footer. */
  githubs: [{ label: "GitHub", handle: "HasannShd", href: "https://github.com/HasannShd" }],
  /** Source is a 1000×1250 JPEG; next/image serves AVIF/WebP at responsive sizes. */
  photo: {
    image: portrait,
    alt: "Portrait of Muhammad Hassan",
  },
  languages: [
    { name: "Urdu", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Arabic", level: "Basic" },
    { name: "Turkish", level: "Basic" },
  ],
} as const;
