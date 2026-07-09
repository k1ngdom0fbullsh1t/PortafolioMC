import type { Experience, Education } from "@/types";

export const workExperience: Experience[] = [
  {
    id: "1",
    company: "SONDA S.A.",
    role: "Full Stack Developer",
    startDate: "Abril 2022",
    endDate: "Presente",
    description:
      "Desarrollo end-to-end de plataforma de gestión judicial para el Poder Judicial de Chile, incluyendo arquitectura frontend y backend, APIs REST, automatización de procesos, monitoreo de servicios, logging y mantenimiento de infraestructura institucional.",
    type: "work",
  },
  {
    id: "2",
    company: "Freelance / Consultoría",
    role: "Developer Independiente",
    startDate: "Dic 2021",
    endDate: "Mar 2022",
    description:
      "Desarrollo de soluciones digitales para clientes de distintos rubros: e-commerce, sistemas de gestión internos y aplicaciones móviles. Stack variado según requerimientos del cliente.",
    type: "work",
  },
  {
    id: "3",
    company: "ULTRAMAR LTDA.",
    role: "Web Developer (Práctica profesional)",
    startDate: "Ago 2021",
    endDate: "Oct 2021",
    description:
      "Construcción de un visor de integración para la gestión de requerimientos corporativos utilizando C# + ASP.NET, Angular y SQL Server. Participación activa en sprints ágiles.",
    type: "work",
  },
  {
    id: "4",
    company: "CITT DuocUc",
    role: "Full Stack Developer",
    startDate: "Sep 2020",
    endDate: "Dic 2020",
    description:
      "Continuidad del desarrollo de plataforma de análisis de tendencias en redes sociales utilizando Machine Learning, implementando mejoras y nuevas funcionalidades full stack en backend Python y frontend Angular. Encargado además de la mentoría y supervisión técnica de alumnos en práctica.",
    type: "work",
  },
  {
    id: "5",
    company: "CITT DuocUc",
    role: "Full Stack Developer (Práctica profesional)",
    startDate: "Ago 2020",
    endDate: "Sep 2020",
    description:
      "Participación en el desarrollo de plataforma de análisis de tendencias en redes sociales utilizando Machine Learning. Desarrollo de backend en Python para procesamiento y análisis de datos obtenidos desde Twitter, y frontend en Angular para visualización de información y resultados analíticos.",
    type: "work",
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "DuocUC",
    degree: "Ingeniería en Informática",
    field: "Informática / Computer Science",
    startDate: "2018",
    endDate: "2021",
    achievements: [
      //"Participante en CITT regional",
    ],
  },
  {
    id: "2",
    institution: "DuocUC",
    degree: "Diplomado en Metodologías Ágiles",
    field: "Informática / Computer Science",
    startDate: "2023",
    endDate: "2023",
    achievements: [
      //"Participante en CITT regional",
    ],
  },
  {
    id: "3",
    institution: "Universidad de Chile",
    degree: "Diplomado en Dirección y Gestión de Proyectos",
    field: "Informática / Computer Science",
    startDate: "2024",
    endDate: "2024",
    achievements: [
      //"Participante en CITT regional",
    ],
  },
  {
    id: "4",
    institution: "DuocUC",
    degree: "Diplomado en Ciencia de Datos",
    field: "Informática / Computer Science",
    startDate: "2025",
    endDate: "2025",
    achievements: [
      //"Participante en CITT regional",
    ],
  },
  {
    id: "5",
    institution: "Universidad Andrés Bello",
    degree: "Magister en Ciencia de Datos e Inteligencia Artificial",
    field: "Informática / Computer Science",
    startDate: "2026",
    endDate: "Presente",
    achievements: [
      //"Participante en CITT regional",
    ],
  },
  /*{
    id: "2",
    institution: "Universidad de Santiago de Chile",
    degree: "Ingeniería Civil en Informática",
    field: "Informática / Computer Science",
    startDate: "2013",
    endDate: "2018",
    achievements: [
      "Graduado con distinción académica",
      "Proyecto de título: Sistema distribuido de monitoreo en tiempo real",
      "Ayudante de cátedra en Algoritmos y Estructuras de Datos",
      "Participante en ACM-ICPC regional",
    ],
  },*/
];
