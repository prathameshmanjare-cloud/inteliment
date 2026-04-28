export const impactStories = [
  {
    slug: 'actuarial-decision-pipelines',
    title: 'Automating Actuarial Decision Pipelines',
    subtitle: 'How we eliminated 100% of manual steps in monthly MPF generation for a leading insurer.',
    industry: 'Insurance',
    icon: 'Shield',
    client: 'Leading Australian Insurer',
    challenge:
      'A leading insurer relied on manual Excel-based extraction and preparation for monthly Model Points File (MPF) generation. The process was slow, error-prone, and created a bottleneck for actuarial decision-making across the organization. Actuaries spent weeks on data preparation instead of analysis.',
    approach:
      'We built a Snowflake-native solution using high-performance Snowpark stored procedures, orchestrated with Tasks and Task Graphs. Custom audit tables ensured full traceability across every transformation step. A streamlined deployment framework empowered development teams to iterate independently without production risk.',
    techStack: ['Snowflake', 'Snowpark', 'Tasks & Task Graphs', 'Python', 'Streamlit'],
    results: [
      { label: 'Processing Time Reduction', value: '85%' },
      { label: 'Manual Steps Eliminated', value: '100%' },
      { label: 'Audit Compliance', value: 'Full' },
      { label: 'Deployment Cycle', value: '< 1 day' },
    ],
    details: [
      'End-to-end automation of monthly MPF creation replacing all manual Excel steps',
      'High-performance Snowpark-based stored procedures for complex actuarial calculations',
      'Orchestrated workflows using Tasks & Task Graphs with dependency management',
      'Custom audit tables providing complete data lineage and regulatory traceability',
      'Streamlined deployment framework allowing development teams to ship independently',
    ],
    diImpact: 'This engagement demonstrates Layer 1 (Data) and Layer 4 (Actions) of the DI stack, transforming manual actuarial workflows into automated, auditable decision pipelines.',
    relatedSolutions: ['data-engineering', 'ai-agents'],
    relatedIndustries: ['insurance'],
  },
  {
    slug: 'sas-to-cloud-migration',
    title: 'SAS to Cloud: 200+ Scripts Migrated with Zero Issues',
    subtitle: 'Migrating two decades of SAS logic to Snowflake with full functional parity, on time, zero defects.',
    industry: 'Insurance',
    icon: 'Shield',
    client: 'Global Insurance Group',
    challenge:
      'The client operated 200+ long-running SAS scripts for critical actuarial and operational processes. Legacy infrastructure was costly, slow, and incompatible with the modern cloud data platform the organization was migrating to.',
    approach:
      'We re-engineered SAS logic into optimized Snowflake SQL, designed scalable workflows using Tasks and Task Graphs, and maintained close collaboration with business stakeholders to ensure full functional parity throughout the migration. Every script was validated against production outputs before cutover.',
    techStack: ['Snowflake', 'SQL', 'Tasks & Task Graphs', 'Confluence', 'JIRA'],
    results: [
      { label: 'Scripts Migrated', value: '200+' },
      { label: 'Post-Migration Issues', value: '0' },
      { label: 'Delivered', value: 'On Time' },
      { label: 'Performance Improvement', value: '3–5x' },
    ],
    details: [
      'Re-engineered 200+ SAS scripts into optimized, modern Snowflake SQL',
      'Designed scalable orchestration workflows using Tasks & Task Graphs',
      'Close collaboration with business stakeholders for parity validation on every script',
      'Delivery governance via Confluence documentation and JIRA sprint tracking',
      'Completed on time with zero post-migration issues, full production parity achieved',
    ],
    diImpact: 'This migration established the Data Foundation layer, enabling all future analytics, ML, and AI agent investments to run on a modern, scalable cloud platform instead of legacy infrastructure.',
    relatedSolutions: ['data-engineering'],
    relatedIndustries: ['insurance'],
  },
  {
    slug: 'unified-claims-integration',
    title: 'Unified Claims Data Integration & Processing',
    subtitle: 'Eliminating manual data processing and achieving regulatory compliance through automated ingestion.',
    industry: 'Insurance',
    icon: 'Shield',
    client: 'Major Claims Processing Client',
    challenge:
      'A major claims client operated with multiple disparate data sources, manual files, XLSX datasets, and disconnected Snowflake logic, resulting in manual, error-prone processes that compromised accuracy and created regulatory compliance risks.',
    approach:
      'We built a fully automated ingestion solution unifying all data sources through Azure Blob + Snowpipe automated ingestion, Azure Functions for scheduled API retrieval, and long-term logic stabilization to eliminate manual intervention entirely.',
    techStack: ['Snowflake', 'Azure Blob Storage', 'Snowpipe', 'Azure Functions', 'Python'],
    results: [
      { label: 'Data Sources Unified', value: '5+' },
      { label: 'Manual Processing', value: 'Eliminated' },
      { label: 'Regulatory Alignment', value: 'Achieved' },
      { label: 'Accuracy Improvement', value: 'Significant' },
    ],
    details: [
      'Unified ingestion of manual files, XLSX datasets, and existing Snowflake logic',
      'Automated data ingestion pipeline via Azure Blob Storage + Snowpipe',
      'Scheduled API-based data retrieval using Azure Functions',
      'Long-term logic stabilization and error remediation',
      'Improved data accuracy, regulatory alignment, and operational efficiency',
    ],
    diImpact: 'This engagement delivered Layer 1 (Data) and Layer 4 (Actions) outcomes, replacing manual human processes with automated data pipelines that ensure consistent, accurate, compliance-ready data.',
    relatedSolutions: ['data-engineering'],
    relatedIndustries: ['insurance'],
  },
  
]
