import { NextRequest, NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function getMockResponse(input: string): string {
  const q = input.toLowerCase();

  // Saludos
  if (/^(hi|hello|hey|hola|buenas|saludos|good\s*(morning|afternoon|evening))/.test(q)) {
    return "Hi! I'm Marcelo's portfolio assistant. Ask me about his projects, skills, or background — happy to help!";
  }

  // Proyectos generales
  if (/projects?|proyectos?|what.*(built|made|done|trabajado|hecho)|portfolio/.test(q)) {
    return "Marcelo has two main data science projects: **Life Expectancy ML** — a machine learning model that predicts life expectancy for 185 countries using WHO and World Bank data (XGBoost, R²=0.9865, SHAP explainability); and **CMF Credit Risk Dashboard** — an analysis of credit risk evolution in Chilean banks from 2016 to 2026. Both include ETL pipelines, EDA, and interactive Streamlit dashboards.";
  }

  // Life Expectancy
  if (/life.expectancy|esperanza.de.vida|who|world.bank|banco.mundial/.test(q)) {
    return "The Life Expectancy ML project predicts life expectancy at birth for ~185 countries using 20+ indicators from the WHO and World Bank (GDP, infant mortality, sanitation, electricity access, etc.). The final model is XGBoost with R²=0.9865 on a temporal split (trained on 2000–2017, tested on 2018–2021), with an RMSE of 0.84 years. It also uses SHAP to explain predictions — the top factor is infant mortality. You can explore it on GitHub: https://github.com/k1ngdom0fbullsh1t/life-expectancy-ml";
  }

  // CMF
  if (/cmf|credit.risk|riesgo.de.cr[eé]dito|banco|bank|financial|financiero/.test(q)) {
    return "The CMF Credit Risk Dashboard analyzes how credit risk has evolved across Chilean banks between 2016 and 2026, using public data from Chile's financial market regulator (CMF). It includes a full ETL pipeline, exploratory data analysis, and an interactive Streamlit dashboard deployed publicly. Stack: Python, pandas, Plotly, and Streamlit.";
  }

  // SHAP / Explainable AI
  if (/shap|explainab|xai|interpret/.test(q)) {
    return "Marcelo used SHAP (SHapley Additive exPlanations) in the Life Expectancy ML project to explain why the model makes each prediction. The global SHAP analysis shows that infant mortality and adult mortality are the most impactful negative factors, while electricity access, GDP per capita, and sanitation are the top positive drivers.";
  }

  // Modelo / XGBoost / ML
  if (/xgboost|model|random.forest|machine.learning|ml|r2|rmse|accuracy|performance/.test(q)) {
    return "Marcelo's final model is XGBoost, chosen over Linear Regression and Random Forest after comparing them with 5-fold cross-validation. On a temporal split (train ≤2017 / test ≥2018), it achieves R²=0.9865 and RMSE=0.84 years — meaning predictions are within less than a year of error on average. The random split gives R²=0.9977, but the temporal split is the more rigorous out-of-sample evaluation.";
  }

  // Skills / tecnologías
  if (/skills?|technologies|tech.?stack|languages?|tools?|tecnolog|habilidades|conoces?|know/.test(q)) {
    return "Marcelo's main skills include: **Data Science & ML** — Python, pandas, scikit-learn, XGBoost, SHAP, Plotly, Streamlit; **Web Development** — React, TypeScript, Next.js, Tailwind CSS; **Data & APIs** — SQL, REST APIs, wbgapi, WHO GHO API; and **Tools** — Git, GitHub, Jupyter, VS Code. He's currently studying Computer Engineering (Ingeniero en Informática) in Chile.";
  }

  // React / TypeScript / frontend
  if (/react|typescript|next\.?js|frontend|front.end|web/.test(q)) {
    return "Marcelo works with React, TypeScript, and Next.js for web development — this portfolio itself is built with Next.js 15, TypeScript, and Tailwind CSS. He's also integrated an LLM (this chatbot!) using the Google Generative AI API, demonstrating full-stack and AI integration skills.";
  }

  // Python / Data Science
  if (/python|pandas|scikit|data.science|ciencia.de.datos/.test(q)) {
    return "Python is Marcelo's primary language for data science. He uses pandas and NumPy for data processing, scikit-learn for baseline models, XGBoost for gradient boosting, SHAP for interpretability, and Plotly + Streamlit for interactive dashboards. Both his portfolio projects are built end-to-end in Python.";
  }

  // GitHub / código / code
  if (/github|repositor|code|c[oó]digo|source/.test(q)) {
    return "You can find Marcelo's code on GitHub at https://github.com/k1ngdom0fbullsh1t. The Life Expectancy ML project is fully public with notebooks, scripts, and the trained model included.";
  }

  // Sobre Marcelo / about
  if (/who is|who.?s marcelo|about|acerca|qu[ié]en es|background|experiencia|experience/.test(q)) {
    return "Marcelo Adolfo Corro Troncoso is a Computer Engineering student (Ingeniero en Informática) based in Chile. He focuses on Data Science, Machine Learning, and Full-Stack Web Development. His portfolio projects demonstrate end-to-end skills: from collecting data via public APIs, building and evaluating ML models, applying Explainable AI (SHAP), to deploying interactive dashboards and web apps.";
  }

  // Chile / LATAM / comparativa
  if (/chile|latam|latin.america|oecd|ocde/.test(q)) {
    return "One of the differentiators of the Life Expectancy ML project is a comparative analysis of Chile vs. LATAM vs. OECD countries. Chile consistently ranks above the LATAM average and close to OECD levels, driven by strong access to clean water, electricity, and sanitation. The model predicts Chile's 2021 life expectancy with less than 1 year of error.";
  }

  // Contacto / contact
  if (/contact|email|linkedin|reach|contacto|correo/.test(q)) {
    return "You can reach Marcelo via the contact form on this page, or connect with him on LinkedIn. His work is also available on GitHub at https://github.com/k1ngdom0fbullsh1t.";
  }

  // Gracias / thanks
  if (/thank|gracias|perfect|perfecto|genial|great|awesome|excelente/.test(q)) {
    return "You're welcome! Feel free to ask anything else about Marcelo's work.";
  }

  // Fallback
  return "That's a great question! I can answer things about Marcelo's projects, skills, background, or how to get in touch. What would you like to know?";
}

export async function POST(request: NextRequest) {
  try {
    const { messages }: { messages: Message[] } = await request.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    const reply = getMockResponse(lastMessage.content);

    await new Promise((r) => setTimeout(r, 600));

    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: "Error processing your request" },
      { status: 500 }
    );
  }
}
