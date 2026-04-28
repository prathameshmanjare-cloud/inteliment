export const inteliLabsData = {
  // ── Hero ──
  hero: {
    eyebrow: 'INTELI-LABS',
    headline: "Where Inteliment's Competitive Edge Is Built.",
    subtitle: "Inteli-Labs is Inteliment's engineering research lab. Every reusable framework, AI accelerator, and pre-trained model that compresses our delivery timelines originates here, conceived, tested, and hardened before it goes anywhere near a client engagement.",
    ctaPrimary: { label: "See What We've Built", to: '#research-portfolio' },
    ctaSecondary: { label: 'Partner With Inteli-Labs', to: '/contact?subject=inteli-labs' },
  },

  // ── What Inteli-Labs Is ──
  identity: {
    heading: 'Not a Showcase. An Engineering Operation.',
    description: "Most 'innovation labs' are marketing exercises. Inteli-Labs is where Inteliment's delivery advantage is actually built, every accelerator, framework, and AI model template is battle-tested here before it enters any client engagement.",
    pillars: [
      {
        icon: 'Lightbulb',
        title: 'IP Creation',
        description: 'Frameworks, accelerators, and reusable assets that compress delivery timelines by 30–50%, and compound value across every engagement that uses them.',
      },
      {
        icon: 'FlaskConical',
        title: 'Emerging Tech R&D',
        description: 'Active research in GenAI agents, LLM orchestration, decision orchestration, computer vision, and edge AI. Always with a production deployment path, not a research paper destination.',
      },
      {
        icon: 'Building2',
        title: 'Enterprise R&D Extension',
        description: "Run experiments, build prototypes, and validate AI hypotheses that your internal teams don't have the bandwidth or infrastructure for. The lab is yours to use.",
      },
    ],
  },

  // ── Research & IP Portfolio ──
  portfolio: {
    heading: '9+ Proprietary IP Assets. All Production-Ready.',
    subtitle: "Every asset below has been deployed in enterprise client engagements, not left in the lab.",
    categories: [
      {
        name: 'AI & Decision Intelligence Accelerators',
        icon: 'BrainCircuit',
        assets: [
          {
            name: 'Decision Orchestration Framework',
            description: 'Models and augments real-time decision points with next-best-action recommendations using business rules, data, and AI models.',
            tags: ['Decision Intelligence', 'Real-time', 'AI/ML'],
          },
          {
            name: 'GenAI Agent Toolkit',
            description: 'Pre-built patterns for deploying purposive AI agents that automate and augment human and business tasks. RAG patterns, prompt engineering templates, LLM orchestration blueprints.',
            tags: ['GenAI', 'LLM', 'Agents'],
          },
          {
            name: 'Predictive Model Library',
            description: 'Pre-validated ML model templates for churn prediction, demand forecasting, anomaly detection, fraud scoring, and customer segmentation, tuned per industry vertical.',
            tags: ['ML', 'Prediction', 'Industry-tuned'],
          },
        ],
      },
      {
        name: 'Data & Analytics Frameworks',
        icon: 'Database',
        assets: [
          {
            name: 'GNOMON',
            description: 'Data Analytics Engine. Reusable data integration and transformation framework for accelerated pipeline development.',
            tags: ['Data Engineering', 'ETL', 'Reusable'],
          },
          {
            name: 'Navigator Analytics',
            description: 'Enterprise analytics platform with pre-built KPI libraries, dashboard templates, and self-service BI patterns.',
            tags: ['BI', 'Dashboards', 'Self-service'],
          },
          {
            name: 'RIM',
            description: 'Business Framework for structured analytics engagements, from discovery through production deployment.',
            tags: ['Methodology', 'Delivery', 'Governance'],
          },
        ],
      },
      {
        name: 'Knowledge & Methodology',
        icon: 'BookOpen',
        assets: [
          {
            name: 'Dimension',
            description: 'Agile project management and delivery framework optimised for analytics and AI engagements.',
            tags: ['Agile', 'Delivery', 'Project Management'],
          },
          {
            name: 'WiseGuide',
            description: 'Business context and domain knowledge repository enabling faster onboarding and cross-industry learning.',
            tags: ['Knowledge', 'Onboarding', 'Domain'],
          },
          {
            name: 'Textonomix',
            description: 'Text analytics and NLP accelerator for unstructured data processing, sentiment analysis, and document intelligence.',
            tags: ['NLP', 'Text Analytics', 'Unstructured'],
          },
        ],
      },
    ],
  },

  // ── Rubiscape Section ──
  rubiscape: {
    heading: 'The Platform Backbone: Rubiscape.',
    subtitle: 'The low-code Decision Intelligence platform that unifies data integration, AI/ML, and analytics in a single environment.',
    description: "Rubiscape is the platform backbone of Inteli-Labs, and a strategic platform partner for Inteliment's enterprise engagements. It provides an all-in-one, low-code environment for data integration, predictive and generative AI, decision orchestration, and analytics app delivery.",
    capabilities: [
      {
        icon: 'Merge',
        title: 'Data Integration',
        description: 'Integrate and blend data from diverse sources to deliver unified data for all consumers.',
      },
      {
        icon: 'BrainCircuit',
        title: 'Predictive AI + Generative AI',
        description: 'Build, train, and deploy ML and AI models at scale for recommendations and next-best-action.',
      },
      {
        icon: 'GitBranch',
        title: 'Decision Orchestration',
        description: 'Model and augment real-time decision points using business rules, data, and AI.',
      },
      {
        icon: 'AppWindow',
        title: 'Analytics Apps & APIs',
        description: 'Deliver reports, insights, and recommendations to channels, applications, and business processes.',
      },
    ],
    operationsBar: 'User Management & SSO  |  Workflow Automation  |  DataOps, MLOps & DecisionOps  |  Audits',
    ctaDemo: { label: 'Request a Rubiscape Demo', to: '/contact?subject=rubiscape-demo' },
    ctaSales: { label: 'Talk to Sales', to: '/contact?subject=rubiscape' },
  },

  // ── Technology Foundation ──
  techFoundation: {
    heading: 'Open Source at the Core. Enterprise Platform-Ready.',
    subtitle: 'Open-source-first, flexibility, transparency, and zero vendor lock-in. Fully integrated with the enterprise platforms your organisation already runs.',
    columns: [
      {
        title: 'Open-Source Core',
        icon: 'Code2',
        items: [
          'Apache Spark, Kafka, Airflow, Flink',
          'PyTorch, TensorFlow, scikit-learn',
          'LangChain, LlamaIndex, Hugging Face',
          'Streamlit, Grafana, Apache Superset',
          'dbt, Great Expectations, OpenMetadata',
        ],
      },
      {
        title: 'Enterprise Platforms',
        icon: 'Cloud',
        items: [
          'Snowflake (Snowpark, Cortex AI)',
          'Microsoft Azure (Azure ML, OpenAI)',
          'Databricks (MLflow, Unity Catalog)',
          'AWS (SageMaker, Bedrock)',
          'Rubiscape (Decision Intelligence)',
        ],
      },
      {
        title: 'Strategic Alliances',
        icon: 'Handshake',
        items: [
          'Technology vendors (Microsoft, AWS, Snowflake, Databricks)',
          'Data platform partners (Informatica, SAP)',
          'HPC vendors (large-scale model training)',
          'Academic institutions (research collaboration)',
        ],
      },
    ],
  },

  // ── Enterprise R&D Extension ──
  rdExtension: {
    heading: 'Your Extended AI Lab',
    description: "Not every enterprise can build an AI research capability from scratch. Inteli-Labs operates as an extension of your R&D function, running experiments, building prototypes, and validating AI use cases with the speed and depth of a dedicated lab, without the overhead of building one.",
    engagementModes: [
      {
        icon: 'Timer',
        title: 'Innovation Sprint',
        duration: '2–4 weeks',
        description: 'Rapid prototyping of an AI use case. From hypothesis to working prototype with a clear go/no-go recommendation.',
        bestFor: 'Validating a specific AI hypothesis or use case quickly',
      },
      {
        icon: 'Users',
        title: 'Co-Innovation Lab',
        duration: 'Ongoing',
        description: 'Embedded collaboration between your domain experts and our AI engineers. Joint ideation, experimentation, and IP co-creation.',
        bestFor: 'Enterprises building long-term AI capability with a partner',
      },
      {
        icon: 'GraduationCap',
        title: 'Academic Partnership',
        duration: 'Semester / Annual',
        description: 'Joint research programs with universities and research institutions. Access to emerging talent, published research, and pre-competitive R&D.',
        bestFor: 'Universities, research labs, and enterprises investing in foundational AI research',
      },
    ],
  },

  // ── Lab to Production Flow ──
  labToProduction: {
    heading: 'From Lab to Production',
    description: "Every accelerator, framework, and AI model template built in Inteli-Labs is battle-tested before it enters an engagement. Our delivery teams don't start from scratch, they start from validated IP. This is why Inteliment can promise faster time-to-value and lower TCO: the research has already been done.",
    flow: [
      { label: 'Inteli-Labs', sublabel: 'Research & IP', icon: 'FlaskConical' },
      { label: 'Inteliment Delivery', sublabel: 'Delivery Teams', icon: 'Users' },
      { label: 'Enterprise Client', sublabel: 'Production', icon: 'Building2' },
    ],
    cta: { label: 'See How Our Delivery Teams Work', to: '/global-delivery' },
  },

  // ── CTA ──
  cta: {
    heading: "The Lab Is Open. Let's Build Something Together.",
    subtitle: "Enterprise R&D partner. Academic collaborator. Technology integration. Three ways to work with Inteli-Labs, each designed around what you're actually trying to accomplish.",
    paths: [
      { label: 'Enterprise R&D Partnership', to: '/contact?subject=inteli-labs-enterprise', icon: 'Building2' },
      { label: 'Academic Collaboration', to: '/contact?subject=inteli-labs-academic', icon: 'GraduationCap' },
      { label: 'Technology Alliance', to: '/contact?subject=inteli-labs-alliance', icon: 'Handshake' },
    ],
  },
}
