export const australiaData = {
  hero: {
    eyebrow: 'Inteliment Australia',
    title: 'Sydney-based. ANZ-focused. Global delivery depth.',
    subtitle: "Inteliment's Australian practice is led by Sydney principals who understand the ANZ regulatory environment, enterprise technology landscape, and delivery requirements, backed by a 150-person global team operating in your time zone.",
  },

  practice: {
    city: 'Sydney',
    description: 'Our Australian practice is led by Sydney-based principals who understand the regulatory environment, talent market, and technology landscape unique to the Asia-Pacific region. Engagements are scoped locally and delivered with full transparency into our global delivery model.',
    highlights: [
      { metric: '6+', label: 'Years in ANZ Market' },
      { metric: '20+', label: 'ANZ Engagements Delivered' },
      { metric: '48hr', label: 'Response Time Commitment' },
      { metric: 'APAC', label: 'Time-Zone Aligned Delivery' },
    ],
    technicalStrengths: [
      'Snowflake, Databricks & Azure on Australian data residency',
      'APRA CPS 234 and Privacy Act-aligned data governance',
      'Local Superannuation and Insurance regulatory expertise',
      'Hybrid delivery: on-site Sydney + GCC Pune',
    ],
    domainStrengths: [
      'Insurance & Superannuation decision systems',
      'Banking & FS risk and compliance analytics',
      'Healthcare claims and clinical intelligence',
      'Energy & Utilities predictive maintenance',
    ],
  },

  solutions: [
    {
      icon: 'Database',
      title: 'Data Engineering & Cloud Modernisation',
      description: 'Migrate from legacy SAS, Teradata, or on-prem warehouses to modern cloud platforms, Azure, Snowflake, or Databricks, on Australian data residency.',
      techStack: 'Azure, Snowflake, dbt, Airflow, Databricks',
      color: '#00B4D8',
    },
    {
      icon: 'Brain',
      title: 'Data Science & Predictive Analytics',
      description: 'Actuarial model modernisation, risk scoring, churn prediction, and demand forecasting, built for APRA-regulated and ASX-listed environments.',
      techStack: 'Python, scikit-learn, Azure ML, Databricks MLflow',
      color: '#00D4AA',
    },
    {
      icon: 'BarChart2',
      title: 'BI & Reporting Modernisation',
      description: 'Replace outdated Cognos, Business Objects, or MicroStrategy stacks with Power BI, Tableau, or Looker deployments aligned to your governance requirements.',
      techStack: 'Power BI, Tableau, Looker, Streamlit',
      color: '#52EFD0',
    },
    {
      icon: 'Zap',
      title: 'AI Decision Agents',
      description: 'Automate high-volume decisions in underwriting, claims, credit, and supply chain. Reduce cycle time from days to minutes while maintaining compliance and audit trails.',
      techStack: 'LangChain, Azure OpenAI, Databricks, FastAPI',
      color: '#A78BFA',
    },
  ],

  impactStories: [
    {
      slug: 'actuarial-decision-pipelines',
      industry: 'Insurance',
      headline: 'Automated actuarial decisioning for a top-5 Australian insurer',
      metric: '70%',
      metricLabel: 'Reduction in cycle time',
      description: 'Replaced manual SAS-based actuarial workflows with a fully automated Azure + Python pipeline, reducing pricing cycle time from 3 weeks to 4 days.',
    },
    {
      slug: 'sas-to-cloud-migration',
      industry: 'Banking',
      headline: 'SAS to cloud migration for a Big 4 bank analytics team',
      metric: '60%',
      metricLabel: 'Lower infrastructure cost',
      description: 'Migrated 180+ SAS models to Python/Databricks on Azure, cutting annual infrastructure costs by 60% while improving model refresh frequency.',
    },
    {
      slug: 'unified-claims-integration',
      industry: 'Health Insurance',
      headline: 'Unified claims intelligence platform for a national health fund',
      metric: '4×',
      metricLabel: 'Faster claims insights',
      description: 'Consolidated 9 disparate claims data sources into a single Snowflake-based intelligence layer, enabling real-time fraud detection and member analytics.',
    },
  ],

  clients: [
    'IAG', 'QBE', 'Suncorp', 'AMP', 'AustralianSuper',
    'Commonwealth Bank', 'ANZ', 'NAB', 'Westpac', 'Medibank',
    'Bupa Australia', 'Transurban', 'Origin Energy',
  ],

  platforms: [
    { name: 'Microsoft Azure', badge: 'Primary Cloud', color: '#0078D4', note: 'Most ANZ enterprises run on Azure. We are deployment-ready.' },
    { name: 'Snowflake', badge: 'Data Cloud', color: '#29B5E8', note: 'Australian data residency. APRA-aligned architecture patterns.' },
    { name: 'Databricks', badge: 'Lakehouse', color: '#FF3621', note: 'Preferred for ML workloads and unified data + AI pipelines.' },
    { name: 'Power BI', badge: 'Enterprise BI', color: '#F2C811', note: 'M365-integrated. Preferred by ANZ finance and risk teams.' },
  ],

  globalBacking: {
    headline: 'Local Presence. Global Depth.',
    description: 'Our Sydney team is your single point of contact, for commercial discussions, architecture reviews, and stakeholder updates. The delivery is backed by a 150-strong global team across Pune, Singapore, and Europe, operating in your time zone.',
    stats: [
      { metric: '150+', label: 'Global Team' },
      { metric: '500+', label: 'Projects Delivered' },
      { metric: '22+', label: 'Years Expertise' },
      { metric: '100+', label: 'Enterprise Clients' },
    ],
    trustPoints: [
      'Sydney-based commercial and technical leadership',
      'Dedicated APAC delivery team in Pune, AEST-aligned',
      'Contractual SLAs with AU entity, invoiced in AUD',
      'Data residency guaranteed on Australian Azure regions',
    ],
  },
}
