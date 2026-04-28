export const practiceAreas = [
  {
    slug: 'data-engineering',
    title: 'Data Engineering',
    tagline: 'The Foundation of Every Intelligent Decision',
    layer: 'Layer 1 — Data',
    icon: 'Database',
    color: '#00B4D8',
    description:
      'Clean, integrate, and structure enterprise data with production-grade pipelines that feed your entire decision intelligence system.',
    challenge:
      'Raw data from ERP, CRM, and operational systems is rarely clean, unified, or decision-ready. Without a strong data foundation, every analytics and AI investment sits on unstable ground.',
    deliverables: [
      'ETL/ELT pipelines',
      'Data connectors & ingestion frameworks',
      'Cloud data platform setup',
      'Data quality & governance layers',
      'Real-time streaming pipelines',
    ],
    platforms: [
      'Rubiscape',
      'Snowflake (Snowpipe, Tasks, Streams)',
      'Azure (Synapse, ADF, ADLS)',
      'Databricks (Delta Lake, DLT, Auto Loader)',
      'AWS (Glue, Redshift, Kinesis)',
      'Informatica (IICS, CDQ, Power Center)',
      'Open-source: Apache Spark, Kafka, Airflow, dbt, Flink',
    ],
    timeline: '2–3 months per subject area',
    diConnection:
      "Without reliable data engineering, Decision Intelligence is built on sand. Our 22-year foundation in data pipelines is why our AI models actually work in production, not just in demos.",
    trackRecord: { transformations: '10K+', customers: '35+', dataVolume: 'TB/day', csat: '96%+', industries: '12+' },
    bannerImage: '/images/solutions/data-engineering.png',
  },
  {
    slug: 'data-science',
    title: 'Data Science & ML',
    tagline: 'The Intelligence Layer',
    layer: 'Layer 2 — Insights',
    icon: 'Brain',
    color: '#00D4AA',
    description:
      'Predictive models, statistical analysis, and machine learning that transform raw data patterns into actionable business intelligence.',
    challenge:
      'Data warehouses and dashboards show you what happened. Data Science tells you why it happened and what is likely to happen next, the bridge from descriptive to predictive intelligence.',
    deliverables: [
      'Statistical models & ML algorithms',
      'NLP & text analytics',
      'Computer vision solutions',
      'Customer segmentation & churn prediction',
      'Demand forecasting & anomaly detection',
    ],
    platforms: [
      'Rubiscape',
      'Snowpark ML',
      'Azure ML',
      'MLflow & AutoML (Databricks)',
      'SageMaker & Bedrock (AWS)',
      'Python, R, TensorFlow, PyTorch',
      'Open-source ML: scikit-learn, Hugging Face, LangChain, LlamaIndex',
    ],
    timeline: '3–4 months',
    diConnection:
      "Data Science bridges the gap between what your data shows and what it means. Our models answer 'what is likely to happen', the critical third layer of Decision Intelligence.",
    bannerImage: '/images/solutions/data-science.png',
  },
  {
    slug: 'visualization',
    title: 'BI & Visualization',
    tagline: 'The Visibility Layer',
    layer: 'Layer 2 — Insights',
    icon: 'BarChart3',
    color: '#48CAE4',
    description:
      'Operational and strategic dashboards that give every stakeholder, from the factory floor to the boardroom, real-time visibility into what matters.',
    challenge:
      'Most organizations have data but lack the visibility layer that makes it actionable. Executives make decisions on stale reports; operations teams lack real-time KPI tracking.',
    deliverables: [
      'Executive dashboards (CEO Cockpit, CFO Dashboard)',
      'Operational KPI tracking',
      'Self-service BI environments',
      'Geo-intelligence & spatial analytics',
      'Embedded analytics in applications',
    ],
    platforms: [
      'Rubiscape',
      'Power BI',
      'Tableau',
      'Snowsight',
      'QuickSight (AWS)',
      'Business Objects & SAC (SAP)',
      'Streamlit, Grafana, Apache Superset',
    ],
    timeline: '1–3 months',
    diConnection:
      "Dashboards are where most companies stop. We build them as a launchpad, not a destination, feeding visualization data directly into AI decision models.",
    trackRecord: { projects: '200+', customers: '30+', dataLakes: '50+', csat: '96%+', industries: '12+' },
    bannerImage: '/images/solutions/visualization.png',
  },
  {
    slug: 'ai-agents',
    title: 'AI Decision Agents',
    tagline: 'The Action Layer',
    layer: 'Layers 3 & 4 — Decisions & Actions',
    icon: 'Zap',
    color: '#00D4AA',
    description:
      'Autonomous AI agents that process unstructured data, generate recommendations, and execute decisions, closing the loop from insight to action.',
    challenge:
      'Enterprises are drowning in unstructured data, emails, PDFs, contracts, logs. AI agents transform this noise into structured, decision-ready intelligence and automate repetitive decision workflows.',
    deliverables: [
      'Operational AI agents for document processing',
      'Conversational AI interfaces',
      'Automated decision workflows',
      'LLM-powered data structuring',
      'Decision-ready dataset generation',
    ],
    platforms: [
      'Rubiscape',
      'Cortex AI (Snowflake)',
      'Azure OpenAI',
      'Amazon Bedrock',
      'Custom LLM orchestration',
      'Python automation frameworks',
      'Open-source: LangChain, LlamaIndex, Hugging Face Transformers',
    ],
    timeline: '3–4 weeks per agent',
    diConnection:
      "This is where Decision Intelligence becomes real. AI agents don't just recommend, they act. They process emails, flag anomalies, route decisions, and learn from outcomes.",
    bannerImage: '/images/solutions/ai-agents.png',
  },
  {
    slug: 'enterprise-di',
    title: 'Enterprise Decision Intelligence System',
    tagline: 'The Complete Transformation',
    layer: 'All Four Layers',
    icon: 'Network',
    color: '#00B4D8',
    description:
      'End-to-end data-to-decision platform combining data lakes, analytics models, AI agents, and continuous learning, the full Decision Intelligence stack.',
    challenge:
      'Piecemeal analytics investments create fragmentation. An Enterprise DI System unifies all four layers into a continuously improving decision engine, the difference between data-driven and decision-intelligent.',
    deliverables: [
      'Enterprise data lake architecture',
      'Subject-specific data marts',
      'Analytics models & ML pipelines',
      'AI decision agents',
      'Continuous learning feedback loops',
      'Decision outcome tracking',
    ],
    platforms: [
      'Rubiscape',
      'Full platform ecosystem, Snowflake, Azure, Databricks, AWS',
      'Integrated with existing ERP, CRM, and operational systems',
    ],
    timeline: '~12 months',
    diConnection:
      "The culmination of everything we do. An Enterprise DI System transforms your organization from data-driven to decision-intelligent, where decision quality improves continuously through machine learning and AI.",
    bannerImage: '/images/solutions/enterprise-di.png',
  },
]

export const maturityTiers = [
  {
    tier: 1,
    title: 'Data Warehouse + Dashboards',
    shortTitle: 'Augment Existing BI',
    description:
      'You have a data warehouse and dashboards. We add AI Decision Agents and conversational AI on top of your existing infrastructure.',
    deliverables: [
      'AI Decision Agents',
      'Conversational AI interfaces',
      'Integration with existing dashboards',
    ],
    outcome: 'Decision-ready insights from existing data infrastructure.',
    color: '#10B981',
  },
  {
    tier: 2,
    title: 'Data Warehouse, Limited BI',
    shortTitle: 'Build Intelligence Layer',
    description:
      'You have a warehouse but limited BI adoption. We build the intelligence layer: AI agents + dashboards + decision recommendations.',
    deliverables: [
      'AI decision agents',
      'Conversational intelligence layer',
      'Dashboards (optional)',
    ],
    outcome: 'Integrated insights and decision recommendations.',
    color: '#00B4D8',
  },
  {
    tier: 3,
    title: 'Fragmented Data Systems',
    shortTitle: 'Unify & Decide',
    description:
      'Multiple disconnected systems. We unify into an Enterprise Data Lake with subject-specific Data Marts + AI agents.',
    deliverables: [
      'Enterprise Data Lake',
      'Subject-specific Data Marts',
      'AI agents and dashboards',
    ],
    outcome: 'Unified enterprise data architecture with decision intelligence.',
    color: '#F59E0B',
  },
  {
    tier: 4,
    title: 'Starting Analytics Journey',
    shortTitle: 'Full Build',
    description:
      'Starting fresh. End-to-end: data lake + marts + analytics models + AI decision agents.',
    deliverables: [
      'Enterprise data lake',
      'Data marts',
      'AI decision agents',
      'Analytics models',
    ],
    outcome: 'End-to-end data-to-decision intelligence platform.',
    color: '#F97316',
  },
  {
    tier: 5,
    title: 'Unstructured Data Processing',
    shortTitle: 'Structure & Automate',
    description:
      'Significant unstructured data (emails, docs, logs). Operational AI agents that structure data into decision-ready datasets.',
    deliverables: [
      'Operational AI agents',
      'Automated data structuring',
      'Decision-ready datasets',
    ],
    outcome: 'Structured intelligence from emails, documents, logs, and external data.',
    color: '#E63946',
  },
]
