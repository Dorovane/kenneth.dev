export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CloudSync Dashboard",
    description:
      "Une plateforme de surveillance d'infrastructure cloud en temps reel avec des mesures en direct, des alertes automatisees et des visualisations intuitives. Construit avec React, Node.js et WebSocket pour des mises a jour en temps reel.",
    image: "../../img/calculatrice.jpeg",
    technologies: ["React", "TypeScript", "Node.js", "WebSocket", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "FinTrack Pro",
    description:
      "Une application complete de gestion des finances personnelles avec suivi des depenses, planification budgetaire et analyses financieres alimentees par IA. API GraphQL avec synchronisation en temps reel.",
    image: "../../img/pomodoro.png",
    technologies: ["React", "GraphQL", "NestJS", "MongoDB", "Tailwind CSS", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full-Stack",
  },
  {
    id: 3,
    title: "CodeCollab Hub",
    description:
      "Une plateforme collaborative de revision de code pour les equipes de developpement avec edition en temps reel, coloration syntaxique et appels video integres. Supporte plusieurs langages et frameworks.",
    image: "../../img/todolist.jpeg",
    technologies: ["React", "Express", "Socket.io", "Redis", "Bootstrap", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full-Stack",
  },
];
