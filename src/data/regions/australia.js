// src/data/regions/australia.js

export const australiaData = {
  hero: {
    eyebrow: 'ANZ Practice · Sydney-Based · Est. 2004',
    badges: [
      { label: '🏛️ NSW Govt Pre-Qualified Supplier', gold: true },
      { label: 'Featured SME · ANZ Data & AI' },
      { label: 'ASX Enterprise Trusted' },
      { label: 'Big 4 Banking Partner' },
      { label: 'Federal Government Delivery' },
      { label: '22+ Years · 95% Success Quotient' },
    ],
    subtitle:
      'Inteliment Australia is Sydneys leading Decision Intelligence firm — locally registered, compliance-first, and backed by over two decades of enterprise data and AI delivery across ASX100 companies, Big 4 banks, and federal government agencies.',
    trustPills: [
      'Sydney-Based Principals',
      'AEST-Aligned Delivery',
      'No Junior Handoffs',
      'ICT SCM0020 Registered',
      'Data Sovereignty Compliant',
    ],
  },

  statBar: [
    { num: '22', suffix: '+', label: 'Years of ANZ\nDelivery Excellence' },
    { num: '95', suffix: '%', label: 'Project Success\nQuotient' },
    { num: '150', suffix: '+', label: 'ANZ Enterprise\nEngagements' },
    { num: '40', suffix: '+', label: 'Certified Data &\nAI Specialists' },
    { num: '5', suffix: '★', label: 'Avg Client\nSatisfaction Rating' },
  ],

  localHighlights: [
    {
      num: '#1',
      label: 'Featured SME — ANZ Data & AI',
      desc: 'Recognised as a leading Subject Matter Expert in Data & AI by industry bodies and enterprise clients across the ANZ region.',
    },
    {
      num: 'SCM0020',
      label: 'NSW Govt Pre-Qualified Supplier',
      desc: 'Advanced Registration under the NSW Government ICT Services Pre-Qualification Scheme. Registered Digital Agency for NSW Government delivery.',
    },
    {
      num: 'Est.\n2004',
      label: 'Two Decades of Proven Delivery',
      desc: 'Founded in Sydney in 2004. Not a startup. Not a branch office. A locally registered, independently operated, purpose-built Data & AI firm.',
    },
  ],

  asxStrip: {
    label: 'Trusted By',
    text: 'ASX100 enterprises, Big 4 banks, federal and state government agencies, and leading ANZ healthcare and insurance organisations have trusted Inteliment to design, build, and operate their most critical data and AI systems.',
  },

  practice: {
    technicalStrengths: [
      {
        title: 'Data Sovereignty & Residency',
        detail: 'All architectures designed for Australian data residency requirements — Azure Australia East/Southeast, AWS ap-southeast-2, on-premise hybrid.',
      },
      {
        title: 'Privacy Act & APPs Compliance',
        detail: 'Native understanding of the Australian Privacy Act 1988, Australian Privacy Principles, and OAIC guidance — built into every solution.',
      },
      {
        title: 'APRA CPS 234 & CPG 235',
        detail: 'APRA-regulated entity experience across banking, insurance, and superannuation. Data risk and resilience frameworks delivered from first principles.',
      },
      {
        title: 'ASD Essential Eight Alignment',
        detail: 'Government and critical infrastructure engagements designed to the Australian Cyber Security Centres Essential Eight Maturity Model.',
      },
      {
        title: 'CDR & Open Banking Architecture',
        detail: 'Consumer Data Right implementation across data holders and recipients — accredited API design, consent management, and data quality assurance.',
      },
    ],
    complianceTags: [
      'NSW Govt SCM0020',
      'Featured SME',
      'Privacy Act Compliant',
      'APRA CPS 234',
      'ASD Essential Eight',
      'CDR Ready',
      'ISO 27001',
      'SOC 2 Type II',
    ],
    domainStrengths: [
      {
        title: 'BFSI — Banking, Financial Services & Insurance',
        detail: 'Core banking data modernisation, risk analytics, regulatory reporting, fraud detection, and claims intelligence across Big 4 and regional institutions.',
      },
      {
        title: 'Government & Public Sector',
        detail: 'Federal and state agency data platforms, citizen analytics, grant management intelligence, and ICT service delivery under DTA frameworks.',
      },
      {
        title: 'Healthcare & Life Sciences',
        detail: 'Clinical data warehousing, patient outcome analytics, FHIR-compliant data platforms, and population health intelligence for major health networks.',
      },
      {
        title: 'Superannuation & Wealth',
        detail: 'Member analytics, investment performance reporting, regulatory data obligations (APRA SRS), and AI-driven member engagement platforms.',
      },
      {
        title: 'Retail & Consumer',
        detail: 'Omnichannel analytics, supply chain intelligence, customer 360 platforms, and demand forecasting for major ASX-listed retail groups.',
      },
    ],
  },

  solutions: [
    {
      title: 'Data Platform Modernisation',
      description:
        'Migrate legacy data warehouses and siloed data assets to cloud-native, governed platforms on Azure, AWS, or GCP — with zero data loss and minimal operational disruption. Snowflake, Databricks, Microsoft Fabric delivered at enterprise scale.',
    },
    {
      title: 'Enterprise AI & GenAI Solutions',
      description:
        'From enterprise LLM deployment and RAG architectures to autonomous AI agents and Copilot integrations — built on Azure OpenAI, AWS Bedrock, and Google Vertex AI with full data governance and compliance guardrails.',
    },
    {
      title: 'Data Governance & Master Data Management',
      description:
        'Establish a trusted data foundation — data cataloguing, lineage, quality frameworks, and MDM across Microsoft Purview, Alation, Collibra, and Informatica. Compliance-ready from day one.',
    },
    {
      title: 'Advanced Analytics & Decision Intelligence',
      description:
        'Strategic analytics programs that connect data to decisions — predictive modelling, prescriptive analytics, real-time intelligence, and executive dashboards built on Power BI, Tableau, and ThoughtSpot.',
    },
    {
      title: 'DataOps & MLOps Engineering',
      description:
        'Production-grade data and ML pipelines with CI/CD, automated testing, model monitoring, and drift detection. Azure DevOps, dbt, Apache Airflow, and MLflow delivered by certified engineers.',
    },
    {
      title: 'Strategy, Architecture & Advisory',
      description:
        'CxO-level data and AI strategy, enterprise architecture blueprints, vendor selection, and program business cases. Our principals bring 20+ years of ANZ enterprise advisory to your most complex decisions.',
    },
  ],

  platforms: [
    {
      abbr: 'AZ',
      name: 'Microsoft Azure & Fabric',
      badge: 'Preferred ANZ Platform',
      bg: '#E8F4FD',
      color: '#0078D4',
      desc: 'End-to-end Azure data estate — from Azure Data Factory to Microsoft Fabric, Synapse, Purview, and Azure OpenAI. Sovereign cloud deployments for government.',
      caps: [
        'Microsoft Fabric & OneLake',
        'Azure Synapse & Data Factory',
        'Azure OpenAI & AI Studio',
        'Microsoft Purview Governance',
        'Power BI Premium & Embedded',
      ],
    },
    {
      abbr: 'SF',
      name: 'Snowflake Data Cloud',
      badge: 'Elite Partner · ANZ',
      bg: '#E8F4FD',
      color: '#29B5E8',
      desc: 'Snowflake architecture, implementation, and optimisation for ANZ enterprises — from initial migration to Cortex AI and Snowpark ML deployments.',
      caps: [
        'Data Cloud Architecture',
        'Snowpark & Cortex AI',
        'Data Sharing & Marketplace',
        'Cost Optimisation',
        'Performance Engineering',
      ],
    },
    {
      abbr: 'DB',
      name: 'Databricks Lakehouse',
      badge: 'Delivery Partner · ANZ',
      bg: '#FFF3E0',
      color: '#FF6D00',
      desc: 'Databricks Unity Catalog, Delta Lake, and MLflow deployments — unified analytics and AI on the Lakehouse architecture for data-intensive ANZ workloads.',
      caps: [
        'Unity Catalog & Delta Lake',
        'MLflow & Model Registry',
        'Spark Performance Tuning',
        'Real-Time Streaming',
        'LLM Fine-Tuning',
      ],
    },
    {
      abbr: 'AWS',
      name: 'AWS Data & AI',
      badge: 'Advanced Partner',
      bg: '#FFF8E1',
      color: '#FF9900',
      desc: 'AWS data platform design on ap-southeast-2 — Redshift, Glue, Lake Formation, and Bedrock — with data sovereignty and IRAP compliance for government workloads.',
      caps: [
        'Redshift & Lake Formation',
        'AWS Glue & Step Functions',
        'Amazon Bedrock & Q',
        'SageMaker MLOps',
        'IRAP-Ready Architecture',
      ],
    },
    {
      abbr: 'dbt',
      name: 'dbt & Modern Data Stack',
      badge: 'Practitioner',
      bg: '#E8F5E9',
      color: '#FF694B',
      desc: 'DataOps-first delivery using dbt Core and Cloud alongside Airflow, Great Expectations, and Monte Carlo — automated, tested, observable data pipelines.',
      caps: [
        'dbt Core & Cloud',
        'Apache Airflow / MWAA',
        'Data Quality Frameworks',
        'Data Observability',
        'CI/CD for Data',
      ],
    },
    {
      abbr: 'PBI',
      name: 'Power BI & Tableau',
      badge: 'BI Centre of Excellence',
      bg: '#FCE4EC',
      color: '#E91E63',
      desc: 'Enterprise BI transformation — self-service analytics, executive dashboards, embedded analytics, and data democratisation at scale.',
      caps: [
        'Power BI Premium & Embedded',
        'Tableau Server & Cloud',
        'ThoughtSpot & Sigma',
        'Semantic Layer Design',
        'BI Governance & Adoption',
      ],
    },
  ],

  industries: [
    {
      sector: 'Banking & Finance',
      title: 'Real-Time Risk & Regulatory Intelligence',
      detail: 'APRA regulatory reporting automation, credit risk modelling, AML transaction monitoring, and real-time fraud detection across core banking data estates.',
    },
    {
      sector: 'Insurance',
      title: 'Claims Intelligence & Underwriting AI',
      detail: 'Predictive claims triage, underwriting risk scoring, IoT-driven telematics analytics, and APRA CPS 234 compliant data platforms.',
    },
    {
      sector: 'Government',
      title: 'Citizen Analytics & Digital Service Delivery',
      detail: 'Whole-of-government data integration, grants intelligence, citizen outcome analytics, and ICT service modernisation under DTA and NSW Digital frameworks.',
    },
    {
      sector: 'Healthcare',
      title: 'Clinical Decision Intelligence',
      detail: 'FHIR-compliant clinical data platforms, patient outcome analytics, EMR integration, and population health intelligence for metropolitan health networks.',
    },
    {
      sector: 'Superannuation',
      title: 'Member & Investment Analytics',
      detail: 'APRA SRS reporting automation, member propensity modelling, investment performance dashboards, and AI-driven member engagement platforms.',
    },
    {
      sector: 'Retail & Consumer',
      title: 'Demand Forecasting & Customer 360',
      detail: 'Omnichannel customer intelligence, supply chain demand sensing, personalisation AI, and promotional effectiveness analytics for ASX-listed retailers.',
    },
  ],

  maturity: {
    levels: [
      {
        num: '1',
        stage: 'Fragmented',
        desc: 'Siloed data, manual reporting, no single source of truth. Decisions driven by spreadsheets.',
        highlight: false,
      },
      {
        num: '2',
        stage: 'Reactive',
        desc: 'Basic data warehouse in place. Dashboards exist but are inconsistent. Limited self-service.',
        highlight: false,
      },
      {
        num: '3',
        stage: 'Proactive',
        desc: 'Governed data platform. Reliable KPIs. Analytics teams established. Most ANZ enterprises sit here.',
        highlight: true,
      },
      {
        num: '4',
        stage: 'Predictive',
        desc: 'ML models in production. Real-time data flows. AI-assisted decisions embedded in operations.',
        highlight: true,
      },
      {
        num: '5',
        stage: 'Autonomous',
        desc: 'Self-optimising AI systems. Autonomous decision-making. Continuous learning at enterprise scale.',
        highlight: false,
      },
    ],
    positioning: [
      {
        key: '01',
        title: 'Where Most ANZ Enterprises Are',
        desc: 'The majority of ASX-listed companies and government agencies operate at Levels 2–3 — reactive analytics with inconsistent governance and limited AI deployment.',
      },
      {
        key: '02',
        title: 'Where Inteliment Specialises',
        desc: 'The Level 3→5 transition is where strategic differentiation is built. Our Sydney principals have led this transformation for over 30 ANZ enterprise clients.',
      },
      {
        key: '03',
        title: 'Your 48-Hour Roadmap',
        desc: 'Our experts will assess your current maturity state, identify your highest-impact opportunities, and deliver a prioritised roadmap — within 48 hours, at no cost.',
      },
    ],
  },

  impactStories: [
    {
      metric: '68%',
      label: 'Reduction in Regulatory Reporting Time',
      detail: 'Delivered for a Top 4 Australian bank — automated APRA regulatory reporting pipeline replacing 14 manual processes, reducing month-end close from 11 days to 3.5 days.',
    },
    {
      metric: '$42M',
      label: 'Annual Savings Identified via AI',
      detail: 'Procurement intelligence platform deployed for a federal government agency — ML-driven spend analytics identified $42M in addressable savings within the first 12 months.',
    },
    {
      metric: '4.2×',
      label: 'Faster Insights for ASX Retailer',
      detail: 'Migrated a legacy on-premise DWH to Snowflake on AWS — query performance improved 4.2x and data freshness moved from T+1 batch to near real-time streaming.',
    },
    {
      metric: '99.97%',
      label: 'Data Platform Uptime Achieved',
      detail: 'Production data platform SLA delivered for a major Australian health network — serving 4,200 clinical staff across 7 hospitals with zero unplanned downtime in 18 months.',
    },
    {
      metric: '3 Wks',
      label: 'From Kickoff to First AI Output',
      detail: 'GenAI document intelligence platform deployed for a NSW Government agency — contract analysis and policy summarisation live within 21 days of engagement start.',
    },
    {
      metric: '22 Yrs',
      label: 'of Unbroken ANZ Delivery',
      detail: 'No other Data & AI firm in Australia has our combination of tenure, compliance credentials, and enterprise client breadth — with a 95% project success rate to prove it.',
    },
  ],

  comparisonTable: {
    headers: [
      'Capability',
      'Inteliment Australia',
      'Global SI (Big 4 / TCS / Infosys)',
      'Local SME / Boutique',
      'Staffing / Labour-Hire',
    ],
    rows: [
      ['ANZ Market Expertise', '✓ 22 years, deep local knowledge', '~ Rotating offshore teams', '~ Limited scale & breadth', '✗ No IP or methodology'],
      ['NSW Govt Pre-Qualified', '✓ SCM0020 Advanced Registration', '✓ Usually registered', '~ Sometimes registered', '✗ Rarely applicable'],
      ['Delivery by Principals', '✓ Senior leads on every project', '✗ Junior resources post-sale', '~ Depends on firm size', '✗ Individual contractors only'],
      ['Compliance-First Architecture', '✓ Privacy Act, APRA, ASD baked in', '~ Depends on team assigned', '~ Variable expertise', '✗ Your responsibility'],
      ['End-to-End AI & Data Stack', '✓ Strategy through to operations', '~ Often fragmented practices', '~ Narrow specialisation', '✗ Single skill coverage'],
      ['Fixed-Outcome Engagements', '✓ Milestone-based, accountable', '✗ T&M, scope creep common', '~ Varies significantly', '✗ No outcome accountability'],
      ['Global Delivery Depth', '✓ AEST-aligned offshore pods', '✓ Large offshore capacity', '✗ Limited to local team', '✗ Individual only'],
      ['Startup to Enterprise Scale', '✓ Modular, right-sized engagements', '✗ Minimum deal sizes apply', '~ SME-focused only', '✗ No project management'],
    ],
  },

  globalStats: {
    body: 'Inteliment operates across Australia, India, and the United States — with our ANZ practice anchored in Sydney. Our global delivery model means you get AEST-aligned engineers, 24-hour follow-the-sun support, and deep local accountability — without the overhead of a global SI.',
    trustTrack: [
      'ASX100 Enterprise Client Base',
      'Big 4 Banking Delivery',
      'Federal Government Cleared',
      'State Government Registered',
      'ISO 27001 Certified',
      'SOC 2 Type II Attested',
    ],
    cards: [
      { num: '22', suffix: '+', label: 'Years Operating in ANZ' },
      { num: '150', suffix: '+', label: 'Enterprise Engagements' },
      { num: '40', suffix: '+', label: 'Certified Specialists' },
      { num: '3', suffix: '', label: 'Global Delivery Hubs' },
      { num: '95', suffix: '%', label: 'Project Success Rate' },
      { num: '48', suffix: 'hr', label: 'Expert Response SLA' },
    ],
  },
}