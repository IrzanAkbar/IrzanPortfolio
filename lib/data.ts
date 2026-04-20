export const projects = [
  {
    id: 1,
    title: "Abyssal Neural Network",
    description: "An AI-powered data visualization engine for analyzing underwater seismic shifts and predictive marine topography.",
    tags: ["Next.js", "PyTorch", "Three.js", "Framer Motion"],
    href: "#",
    status: "active" as const,
  },
  {
    id: 2,
    title: "SonarOS Dashboard",
    description: "A comprehensive real-time mission control interface for long-range autonomous underwater vehicle (AUV) telemetry.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Socket.io"],
    href: "#",
    status: "wip" as const,
  },
  {
    id: 3,
    title: "Biolume Engine",
    description: "A specialized physical-rendering tool for simulating bioluminescent light scatter in zero-visibility environments.",
    tags: ["Rust", "Wasm", "WebGL", "Vite"],
    href: "#",
    status: "archived" as const,
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    category: "Tools",
    items: ["Docker", "Kubernetes", "Git", "Figma"],
  },
];
