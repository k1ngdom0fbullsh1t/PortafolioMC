# Marcelo Corro — Portfolio

Personal portfolio website built with **Next.js 15**, **React**, **TypeScript**, and **Tailwind CSS**. Features an AI-powered chatbot that answers questions about my projects and background.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **AI Integration:** LLM via Google Gemini API
- **Deployment:** Netlify

## Features

- Responsive design with dark/light mode
- Animated sections using Framer Motion
- AI portfolio assistant (chatbot)
- Project showcase
- Contact section

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
| `GEMINI_API_KEY` | Google Gemini API key (for the AI chatbot) |

## Author

**Marcelo Adolfo Corro Troncoso**
- GitHub: [@k1ngdom0fbullsh1t](https://github.com/k1ngdom0fbullsh1t)
- LinkedIn: [marcelo-corro-troncoso](https://www.linkedin.com/in/marcelo-corro-troncoso-7b576b22b)
