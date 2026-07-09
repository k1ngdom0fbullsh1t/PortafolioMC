# Marcelo Corro — Portfolio

Personal portfolio website built with **Next.js 15**, **React**, **TypeScript**, and **Tailwind CSS**. Features an AI-powered chatbot that answers questions about my projects and background.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **AI Integration:** Google Gemini API (architecture ready; currently using a smart mock — see note below)
- **Deployment:** Netlify

## Features

- Responsive design with dark/light mode
- Animated sections using Framer Motion
- AI portfolio assistant (chatbot)
- Project showcase
- Contact section

## Chatbot — Architecture Note

The chatbot is built on top of the **Google Gemini API** (`@google/generative-ai`). The full integration is implemented in `app/api/chat/route.ts`, but the live API is currently **disabled to avoid operational costs** on a personal portfolio project. In its place, a **smart keyword-based mock** handles questions about Marcelo's projects, skills, experience, and background — with automatic Spanish/English language detection based on the user's input.

To enable the real Gemini API, add a valid `GEMINI_API_KEY` to `.env.local` and update `route.ts` to call the model instead of the mock function.

## Projects Featured

### Life Expectancy ML
Machine learning model that predicts life expectancy at birth for 185 countries using WHO and World Bank data. Built with Python, XGBoost, SHAP, and Streamlit.

→ [GitHub](https://github.com/k1ngdom0fbullsh1t/life-expectancy-ml)

### CMF Credit Risk Dashboard
Analysis of credit risk evolution in Chilean banks (2016–2026) using public CMF data. Includes ETL pipeline, EDA, and interactive Streamlit dashboard.

## Getting Started

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Add your GEMINI_API_KEY to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | Google Gemini API key (optional — the chatbot runs on a smart mock without it) |

## Author

**Marcelo Adolfo Corro Troncoso**
- GitHub: [@k1ngdom0fbullsh1t](https://github.com/k1ngdom0fbullsh1t)
- LinkedIn: [marcelo-corro-troncoso](https://www.linkedin.com/in/marcelo-corro-troncoso-7b576b22b)
