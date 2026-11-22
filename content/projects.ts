import type { Project, ProjectCategory } from "./types";

export const categoryLabels: Record<ProjectCategory, string> = {
  electronics: "Electronics & Control",
  software: "Software",
};

/**
 * Order matters: featured projects appear in this order on the home page.
 * Anything listed under `todo` is information only you can supply — it is never shown on the site.
 */
export const projects: Project[] = [
  // ── Featured ──────────────────────────────────────────────────────────────
  {
    slug: "smart-health-monitor",
    title: "Smart Health Monitoring System",
    category: "electronics",
    featured: true,
    summary:
      "ESP8266-based vital-signs monitor on a custom PCB, measuring heart rate, SpO₂ and body temperature, validated against hospital devices.",
    tech: ["ESP8266", "MAX30102", "MLX90614", "Custom PCB", "Sensor calibration"],
    specs: [
      { label: "Controller", value: "ESP8266" },
      { label: "Sensors", value: "MAX30102 (pulse oximetry), MLX90614 (IR temperature)" },
      { label: "Hardware", value: "Custom PCB" },
      { label: "Grade", value: "A+" },
    ],
    problem:
      "Build a monitor for basic vital signs and show that its readings can be trusted, by testing them against reference medical equipment rather than assuming the sensor datasheets are enough.",
    whatIDid: [
      "Built the system around an ESP8266, a MAX30102 pulse-oximetry sensor and an MLX90614 infrared temperature sensor.",
      "Designed a custom PCB for the circuit.",
      "Calibrated the sensors and tested their accuracy against hospital reference devices.",
      "Analysed the measurement error statistically and wrote up the results as formal technical documentation.",
    ],
    results: ["Readings validated against hospital devices.", "Graded A+."],
    images: [],
    links: [],
    todo: [
      "Photos of the assembled board / enclosure and the PCB layout",
      "Validation numbers (e.g. mean error vs. reference device for HR, SpO₂, temperature)",
      "Year completed and course / module name",
      "Link to report or repo, if public",
    ],
  },
  {
    slug: "plc-industrial-automation",
    title: "PLC Industrial & Warehouse Automation",
    category: "electronics",
    featured: true,
    summary:
      "Ladder-logic control of sensors, actuators, lighting, HVAC, fire detection and rack occupancy for industrial and warehouse automation.",
    tech: ["PLC", "Ladder logic", "I/O simulation", "Process control"],
    specs: [
      { label: "Language", value: "Ladder logic" },
      { label: "Scope", value: "Sensors, actuators, lighting, HVAC, fire detection, rack occupancy" },
    ],
    problem:
      "Automate industrial and warehouse operating sequences with a PLC so that every input condition produces a predictable, safe output.",
    whatIDid: [
      "Wrote ladder-logic programs controlling sensors, actuators, lighting, HVAC, fire detection and rack occupancy.",
      "Simulated and tested I/O behaviour across operating conditions.",
      "Validated the control sequences in simulation.",
    ],
    images: [],
    links: [],
    todo: [
      "PLC brand / software used (e.g. Siemens TIA Portal, Allen-Bradley, Delta)",
      "Screenshots of the ladder logic and any HMI",
      "Results / outcome",
      "Year and course context",
    ],
  },
  {
    slug: "dental-lab-management-system",
    title: "Dental Laboratory Management System",
    category: "software",
    featured: true,
    summary:
      "Multi-portal React/PostgreSQL platform for a dental laboratory with case tracking, role-based access, QC checkpoints and audit trails.",
    tech: ["React", "PostgreSQL", "Role-based access", "Audit trails"],
    specs: [
      { label: "Frontend", value: "React" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Architecture", value: "Multiple role-based portals" },
    ],
    problem:
      "Run a dental laboratory's work through one system: separate portals for the people involved, quality control on the work produced, and a traceable history of every change.",
    whatIDid: [
      "Built a multi-portal web application in React backed by PostgreSQL.",
      "Implemented case tracking through the lab workflow, with role-based access per portal.",
      "Added quality-control checkpoints to the workflow.",
      "Added audit trails to record changes.",
    ],
    images: [],
    links: [],
    todo: [
      "Which portals exist (lab staff, clinics/dentists, admin?) and what each does",
      "Backend stack (Node/Express? ORM?) and hosting",
      "Screenshots of each portal",
      "Live link / repo, if public — and whether this is a client project",
      "Results (users, cases handled, time saved)",
    ],
  },
  {
    slug: "dc-motor-pid-control",
    title: "DC Motor Speed Control",
    category: "electronics",
    featured: true,
    summary:
      "Closed-loop DC motor speed control modelled in MATLAB/Simulink, comparing Ziegler–Nichols, Cohen–Coon and Tyreus–Luyben PID tuning.",
    tech: ["MATLAB", "Simulink", "PID", "Control systems"],
    specs: [
      { label: "Tools", value: "MATLAB, Simulink" },
      { label: "Tuning methods", value: "Ziegler–Nichols, Cohen–Coon, Tyreus–Luyben" },
    ],
    problem:
      "Choose PID gains for DC motor speed control. Different classical tuning rules give different gains, so the methods need to be compared on the same model.",
    whatIDid: [
      "Modelled a closed-loop DC motor speed control system in MATLAB/Simulink.",
      "Tuned the PID controller with the Ziegler–Nichols, Cohen–Coon and Tyreus–Luyben methods.",
      "Compared the step responses and analysed stability.",
    ],
    images: [],
    links: [],
    todo: [
      "Simulink block diagram and step-response plots for each tuning method",
      "Comparison numbers (overshoot, settling time, steady-state error per method)",
      "Which method you chose and why",
      "Year and course context",
    ],
  },

  // ── Electronics & Control ─────────────────────────────────────────────────
  {
    slug: "smart-home-and-robot",
    title: "Smart Home Automation & Obstacle-Avoidance Robot",
    category: "electronics",
    featured: false,
    summary:
      "Arduino smart home system and obstacle-avoidance robot using PIR, LDR, DHT11, flame and ultrasonic sensors, with servo and DC motor drivers.",
    tech: ["Arduino", "PIR / LDR / DHT11", "Ultrasonic", "Servo & DC motor drivers"],
    images: [],
    links: [],
    todo: ["Photos", "Year"],
  },
  {
    slug: "traffic-light-controller",
    title: "Traffic Light Controller",
    category: "electronics",
    featured: false,
    summary:
      "Dual-mode (automatic / manual) traffic light controller in digital logic, validated in simulation and laid out on a PCB.",
    tech: ["Digital logic", "PCB design", "Simulation"],
    images: [],
    links: [],
    todo: ["Schematic / PCB images", "Year"],
  },
  {
    slug: "cascading-notch-filters",
    title: "Cascading Notch Filters",
    category: "electronics",
    featured: false,
    summary:
      "Analogue notch filter stages for noise reduction, with measured frequency response checked against the design specification.",
    tech: ["Analogue circuits", "Filter design", "Frequency analysis"],
    images: [],
    links: [],
    todo: ["Target notch frequencies", "Frequency-response plot", "Year"],
  },
  {
    slug: "sludge-to-energy",
    title: "Sludge-to-Energy Feasibility Study",
    category: "electronics",
    featured: false,
    summary:
      "Feasibility study at WestPoint Home Bahrain evaluating drying, thermal conversion, and boiler/steam and turbine energy recovery for textile wastewater sludge.",
    tech: ["Feasibility study", "Energy recovery", "Industrial process"],
    images: [],
    links: [],
    todo: ["Conclusion / recommendation", "Whether any figures can be published"],
  },

  // ── Software ──────────────────────────────────────────────────────────────
  {
    slug: "harakat",
    title: "Harakat",
    category: "software",
    featured: false,
    summary:
      "Web and mobile sports booking platform with court scheduling, availability sync, venue admin and authentication.",
    tech: ["Web", "Mobile", "Scheduling", "Authentication"],
    images: [],
    links: [],
    todo: ["Stack", "Screenshots", "Live link / app store links", "Your role"],
  },
  {
    slug: "ai-operations-center",
    title: "AI Operations Center",
    category: "software",
    featured: false,
    summary:
      "Automation platform with JWT auth, REST job APIs, Docker and n8n workflows.",
    tech: ["Node.js", "MongoDB", "React", "JWT", "Docker", "n8n"],
    images: [],
    links: [],
    todo: ["What it operates / automates", "Screenshots", "Repo link"],
  },
  {
    slug: "fives-nexus",
    title: "Fives Nexus",
    category: "software",
    featured: false,
    summary:
      "Industrial maintenance dashboard built with Next.js, TypeScript and Recharts.",
    tech: ["Next.js", "TypeScript", "Recharts"],
    images: [],
    links: [],
    todo: ["What data it shows", "Screenshots", "Link / repo"],
  },
  {
    slug: "evently",
    title: "Evently",
    category: "software",
    featured: false,
    summary:
      "MERN event management platform with Google Maps integration for event locations and discovery.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Vite", "Google Maps API"],
    images: [],
    links: [],
    todo: ["Repo link", "Live link", "Screenshot"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
