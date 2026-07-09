import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Life Expectancy ML",
    description:
      "Predicción de esperanza de vida al nacer para 185 países usando indicadores de la OMS y el Banco Mundial. Modelo XGBoost con R²=0.9865, interpretabilidad con SHAP y dashboard interactivo en Streamlit.",
    stack: ["Python", "XGBoost", "SHAP", "scikit-learn", "Streamlit", "Plotly", "pandas"],
    github: "https://github.com/k1ngdom0fbullsh1t/life-expectancy-ml",
    featured: true,
  },
  {
    id: "2",
    title: "CMF Credit Risk Dashboard",
    description:
      "Análisis de la evolución del riesgo de crédito en los bancos de Chile entre 2016 y 2026 usando datos públicos de la Comisión para el Mercado Financiero. Incluye pipeline ETL, EDA completo y dashboard desplegado.",
    stack: ["Python", "pandas", "Plotly", "Streamlit", "REST API"],
    github: "https://github.com/k1ngdom0fbullsh1t",
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio AI Chatbot",
    description:
      "Este mismo sitio: portfolio personal con un chatbot impulsado por Gemini (LLM) capaz de responder preguntas sobre proyectos, skills y experiencia. Construido con Next.js 15, TypeScript y la API de Google Generative AI.",
    stack: ["Next.js", "TypeScript", "React", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/k1ngdom0fbullsh1t",
    featured: true,
  },
];
