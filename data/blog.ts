import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "arquitectura-microservicios-nodejs",
    title: "Arquitectura de Microservicios con Node.js y Docker",
    date: "15 Dic 2024",
    summary:
      "Exploración práctica de cómo diseñar e implementar una arquitectura de microservicios robusta usando Node.js, Docker y un API Gateway. Patrones clave, errores comunes y lecciones aprendidas en producción.",
    readTime: "8 min",
    tags: ["Node.js", "Docker", "Microservicios", "Backend"],
  },
  {
    id: "2",
    slug: "react-server-components-deep-dive",
    title: "React Server Components: El cambio de paradigma que necesitabas",
    date: "2 Nov 2024",
    summary:
      "Análisis profundo de los React Server Components y cómo transforman la manera en que pensamos el rendering. Casos de uso reales, comparativa con Client Components y cuándo usar cada uno.",
    readTime: "6 min",
    tags: ["React", "Next.js", "Performance", "Frontend"],
  },
  {
    id: "3",
    slug: "typescript-tipos-avanzados",
    title: "TypeScript Avanzado: Tipos que transforman tu código",
    date: "18 Oct 2024",
    summary:
      "Guía práctica sobre tipos avanzados en TypeScript: mapped types, conditional types, template literal types e infer. Con ejemplos reales que mejorarán tu type safety inmediatamente.",
    readTime: "10 min",
    tags: ["TypeScript", "JavaScript", "Tips"],
  },
  {
    id: "4",
    slug: "postgresql-performance-tuning",
    title: "PostgreSQL Performance: De 10s a 50ms en consultas complejas",
    date: "5 Sep 2024",
    summary:
      "Caso de estudio real sobre optimización de queries PostgreSQL. Análisis con EXPLAIN ANALYZE, estrategias de indexación, query planning y uso eficiente de CTEs y window functions.",
    readTime: "12 min",
    tags: ["PostgreSQL", "Performance", "Backend", "Base de datos"],
  },
  {
    id: "5",
    slug: "ci-cd-github-actions",
    title: "CI/CD Profesional con GitHub Actions desde cero",
    date: "20 Ago 2024",
    summary:
      "Construye pipelines de CI/CD robustos con GitHub Actions. Automatiza tests, linting, builds y deploys. Incluye estrategias de matrix testing, cache de dependencias y deploy a múltiples entornos.",
    readTime: "9 min",
    tags: ["DevOps", "GitHub Actions", "CI/CD", "Automatización"],
  },
  {
    id: "6",
    slug: "clean-architecture-frontend",
    title: "Clean Architecture en Frontend: más allá de los componentes",
    date: "8 Jul 2024",
    summary:
      "Aplicando principios de Clean Architecture en proyectos React a gran escala. Separación de capas, dependency inversion, casos de uso y cómo mantener el código testeable y escalable a largo plazo.",
    readTime: "7 min",
    tags: ["Arquitectura", "React", "Clean Code", "Frontend"],
  },
];
