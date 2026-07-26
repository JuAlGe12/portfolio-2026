export type Project = {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  status: "planned" | "in-progress" | "done";
};

export const projects: Project[] = [
  {
    slug: "agentic-saas",
    title: "Agentic SaaS Platform",
    tagline: "CRM con agentes de IA que ejecutan acciones reales, no solo texto.",
    stack: ["Next.js", "FastAPI", "CrewAI", "PostgreSQL", "Redis"],
    status: "planned",
  },
  {
    slug: "fintech-ledger",
    title: "Fintech Real-Time Ledger",
    tagline: "Microservicio de transacciones de alta concurrencia con Go y Kafka.",
    stack: ["Go", "gRPC", "Kafka", "PostgreSQL"],
    status: "planned",
  },
  {
    slug: "ai-employee",
    title: "AI Employee Orchestration",
    tagline: "Automatización con LLMs locales conectados por MCP vía WhatsApp.",
    stack: ["n8n", "MCP", "Ollama", "WhatsApp API"],
    status: "planned",
  },
  {
    slug: "rag-api",
    title: "RAG Knowledge API",
    tagline: "API de conocimiento con búsqueda semántica sobre miles de documentos.",
    stack: ["FastAPI", "Qdrant", "LlamaIndex", "Polars"],
    status: "planned",
  },
  {
    slug: "mobile-offline",
    title: "Edge-Sync Mobile App",
    tagline: "App de logística offline-first con sincronización automática.",
    stack: ["React Native", "SQLite", "PowerSync", "Supabase"],
    status: "planned",
  },
  {
    slug: "headless-commerce",
    title: "Headless Commerce Edge",
    tagline: "Tienda con checkout corriendo en el Edge a 50ms de latencia global.",
    stack: ["Next.js", "Cloudflare Workers", "Stripe", "Sanity"],
    status: "planned",
  },
  {
    slug: "devops-stack",
    title: "GitOps & Observability Stack",
    tagline: "Infraestructura como código con monitoreo de latencia y costos de IA.",
    stack: ["Terraform", "Kubernetes", "Prometheus", "Grafana"],
    status: "planned",
  },
  {
    slug: "scraping-pipeline",
    title: "Data Intelligence Pipeline",
    tagline: "Pipeline distribuido que detecta oportunidades de arbitraje de precios.",
    stack: ["Python", "Playwright", "Celery", "Kafka"],
    status: "planned",
  },
];