import { NextRequest, NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function detectLanguage(input: string): "es" | "en" {
  const spanishPattern = /[áéíóúñü¿¡]|(\b(hola|qué|cómo|cuál|cuáles|quién|dónde|cuándo|es|de|los|las|un|una|me|te|tu|su|por|para|con|que|y|en|del|al|se|le|mi|si|no|hay|pero|este|esta|más|muy|ya|fue|son|has|tienes|puedes|sobre|también|además)\b)/i;
  return spanishPattern.test(input) ? "es" : "en";
}

function getMockResponse(input: string): string {
  const q = input.toLowerCase();
  const lang = detectLanguage(input);
  const r = (en: string, es: string) => lang === "es" ? es : en;

  // Saludos
  if (/^(hi|hello|hey|hola|buenas|saludos|good\s*(morning|afternoon|evening))/.test(q)) {
    return r(
      "Hi! I'm Marcelo's portfolio assistant. Ask me about his projects, skills, or background — happy to help!",
      "¡Hola! Soy el asistente del portafolio de Marcelo. Pregúntame sobre sus proyectos, habilidades o experiencia — ¡con gusto te ayudo!"
    );
  }

  // Proyectos generales
  if (/projects?|proyectos?|what.*(built|made|done|trabajado|hecho)|portfolio/.test(q)) {
    return r(
      "Marcelo has two main data science projects: **Life Expectancy ML** — a machine learning model that predicts life expectancy for 185 countries using WHO and World Bank data (XGBoost, R²=0.9865, SHAP explainability); and **CMF Credit Risk Dashboard** — an analysis of credit risk evolution in Chilean banks from 2016 to 2026. Both include ETL pipelines, EDA, and interactive Streamlit dashboards.",
      "Marcelo tiene dos proyectos principales de ciencia de datos: **Life Expectancy ML** — un modelo de machine learning que predice la esperanza de vida para 185 países usando datos de la OMS y el Banco Mundial (XGBoost, R²=0.9865, interpretabilidad con SHAP); y **CMF Credit Risk Dashboard** — análisis de la evolución del riesgo de crédito en bancos chilenos entre 2016 y 2026. Ambos incluyen pipelines ETL, EDA y dashboards interactivos en Streamlit."
    );
  }

  // Life Expectancy
  if (/life.expectancy|esperanza.de.vida|who|world.bank|banco.mundial/.test(q)) {
    return r(
      "The Life Expectancy ML project predicts life expectancy at birth for ~185 countries using 20+ indicators from the WHO and World Bank (GDP, infant mortality, sanitation, electricity access, etc.). The final model is XGBoost with R²=0.9865 on a temporal split (trained on 2000–2017, tested on 2018–2021), with an RMSE of 0.84 years. It also uses SHAP to explain predictions — the top factor is infant mortality. Explore it on GitHub: https://github.com/k1ngdom0fbullsh1t/life-expectancy-ml",
      "El proyecto Life Expectancy ML predice la esperanza de vida al nacer para ~185 países usando más de 20 indicadores de la OMS y el Banco Mundial (PIB, mortalidad infantil, saneamiento, acceso a electricidad, etc.). El modelo final es XGBoost con R²=0.9865 en una división temporal (entrenado en 2000–2017, probado en 2018–2021), con un RMSE de 0.84 años. Usa SHAP para explicar predicciones — el factor más importante es la mortalidad infantil. Puedes explorarlo en GitHub: https://github.com/k1ngdom0fbullsh1t/life-expectancy-ml"
    );
  }

  // CMF
  if (/cmf|credit.risk|riesgo.de.cr[eé]dito|banco|bank|financial|financiero/.test(q)) {
    return r(
      "The CMF Credit Risk Dashboard analyzes how credit risk has evolved across Chilean banks between 2016 and 2026, using public data from Chile's financial market regulator (CMF). It includes a full ETL pipeline, exploratory data analysis, and an interactive Streamlit dashboard deployed publicly. Stack: Python, Pandas, Plotly, and Streamlit.",
      "El CMF Credit Risk Dashboard analiza cómo ha evolucionado el riesgo de crédito en los bancos chilenos entre 2016 y 2026, usando datos públicos de la Comisión para el Mercado Financiero (CMF). Incluye un pipeline ETL completo, análisis exploratorio de datos y un dashboard interactivo desplegado públicamente en Streamlit. Stack: Python, Pandas, Plotly y Streamlit."
    );
  }

  // SHAP / Explainable AI
  if (/shap|explainab|xai|interpret/.test(q)) {
    return r(
      "Marcelo used SHAP (SHapley Additive exPlanations) in the Life Expectancy ML project to explain why the model makes each prediction. The global SHAP analysis shows that infant mortality and adult mortality are the most impactful negative factors, while electricity access, GDP per capita, and sanitation are the top positive drivers.",
      "Marcelo utilizó SHAP (SHapley Additive exPlanations) en el proyecto Life Expectancy ML para explicar por qué el modelo realiza cada predicción. El análisis global de SHAP muestra que la mortalidad infantil y la mortalidad adulta son los factores negativos más influyentes, mientras que el acceso a electricidad, el PIB per cápita y el saneamiento son los principales impulsores positivos."
    );
  }

  // Modelo / XGBoost / ML
  if (/xgboost|model|random.forest|machine.learning|ml|r2|rmse|accuracy|performance/.test(q)) {
    return r(
      "Marcelo's final model is XGBoost, chosen over Linear Regression and Random Forest after comparing them with 5-fold cross-validation. On a temporal split (train ≤2017 / test ≥2018), it achieves R²=0.9865 and RMSE=0.84 years — meaning predictions are within less than a year of error on average. The random split gives R²=0.9977, but the temporal split is the more rigorous out-of-sample evaluation.",
      "El modelo final de Marcelo es XGBoost, elegido sobre Regresión Lineal y Random Forest tras compararlos con validación cruzada de 5 pliegues. En una división temporal (entrenamiento ≤2017 / prueba ≥2018), logra R²=0.9865 y RMSE=0.84 años — las predicciones están a menos de un año de error en promedio. La división aleatoria da R²=0.9977, pero la división temporal es la evaluación fuera de muestra más rigurosa."
    );
  }

  // Skills / tecnologías
  if (/skills?|technologies|tech.?stack|languages?|tools?|tecnolog|habilidades|conoces?|know/.test(q)) {
    return r(
      "Marcelo's main skills include: **Data Science & ML** — Python, Pandas, Scikit-learn, XGBoost, SHAP, Plotly, Streamlit, Keras, PyTorch; **Web Development** — React, TypeScript, Next.js, Tailwind CSS; **Data & APIs** — SQL, REST APIs; and **Tools** — Git, GitHub, Power BI, LLM / Gemini API.",
      "Las principales habilidades de Marcelo incluyen: **Ciencia de Datos & ML** — Python, Pandas, Scikit-learn, XGBoost, SHAP, Plotly, Streamlit, Keras, PyTorch; **Desarrollo Web** — React, TypeScript, Next.js, Tailwind CSS; **Datos & APIs** — SQL, APIs REST; y **Herramientas** — Git, GitHub, Power BI, LLM / Gemini API."
    );
  }

  // React / TypeScript / frontend
  if (/react|typescript|next\.?js|frontend|front.end|web/.test(q)) {
    return r(
      "Marcelo works with React, TypeScript, and Next.js for web development — this portfolio itself is built with Next.js, TypeScript, and Tailwind CSS. He also integrated an LLM chatbot using the Google Generative AI API, demonstrating full-stack and AI integration skills.",
      "Marcelo trabaja con React, TypeScript y Next.js para desarrollo web — este portafolio está construido con Next.js, TypeScript y Tailwind CSS. También integró un chatbot con LLM usando la API de Google Generative AI, demostrando habilidades full-stack e integración de IA."
    );
  }

  // Python / Data Science
  if (/python|pandas|scikit|data.science|ciencia.de.datos/.test(q)) {
    return r(
      "Python is Marcelo's primary language for data science. He uses Pandas and NumPy for data processing, Scikit-learn for baseline models, XGBoost for gradient boosting, SHAP for interpretability, and Plotly + Streamlit for interactive dashboards. Both his portfolio projects are built end-to-end in Python.",
      "Python es el lenguaje principal de Marcelo para ciencia de datos. Usa Pandas y NumPy para procesamiento de datos, Scikit-learn para modelos base, XGBoost para gradient boosting, SHAP para interpretabilidad, y Plotly + Streamlit para dashboards interactivos. Ambos proyectos de su portafolio están construidos de extremo a extremo en Python."
    );
  }

  // GitHub / código
  if (/github|repositor|code|c[oó]digo|source/.test(q)) {
    return r(
      "You can find Marcelo's code on GitHub at https://github.com/k1ngdom0fbullsh1t. The Life Expectancy ML project is fully public with notebooks, scripts, and the trained model included.",
      "Puedes encontrar el código de Marcelo en GitHub: https://github.com/k1ngdom0fbullsh1t. El proyecto Life Expectancy ML es completamente público con notebooks, scripts y el modelo entrenado incluidos."
    );
  }

  // Sobre Marcelo / about
  if (/who is|who.?s marcelo|about|acerca|qu[ié]en es|background|experiencia|experience/.test(q)) {
    return r(
      "Marcelo Adolfo Corro Troncoso is a Computer Engineer (Ingeniero en Informática) based in Chile, currently pursuing a Master's in Data Science and AI. He focuses on Data Science, Machine Learning, and Full-Stack Web Development, with end-to-end projects from data collection and ML modeling to interactive dashboards and web apps.",
      "Marcelo Adolfo Corro Troncoso es Ingeniero en Informática radicado en Chile, actualmente cursando un Magíster en Ciencia de Datos e Inteligencia Artificial. Se enfoca en Ciencia de Datos, Machine Learning y Desarrollo Web Full-Stack, con proyectos de extremo a extremo: desde recopilación de datos y modelado ML hasta dashboards interactivos y aplicaciones web."
    );
  }

  // Chile / LATAM
  if (/chile|latam|latin.america|oecd|ocde/.test(q)) {
    return r(
      "One differentiator of the Life Expectancy ML project is a comparative analysis of Chile vs. LATAM vs. OECD countries. Chile consistently ranks above the LATAM average and close to OECD levels, driven by strong access to clean water, electricity, and sanitation. The model predicts Chile's 2021 life expectancy with less than 1 year of error.",
      "Uno de los diferenciadores del proyecto Life Expectancy ML es el análisis comparativo de Chile vs. LATAM vs. países OCDE. Chile se ubica consistentemente por encima del promedio latinoamericano y cerca de los niveles OCDE, impulsado por acceso a agua potable, electricidad y saneamiento. El modelo predice la esperanza de vida de Chile en 2021 con menos de 1 año de error."
    );
  }

  // Contacto
  if (/contact|email|linkedin|reach|contacto|correo/.test(q)) {
    return r(
      "You can reach Marcelo via the contact section on this page or connect with him on LinkedIn. His work is also available on GitHub at https://github.com/k1ngdom0fbullsh1t.",
      "Puedes contactar a Marcelo a través de la sección de contacto en esta página o conectarte con él en LinkedIn. Su trabajo también está disponible en GitHub: https://github.com/k1ngdom0fbullsh1t"
    );
  }

  // Gracias
  if (/thank|gracias|perfect|perfecto|genial|great|awesome|excelente/.test(q)) {
    return r(
      "You're welcome! Feel free to ask anything else about Marcelo's work.",
      "¡De nada! Si tienes más preguntas sobre el trabajo de Marcelo, con gusto te ayudo."
    );
  }

  // Fallback
  return r(
    "Hmm, I don't have that in my knowledge base! I'm an assistant with predefined responses about Marcelo's portfolio — the Gemini API integration is fully implemented, but disabled to keep the project cost-free: enabling Google Cloud billing for a personal portfolio isn't a priority right now. The architecture is ready to connect whenever needed. I can help you with: his projects (Life Expectancy ML, CMF Credit Risk, this chatbot), technical skills, experience, or how to contact him. What would you like to know?",
    "¡Mmm, eso no lo tengo en mi base de conocimiento! Soy un asistente con respuestas predefinidas sobre el portafolio de Marcelo — la integración con Gemini API está completamente implementada, pero deshabilitada para mantener el proyecto sin costos operativos: activar facturación en Google Cloud para un portafolio personal no es prioritario en este momento. La arquitectura está lista para conectarse cuando sea necesario. Puedo ayudarte con: sus proyectos (Life Expectancy ML, CMF Credit Risk, este chatbot), habilidades técnicas, experiencia o cómo contactarlo. ¿Qué te gustaría saber?"
  );
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
