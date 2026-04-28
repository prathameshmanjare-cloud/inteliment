# Inteliment Website — Full Content Brief
> All user-facing copy, headings, subheadings, body text, data arrays, and button labels across every page.
> Use this file to refine copy in Claude Chat, then apply changes back to the source files indicated.
> Last updated: April 2026

---

## HOW TO USE THIS FILE
Each section below maps to a specific source file. When you want to change copy, paste the relevant section into Claude Chat with your instruction (e.g. "Make this more punchy" or "Rewrite card 3 to emphasise speed"). Then apply the revised strings to the file path shown.

---

## NAVIGATION
**File:** `src/data/navigation.js`

### Main Nav Items
| Label | Destination | Badge |
|-------|-------------|-------|
| Decision Intelligence | /decision-intelligence | — |
| Solutions | dropdown | — |
| Industries | dropdown | — |
| Services | /services | — |
| Inteli-AI | /inteli-ai | `AI` |
| Company | dropdown | — |

### Solutions Dropdown
- Data Engineering — "The foundation layer" → `/solutions/data-engineering`
- Data Science & ML — "The intelligence layer" → `/solutions/data-science`
- BI & Visualization — "The visibility layer" → `/solutions/visualization`
- AI Decision Agents — "The action layer" → `/solutions/ai-agents`
- Enterprise DI System — "The complete stack" → `/solutions/enterprise-di`

### Industries Dropdown
Insurance · Banking & FS · Healthcare · Manufacturing · Energy & Utilities · Telecom · Automotive · Retail & E-Commerce · Financial Services · Technology & SaaS · Logistics & Supply Chain · Media & Entertainment

### Company Dropdown
- About Inteliment — "Our story & mission" → `/about`
- Leadership — "The team behind the intelligence" → `/about/leadership`
- Inteli-Me — "Join our team" → `/inteli-me`
- Impact Stories — "Client case studies" → `/impact`
- DI Insights Hub — "Articles & thought leadership" → `/insights`
- News — "Latest updates" → `/news`
- CSR — "Our social responsibility" → `/csr`
- Inteliment Australia — "APAC regional practice" → `/australia`

### Nav CTA Button
- Label: **"Book Assessment"**
- URL: `/assessment`

---

## FOOTER
**File:** `src/components/layout/Footer.jsx`

### Brand Tagline
"Decision Intelligence Company. 22 years of data mastery. One mission: better decisions."

### Contact Details
- Email: insights@inteliment.com
- Phone: (020) 6911-5600
- WhatsApp: +91 70581 42400

### Offices
- 🇮🇳 Pune, India — HQ — 106 Baner
- 🇦🇺 Sydney, Australia — APAC Practice
- 🇸🇬 Singapore — SEA Office
- 🇪🇺 Europe — EU Office

### Social Channels
LinkedIn · Twitter/X · YouTube · Instagram · Facebook
- LinkedIn URL: https://www.linkedin.com/company/inteliment
- Twitter URL: https://twitter.com/inteliment
- YouTube URL: https://www.youtube.com/@inteliment

### Footer Column 1 — Solutions & Platforms
Data Engineering · Data Science & ML · BI & Visualization · AI Decision Agents · Enterprise DI System · ROI Calculator

### Footer Column 2 — Industries
Insurance · Banking & FS · Healthcare · Manufacturing · Energy & Utilities · Telecom · Automotive · Retail & E-Commerce · All Industries →

### Footer Column 3 — Services & Resources
Services · Decision Intelligence · DI Assessment · DI Insights Hub · Impact Stories · Inteli-Labs · InteliHub · Australia Practice

### Footer Column 4 — Company
About Inteliment · Leadership · Inteli-Me (Careers) · News · CSR · Contact Us · Privacy Policy · Cookie Policy

### Certifications Bar
ISO 9001:2015 · ISMS Certified · Snowflake Silver · Microsoft Gold · AWS ISV · Databricks ISV

### Bottom Bar
"© [Year] Inteliment Technologies India Pvt. Ltd. All rights reserved."
Links: Privacy Policy · Terms of Service · Cookie Policy

---

## PAGE: HOME
**File:** `src/pages/HomePage.jsx`
**Route:** `/`
**SEO Title:** "Inteliment — Decision Intelligence Company"
**SEO Description:** "Inteliment builds Decision Intelligence systems that transform enterprise data into faster, better, and aligned decisions. From data engineering to autonomous AI."

### S1 — Hero
- **Headline:** "Growth stalls when decisions are slow, disconnected, or unclear."
- **Subtitle:** "Every business has data. Every team makes decisions. But the speed, quality, and alignment of those decisions is what separates the next phase of growth from the current plateau."
- **CTA Primary:** "Start Building Your Decision Advantage" → `/assessment`
- **CTA Secondary:** "See How It Works" → `#decision-levels`

### S2 — The Decision Problem
- **Eyebrow:** "The Core Challenge"
- **Heading:** "Your business doesn't have a data problem. It has a decision problem."
- **Pain Point Bullets:**
  - "Decisions are slow — competitors move before you do."
  - "Insights exist but don't translate into action."
  - "Strategy is defined but not cascading into execution."
  - "AI is deployed, but not aligned to outcomes."
- **Closing Line:** "Decisions are not happening at the speed, quality, or alignment required for your next phase of growth."

### S3 — Four Decision Levels
- **Eyebrow:** "The Decision Landscape"
- **Heading:** "Decisions operate across four interconnected levels."
- **Subtitle:** "Each level drives different business outcomes. Most organisations optimise one or two. High-performing organisations align all four."
*(Interactive component — DecisionLevels)*

### S4 — The Gap
- **Heading:** "Your current data platforms don't tell you what to do next."
- **Left Panel Label:** "What you have today"
  - "Dashboards show what happened"
  - "Reports highlight trends"
  - "Analytics provide insights"
- **Right Panel Label:** "What's missing"
  - "They don't drive decisions"
  - "They don't align decisions across levels"
  - "They don't accelerate action"
- **Closing Line:** "They inform. They don't enable outcomes."

### S5 — The Shift
- **Eyebrow:** "The Shift"
- **Heading:** "From fragmented data to a unified decision engine."
- **Old flow (muted):** Data → Reports → Insights → Delayed decisions
- **New flow (teal):** Data → Context → Decisions → Actions → Measurable outcomes
- **Result Card 1 — Reduced TCO:**
  - "Eliminates redundant reporting layers"
  - "Reduces manual analysis effort"
  - "Minimises dependency on disconnected tools"
- **Result Card 2 — Better Financial Outcomes:**
  - "Better decisions improve revenue conversion"
  - "Faster decisions accelerate execution cycles"
  - "Aligned decisions reduce waste"
- **Footnote:** "Fewer systems. Lower cost. Faster execution. Every decision becomes a lever for financial performance."

### S6 — How We Solve It
- **Intro:** "Our Decision Intelligence solutions connect your data, systems, and AI into a unified engine that drives growth, efficiency, and future advantage."
*(Interactive DIFramework component)*

### S7 — Client Logo Wall
- **Label:** "Trusted By"
- **Footnote:** "100+ enterprise clients across 12 industries"

### S8 — Impact Numbers
| Metric | Label |
|--------|-------|
| 22+ | Years of Data Mastery |
| 500+ | Projects Delivered |
| 100+ | Enterprise Clients |
| 150+ | Strong Team |
| 96% | Client Satisfaction |

### S9 — Industry Entry Points
*(IndustryGrid component)*

### S10 — CTA Banner
- **Title:** "Turn your data into your decision advantage."
- **Subtitle:** "Drive growth, efficiency, and competitive advantage with Decision Intelligence."
- **CTA:** "Schedule a Conversation" → `/contact`

---

## PAGE: ABOUT
**File:** `src/pages/About.jsx`
**Route:** `/about`
**SEO Title:** "About Inteliment"
**SEO Description:** "22 years of data engineering excellence. Inteliment is a Decision Intelligence company headquartered in Pune with offices in Sydney, Singapore, and Europe."

### S1 — Hero
- **Eyebrow:** "About Inteliment"
- **Headline:** "22 Years of Data Mastery. One Mission: Better Decisions."
- **Subtitle:** "From a two-person startup in Pune to a 150-strong global Decision Intelligence practice — this is our story."
- **CTA:** "Partner With Us" → `/contact`

### S2 — Vision, Mission, Values
**File:** `src/data/leadership.js` — `visionMissionValues`
- **Eyebrow:** "Purpose"
- **Heading:** "Driven by Vision, Defined by Impact"
- **Vision Card:** "To be the catalysts of an experienced economy, where the pace of learning is greater than the rate of change!"
- **Mission Card:** "Partnering with leaders to create value from data, simplify innovation techniques, and drive excellence."
- **Values Card:** "Our values underpin our direction of growth, our internal ethos and the way we do business."
- **Values Philosophy Heading:** "Our Values Philosophy"
- **Values Philosophy Body:** "At Inteliment we use the Yogic interpretation of the characteristics of the six physical elements, found in the Vedas, a historical Indian text. The elements — Earth, Water, Air, Fire, Sun and Moon — are believed to be the basis of all creation including the human body."
- *⚠️ Image placeholder:* `TODO: /images/about/values-elements.png`

### S3 — Meet The Founders
**File:** `src/data/leadership.js` — `founders`
- **Eyebrow:** "Leadership"
- **Heading:** "Meet The Founders"

#### Dr. Prashant Pansare
- **Title:** Founder & Group CEO
- **Bio:** "A Mechanical Engineer with an MBA in Marketing and Finance, left his corporate career to found Inteliment in 2004. Under his leadership, Inteliment has become a global leader in Big Data, Analytics, and IoT, driven by a focus on disruptive technology and innovation."
- *⚠️ Photo placeholder:* `TODO: /images/team/prashant-pansare.jpg`

#### Anand Pansare
- **Title:** Co-Founder & CEO Australia
- **Bio:** "Anand Pansare is the co-founder of Inteliment and drives a technology-centric business strategy. Anand brings to Inteliment both depth and breadth of experience in the software industry providing invaluable thought leadership."
- *⚠️ Photo placeholder:* `TODO: /images/team/anand-pansare.jpg`

### S4 — Leadership Team
**File:** `src/data/leadership.js` — `leadershipTeam`
- **Eyebrow:** "The Team"
- **Heading:** "The Leadership Team"
- **Subtitle:** "Meet the passionate people behind our success. Dedicated to empowering and inspiring every step of the journey."
- **Link:** "View Full Team →" → `/about/leadership`

| Name | Title |
|------|-------|
| Trupti Pansare | Board of Directors & CHRO |
| Niranjan Dikshit | Senior Director — Delivery |
| Gauri Bapat | Senior Director — Sales & Marketing |
| Nimesh Shah | Director — Technology |
| Ashil Shah | Director — Operations |

*(All photos are placeholders — see individual `photoSrc` comments in data file)*

### S5 — Our Story / Timeline
- **Eyebrow:** "Our Journey"
- **Heading:** "22 Years of Milestones"
- **Body:** "Inteliment was founded in 2003 with a single conviction: that data, used well, could fundamentally improve how enterprises make decisions. We started as a business intelligence consultancy in Pune. We built our first data warehouse when Hadoop was still a research paper. We survived the cloud transition, led it for our clients, and evolved from BI to advanced analytics to machine learning to AI — not because the market demanded it, but because our clients trusted us enough to keep going on that journey with them. Today, 22 years later, we run a 150-person global practice from four offices across Pune, Sydney, Singapore, and Europe. Over 500 projects delivered. Over 100 enterprise clients. One mission: better decisions."
*(Timeline data from `src/data/team.js` — `companyMilestones`)*

### S6 — By the Numbers
| Metric | Label |
|--------|-------|
| 22+ | Years of Data Mastery |
| 500+ | Projects Delivered |
| 100+ | Enterprise Clients |
| 150+ | Global Team |
| 96% | Client Satisfaction |
| 12+ | Industries Served |

### S7 — Global Presence
- **Eyebrow:** "Global Delivery"
- **Heading:** "Where We Work"
- 🇮🇳 Pune, India — Headquarters & Global Delivery Centre
- 🇦🇺 Sydney, Australia — Client Services & AU Delivery → `/australia`
- 🇸🇬 Singapore — Asia-Pacific Office
- 🇪🇺 Europe — European Office

### S8 — Awards & Recognition
**File:** `src/data/leadership.js` — `aboutAwards`
- **Eyebrow:** "Recognition"
- **Heading:** "Awards"
- **Subtitle:** "Our awards recognize excellence and highlight our dedication to innovation, quality and outstanding service."
- **Award list:** Deloitte Technology Fast 50 · EFQM Leading Excellence · NASSCOM Emerge 50 · India International Innovation Summit · The BIZZ Awards · CIO Big Data — 100 Most Promising · SI Company of the Year 2014 · IMM Award · MCCIA Recognition · Government of Maharashtra · Zee Business Recognition · Skoch Summit · ModiNomics Recognition
- *⚠️ Logo placeholders:* `TODO: /images/awards/[name].png`

### S9 — Certifications
- **Eyebrow:** "Credentials"
- **Heading:** "Certified. Accredited. Trusted."
- ISO 9001:2015 (Certified) · ISMS (Certified) · Snowflake (Silver Partner) · Microsoft (Gold Certified) · Databricks (ISV Partner) · AWS (ISV Partner) · Informatica (Silver Partner)

### S10 — CTA Banner
- **Title:** "Partner With Inteliment"
- **Subtitle:** "22 years of expertise. Fully committed to your decision intelligence transformation."
- **CTA:** "Start the Conversation" → `/contact`

---

## PAGE: DECISION INTELLIGENCE
**File:** `src/pages/DecisionIntelligence.jsx`
**Route:** `/decision-intelligence`
**SEO Title:** "What is Decision Intelligence?"
**SEO Description:** "Inteliment explains Decision Intelligence — the evolution beyond BI that transforms data into autonomous, AI-driven decisions. Understand the Four Layers framework."

### S1 — Hero
- **Eyebrow:** "The Framework"
- **Headline:** "What is Decision Intelligence?"
- **Subtitle:** "Your dashboards show what happened. Your reports explain why. But who tells you what to do next? Decision Intelligence closes that gap — turning data into decisions, automatically."
- **CTA Primary:** "Assess Your Decision Maturity" → `/assessment`
- **CTA Secondary:** "See Our Solutions" → `/solutions`

### S2 — The Problem
- **Eyebrow:** "The Problem"
- **Heading:** "The Gap Between Data and Decisions"
- **Body:** "Most organizations have invested heavily in data platforms and business intelligence. They have dashboards, reports, and analytics teams. But they still face the same fundamental problem: **decision latency.**"
- **Three cards:**
  - Traditional BI: "Shows you what happened 24-48 hours ago. Useful for reporting. Useless for real-time decisions."
  - Decision Latency: "The gap between when data is available and when a decision is made. Costs 3%+ of annual revenue."
  - Decision Intelligence: "Closes the gap. AI systems that analyze, recommend, and act — at the speed of business."

### S3 — BI vs DI Table
- **Eyebrow:** "The Distinction"
- **Heading:** "BI tells you what happened. DI tells you what to do."

| Dimension | Business Intelligence | Decision Intelligence |
|-----------|----------------------|----------------------|
| Focus | What happened | What to do next |
| Output | Reports & dashboards | Recommendations & actions |
| Speed | Periodic (weekly/monthly) | Real-time & predictive |
| Scope | Single function | Cross-organisational |
| AI Role | Optional | Core engine |
| Outcome | Informed humans | Augmented decisions |

### S4 — Four Decision Levels
*(DecisionLevels component, mode="all-expanded")*
- **Eyebrow:** "The Decision Landscape"
- **Heading:** "Decisions operate across four interconnected levels."
- **Subtitle:** "Understanding which level you're optimising — and which you're neglecting — is the first step toward genuine Decision Intelligence."

### S5 — What's Missing
- **Eyebrow:** "The Limitation"
- **Heading:** "Your dashboards, reports, and analytics inform. They don't enable outcomes."
- **Left panel (what tools do today):**
  - "Dashboards surface historical data"
  - "Reports highlight trends and variances"
  - "Analytics teams identify patterns"
  - "Insights are shared in meetings"
- **Right panel (what's missing):**
  - "They don't recommend the next action"
  - "They don't align decisions across teams and levels"
  - "They don't accelerate time-to-action"
  - "They don't learn from outcomes to improve future decisions"

### S6 — Four Intelligence Types
- **Eyebrow:** "The Four Types"
- **Heading:** "From Descriptive to Prescriptive"
- **Subtitle:** "Decision Intelligence is the fourth stage of a natural analytics evolution. Most companies live in stages 1 and 2."

| Type | Question | Layer | Examples |
|------|----------|-------|---------|
| Descriptive | What is happening? | Layers 1 & 2 | Sales performance dashboards, Operational KPI reporting, Financial consolidation, Data quality monitoring |
| Diagnostic | Why is it happening? | Layer 2 | Root cause analysis, Cohort and attribution analytics, Anomaly investigation, Market mix modeling |
| Predictive | What is likely to happen? | Layers 2 & 3 | Demand forecasting, Churn prediction, Risk scoring, Anomaly detection, NLP & text analytics |
| Prescriptive (DI) | What should we do about it? | Layers 3 & 4 | Automated decision workflows, AI recommendation engines, Autonomous approval systems, LLM-powered process agents |

- **Descriptive detail:** "Descriptive intelligence tells you what happened and what is currently happening. This is the foundation — dashboards, reports, and data pipelines that surface operational reality. Without reliable descriptive intelligence, everything else fails."
- **Diagnostic detail:** "Diagnostic intelligence identifies the root causes behind observed patterns. Why did churn spike last quarter? Why are this region's margins declining? Advanced analytics, cohort analysis, and ML-driven attribution reveal the drivers behind the data."
- **Predictive detail:** "Predictive intelligence applies machine learning to project future states. Which customers will churn? What will demand look like next quarter? Which assets are likely to fail? This is where most data science investment focuses — and where Inteliment specializes."
- **Prescriptive detail:** "Prescriptive intelligence is Decision Intelligence at its most powerful. It doesn't just predict outcomes — it recommends or executes the optimal action. AI agents that process decisions autonomously, route exceptions to humans, and learn from every outcome close the loop."

### S7 — Four Fundamental Questions
- **Eyebrow:** "The Questions"
- **Heading:** "The Four Fundamental Decision Questions"
1. What happened? → "Descriptive analytics — data engineering, reporting, dashboards."
2. Why did it happen? → "Diagnostic analytics — root cause, attribution, cohort analysis."
3. What will happen next? → "Predictive analytics — ML models, forecasting, risk scoring."
4. What should we do about it? → "Prescriptive intelligence — AI agents, decision automation, continuous learning."

### S8 — DI Framework
- **Intro:** "The answer to all four questions. Four interconnected layers that take you from raw data to autonomous decisions."
*(DIFramework component)*

### S9 — CTA Banner
- **Title:** "Assess Your Decision Maturity"
- **Subtitle:** "Find out where your organization sits on the DI maturity curve — and what it takes to reach Level 4."
- **CTA:** "Take the Free Assessment" → `/assessment`

---

## PAGE: INTELI-AI
**File:** `src/pages/InteliAI.jsx`
**Route:** `/inteli-ai`
**SEO Title:** "Inteli-AI — Decision Intelligence & AI Solutions"
**SEO Description:** "Inteliment Inteli-AI: production-grade AI solutions for enterprise decision intelligence — predictive systems, AI agents, GenAI applications, and autonomous decision workflows."

### S1 — Hero
- **Eyebrow:** "INTELI-AI"
- **Headline:** "Intelligence. Engineered."
- **Subtitle:** "Production-grade AI that doesn't just analyse your data — it drives decisions, accelerates action, and creates measurable outcomes at every level of your business."
- **CTA Primary:** "Explore AI Solutions" → `#ai-solutions`
- **CTA Secondary:** "Talk to a Specialist" → `/contact`

### S2 — AI Solutions Grid
- **Eyebrow:** "AI Solutions"
- **Heading:** "Every layer of AI your enterprise needs."
- **Subtitle:** "From data infrastructure to autonomous agents — Inteliment delivers AI that works in production, not just in proof-of-concept."

| Solution | Description | Tags |
|----------|-------------|------|
| Predictive Decision Systems | Machine learning models that don't just predict — they recommend the next best action and route it to the right decision maker. | Forecasting · Risk Scoring · Churn Prevention |
| AI Decision Agents | Autonomous agents that monitor, decide, and act across operational workflows — from fraud detection to dynamic pricing to supply chain routing. | LLM Orchestration · LangChain · Azure OpenAI |
| GenAI Applications | Enterprise-grade generative AI built on your data — internal knowledge assistants, document intelligence, contract analysis, and reporting automation. | RAG · Embeddings · Document AI |
| AI-Augmented Analytics | Natural language queries, AI-generated summaries, and automated insight narratives layered on top of your existing BI stack. | NL2SQL · AutoInsight · Power BI Copilot |
| AI Risk & Compliance | Explainable AI models for regulated industries — APRA, GDPR, Basel IV. Full audit trails, bias testing, and model governance built in. | XAI · Model Governance · Regulatory |
| AI Data Infrastructure | Feature stores, ML pipelines, vector databases, and model serving infrastructure that supports AI at production scale. | MLflow · Feature Store · Vector DB |

- **Link:** "View all solutions →" → `/solutions`

### S3 — Platform Ecosystem
- **Eyebrow:** "Technology Stack"
- **Heading:** "Built on the platforms your enterprise already uses."
- **Subtitle:** "Inteliment works with your existing investments — extending them with AI rather than replacing them."

| Category | Platforms |
|----------|-----------|
| Cloud | Azure · AWS · GCP |
| Data Platforms | Snowflake · Databricks · dbt |
| AI / ML | Azure OpenAI · LangChain · Hugging Face · PyTorch · MLflow |
| Orchestration | Airflow · Kafka · Spark |
| Visualization | Power BI · Tableau · Looker |
| Proprietary IP | Rubiscape · Inteli-Labs Toolkit |

### S4 — Why Inteliment for AI
- **Eyebrow:** "Why Inteliment"
- **Heading:** "AI that's built for production, not pilots."
- **Subtitle:** "Most AI projects stall between proof-of-concept and scale. We've spent 22 years learning what it takes to go the other way."

| Differentiator | Description |
|----------------|-------------|
| Production-First Engineering | "We don't hand over notebooks. We hand over governed, monitored, production-grade systems with SLAs." |
| Domain-Trained Models | "Pre-built models across 12 industry verticals mean you're not starting from scratch — you're starting from proven." |
| Regulated Industry Experience | "APRA, GDPR, Basel IV, HIPAA — our AI delivery includes the compliance architecture your governance team requires." |
| Human-in-the-Loop by Design | "Every high-stakes AI system we build includes escalation paths, exception routing, and audit trails — AI that's trusted, not tolerated." |

### S5 — Inteli-Labs Teaser
- **Eyebrow:** "Inteli-Labs"
- **Heading:** "Where AI research becomes production IP."
- **Body:** "Inteli-Labs is Inteliment's dedicated AI research lab. It produces the models, toolkits, and frameworks that power our client engagements — and it's where we prototype the next wave of Decision Intelligence capabilities."
- **Bullet points:**
  - "GenAI agent toolkits for enterprise decision workflows"
  - "Pre-built ML models across 12 industry verticals"
  - "Rubiscape — our proprietary no-code DI platform"
- **Link:** "Explore Inteli-Labs →" → `/inteli-labs`
- **Right card facts:** 9+ proprietary AI assets · Production-ready IP · Available to clients & partners · Constantly evolving research agenda

### S6 — CTA Banner
- **Title:** "Ready to put AI to work in your enterprise?"
- **Subtitle:** "Start with our Decision Intelligence assessment — understand where AI can have the most impact."
- **CTA:** "Take the DI Assessment" → `/assessment`

---

## PAGE: SERVICES (ACE/GCC)
**File:** `src/pages/Services.jsx`
**Route:** `/services`
**SEO Title:** "Services — AI Centre for Excellence (ACE) & Global Delivery"
**SEO Description:** "Inteliment's AI Centre for Excellence and Global Delivery Centre in Pune. Scalable, ISO-certified analytics and Decision Intelligence delivery for enterprises worldwide."

### S1 — Hero
- **Eyebrow:** "Services"
- **Headline:** "AI Centre for Excellence (ACE)"
- **Subtitle:** "Your extended analytics arm — scalable, secure, and strategic. 250-seat Global Delivery Centre in Baner, Pune. Scale from 2 to 30+ FTEs in under 4 weeks. ISO 27001 & ISO 9001 certified."
- **CTA Primary:** "Explore GCC Partnership" → `/contact`
- **CTA Secondary:** "Design Your ACE Team" → `#configurator`

### S2 — What We Deliver (9 services)
- **Eyebrow:** "What We Deliver"
- **Heading:** "Decision Intelligence across the full data stack."
- **Subtitle:** "Every capability you need — from raw data to autonomous AI — in one integrated delivery model."

| Service | Description |
|---------|-------------|
| Data Engineering | Cloud-native pipelines, data vaults, lakehouse architecture, and real-time streaming on Snowflake, Databricks, and Azure. |
| Data Science & ML | Predictive models, MLOps pipelines, feature stores, and model governance — built for production, not prototypes. |
| BI & Visualization | Power BI, Tableau, and Looker deployments with semantic layer governance, embedded analytics, and self-service capability. |
| AI Decision Agents | LLM-powered agents and autonomous workflows that monitor, decide, and act across your enterprise operations. |
| Enterprise DI Systems | End-to-end Decision Intelligence platforms — integrating data, models, workflows, and governance into a unified decision engine. |
| Platform Engineering | Infrastructure-as-code, DevSecOps, and data platform management — ensuring your analytics stack is secure, scalable, and reliable. |
| Data Governance | DAMA-aligned data catalogues, lineage tracking, quality frameworks, and GDPR/APRA compliance architectures. |
| Real-Time Analytics | Kafka, Spark Streaming, and event-driven architectures that deliver sub-second insights for operational decision making. |
| Advisory & Enablement | DI strategy workshops, data maturity assessments, roadmapping, and team capability uplift — from C-suite to analyst. |

### S3 — Why Our GCC (6 value levers)
**File:** `src/data/gcc.js` — `gccData.valueLevers`
- **Eyebrow:** "Why Our GCC"
- **Heading:** "Six Reasons Enterprises Choose Inteliment"
- **Subtitle:** "Purpose-built for analytics. Not a generic offshore centre."

| Lever | Outcome |
|-------|---------|
| Cost Optimization | 20–40% TCO savings through offshore-first delivery without compromising quality or governance. |
| Faster Time-to-Value | Sprint-based delivery, reusable IP accelerators, and plug-and-play infrastructure compress delivery timelines. |
| Scalable Expertise | Curated teams in BI, Data Science, AI/ML, and DevOps — scaled to match your delivery phase. |
| Knowledge Retention | Documented processes, institutionalized CoEs, and structured handover ensure IP stays with your organization. |
| Security & Compliance | Enterprise-grade data protection, ISO-certified processes, and GDPR-aligned practices. |
| Innovation Pipeline | Dedicated innovation labs for AI/ML experimentation, PoCs, and co-creation sprints. |

### S4 — The ACE Model
- **Eyebrow:** "The ACE Model"
- **Heading:** "A Centre of Excellence That Works Like Your Team"
- **Body:** "Traditional outsourcing creates distance. The ACE model creates alignment. Our teams operate as embedded extensions of your organisation — attending your standups, working in your tools, owning your outcomes."
- **Three features:**
  - IP-Led Accelerators: "Reusable frameworks, pre-built connectors, and data models that compress delivery timelines by 30–50%."
  - Centralized Governance, Decentralized Delivery: "Architecture standards set at the top; execution at the team level. Quality without bureaucracy."
  - Full Spectrum Capability: "From data engineering to AI agents — one team covers the complete Decision Intelligence stack."

### S5 — ACE Team Configurator
*(Interactive ACEConfigurator component)*
- **Eyebrow:** "Team Configurator"
- **Heading:** "Design Your ACE Team"
- **Subtitle:** "Select the practice areas you need and see a recommended team structure."

### S6 — Ramp Timeline
**File:** `src/data/gcc.js` — `gccData.milestones`
- **Eyebrow:** "Onboarding Journey"
- **Heading:** "From Zero to Full Delivery in 12 Weeks"
- **Subtitle:** "A structured ramp designed for speed without compromising governance."

| Phase | Timeline | Outcome |
|-------|----------|---------|
| Discovery & Planning | Week 0–2 | Infrastructure readiness, stakeholder alignment, delivery playbooks defined |
| Pilot Delivery | Week 3–6 | First use case / MVP sprint delivered, feedback loop initiated |
| Scale-Up Execution | Week 7–12 | Full sprint cycles, KPI tracking activated, automation embedding begins |
| Continuous Optimization | Ongoing | Innovation pipeline execution, SLA audits, roadmap alignment |

### S7 — Three-Tier Delivery Governance
| Tier | Cadence | Participants | Focus |
|------|---------|-------------|-------|
| Strategic Review | Quarterly | CXO, VP Delivery, Client Sponsor | Roadmap alignment, commercial review, strategic priorities |
| Operational Review | Weekly | Delivery Manager, Client Lead | Sprint progress, risk & issue management, resource planning |
| Delivery Cadence | Daily | Pod leads, Engineers | Stand-ups, blockers, sprint execution |

### S8 — Security & Compliance
**File:** `src/data/gcc.js` — `gccData.certifications`
- ISO 27001:2013 (ISMS) · ISO 9001:2015 Quality Management · GDPR-ready practices · Regular third-party security audits · DevSecOps integrated delivery

### S9 — GCC Delivery Track Record
| Metric | Label |
|--------|-------|
| 500+ | Projects Delivered |
| 96% | CSAT Level |
| <6 wks | Productivity Ramp-up |
| 100% | Compliance on IT Policies |

### S10 — CTA Banner
- **Title:** "Build Your AI Centre for Excellence"
- **Subtitle:** "Design a scalable, secure analytics delivery capability with Inteliment."
- **CTA:** "Start the Conversation" → `/contact`

---

## PAGE: INTELI-LABS
**File:** `src/pages/InteliLabs.jsx` + `src/data/inteliLabs.js`
**Route:** `/inteli-labs`
**SEO Title:** "Inteli-Labs — AI Research Lab & Innovation Center"

### S1 — Hero
- **Eyebrow:** "INTELI-LABS"
- **Headline:** "The AI Lab Behind the Intelligence"
- **Subtitle:** "Inteli-Labs is Inteliment's dedicated research and innovation lab — where Decision Intelligence frameworks, AI accelerators, and production-grade IP are conceived, prototyped, and hardened before they reach your enterprise."
- **CTA Primary:** "Explore Our Research" → `#research-portfolio`
- **CTA Secondary:** "Partner With the Lab" → `/contact?subject=inteli-labs`

### S2 — Identity
- **Eyebrow:** "What We Are"
- **Heading:** "Not an Innovation Theatre. An Engineering Lab."
- **Body:** "While most firms announce 'innovation labs' as marketing exercises, Inteli-Labs is where Inteliment's competitive edge is actually built. Every reusable framework, every AI accelerator, every pre-trained model template that our delivery teams deploy into enterprise engagements — it originates here. We build, test, break, and harden solutions so that when they reach production, they work."
- **Three pillars:**
  - IP Creation: "Frameworks, accelerators, and reusable assets that reduce delivery time by 30–40% and compound across engagements."
  - Emerging Tech R&D: "Active research in GenAI agents, LLM orchestration, decision orchestration, computer vision, and edge AI — always with a path to production."
  - Enterprise R&D Extension: "We operate as your extended AI lab — running experiments, building prototypes, and validating hypotheses that your internal teams don't have bandwidth for."

### S3 — Research & IP Portfolio
**Category 1: AI & Decision Intelligence Accelerators**
| Asset | Description | Tags |
|-------|-------------|------|
| Decision Orchestration Framework | Models and augments real-time decision points with next-best-action recommendations using business rules, data, and AI models. | Decision Intelligence · Real-time · AI/ML |
| GenAI Agent Toolkit | Pre-built patterns for deploying purposive AI agents that automate and augment human and business tasks. RAG patterns, prompt engineering templates, LLM orchestration blueprints. | GenAI · LLM · Agents |
| Predictive Model Library | Pre-validated ML model templates for churn prediction, demand forecasting, anomaly detection, fraud scoring, and customer segmentation — tuned per industry vertical. | ML · Prediction · Industry-tuned |

**Category 2: Data & Analytics Frameworks**
| Asset | Description | Tags |
|-------|-------------|------|
| GNOMON | Data Analytics Engine. Reusable data integration and transformation framework for accelerated pipeline development. | Data Engineering · ETL · Reusable |
| Navigator Analytics | Enterprise analytics platform with pre-built KPI libraries, dashboard templates, and self-service BI patterns. | BI · Dashboards · Self-service |
| RIM | Business Framework for structured analytics engagements — from discovery through production deployment. | Methodology · Delivery · Governance |

**Category 3: Knowledge & Methodology**
| Asset | Description | Tags |
|-------|-------------|------|
| Dimension | Agile project management and delivery framework optimised for analytics and AI engagements. | Agile · Delivery · Project Management |
| WiseGuide | Business context and domain knowledge repository enabling faster onboarding and cross-industry learning. | Knowledge · Onboarding · Domain |
| Textonomix | Text analytics and NLP accelerator for unstructured data processing, sentiment analysis, and document intelligence. | NLP · Text Analytics · Unstructured |

### S4 — Rubiscape Platform
- **Eyebrow:** "Platform Backbone"
- **Heading:** "Powered by Rubiscape"
- **Subtitle:** "The low-code Decision Intelligence platform that unifies data integration, AI/ML, and analytics in a single environment."
- **Body:** "Rubiscape is the platform backbone of Inteli-Labs — and a strategic platform partner for Inteliment's enterprise engagements. It provides an all-in-one, low-code environment for data integration, predictive and generative AI, decision orchestration, and analytics app delivery."
- **4 capabilities:**
  - Data Integration: "Integrate and blend data from diverse sources to deliver unified data for all consumers."
  - Predictive AI + Generative AI: "Build, train, and deploy ML and AI models at scale for recommendations and next-best-action."
  - Decision Orchestration: "Model and augment real-time decision points using business rules, data, and AI."
  - Analytics Apps & APIs: "Deliver reports, insights, and recommendations to channels, applications, and business processes."
- **Operations bar:** "User Management & SSO | Workflow Automation | DataOps, MLOps & DecisionOps | Audits"
- **CTA Primary:** "Request a Rubiscape Demo" → `/contact?subject=rubiscape-demo`
- **CTA Secondary:** "Talk to Sales" → `/contact?subject=rubiscape`

### S5 — Technology Foundation
- **Heading:** "Built on Open Source. Integrated with the Enterprise."
- **Subtitle:** "Open-source-first technology foundation ensuring flexibility, transparency, and zero vendor lock-in."
- Open-Source Core: Apache Spark, Kafka, Airflow, Flink · PyTorch, TensorFlow, scikit-learn · LangChain, LlamaIndex, Hugging Face · Streamlit, Grafana, Apache Superset · dbt, Great Expectations, OpenMetadata
- Enterprise Platforms: Snowflake (Snowpark, Cortex AI) · Microsoft Azure (Azure ML, OpenAI) · Databricks (MLflow, Unity Catalog) · AWS (SageMaker, Bedrock) · Rubiscape (Decision Intelligence)
- Strategic Alliances: Technology vendors (Microsoft, AWS, Snowflake, Databricks) · Data platform partners (Informatica, SAP) · HPC vendors · Academic institutions

### S6 — Enterprise R&D Extension
- **Eyebrow:** "Enterprise Engagement"
- **Heading:** "Your Extended AI Lab"
- **Body:** "Not every enterprise can build an AI research capability from scratch. Inteli-Labs operates as an extension of your R&D function — running experiments, building prototypes, and validating AI use cases with the speed and depth of a dedicated lab, without the overhead of building one."
- **Engagement modes:**
  - Innovation Sprint (2–4 weeks): "Rapid prototyping of an AI use case. From hypothesis to working prototype with a clear go/no-go recommendation." Best for: Validating a specific AI hypothesis or use case quickly
  - Co-Innovation Lab (Ongoing): "Embedded collaboration between your domain experts and our AI engineers. Joint ideation, experimentation, and IP co-creation." Best for: Enterprises building long-term AI capability with a partner
  - Academic Partnership (Semester / Annual): "Joint research programs with universities and research institutions. Access to emerging talent, published research, and pre-competitive R&D." Best for: Universities, research labs, and enterprises investing in foundational AI research

### S7 — Lab to Production Flow
- **Heading:** "From Lab to Production"
- **Body:** "Every accelerator, framework, and AI model template built in Inteli-Labs is battle-tested before it enters an engagement. Our delivery teams don't start from scratch — they start from validated IP. This is why Inteliment can promise faster time-to-value and lower TCO: the research has already been done."
- **Flow:** Inteli-Labs (Research & IP) → Inteliment Delivery (Delivery Teams) → Enterprise Client (Production)
- **CTA:** "See How Our Delivery Teams Work" → `/global-delivery`

### S8 — CTA
- **Heading:** "Break new ground with us."
- **Subtitle:** "Whether you're an enterprise looking for an AI R&D partner, an academic institution exploring collaboration, or a technology vendor seeking integration — Inteli-Labs is where it starts."
- **Three paths:**
  - "Enterprise R&D Partnership" → `/contact?subject=inteli-labs-enterprise`
  - "Academic Collaboration" → `/contact?subject=inteli-labs-academic`
  - "Technology Alliance" → `/contact?subject=inteli-labs-alliance`

---

## PAGE: INTELIMEHUB (InteliHub)
**File:** `src/pages/InteliHub.jsx`
**Route:** `/hub`
**SEO Title:** "InteliHub — Decision Intelligence Experience Centre"

### S1 — Hero
- **Eyebrow:** "InteliHub"
- **Headline:** "Your Decision Intelligence starting point."
- **Subtitle:** "Assess your DI maturity, quantify your ROI, see the platform in action, or talk to a specialist. All in one place."
- **CTA Primary:** "Take the Assessment" → `/assessment`
- **CTA Secondary:** "Talk to a Specialist" → `/contact`

### S2 — Four Ways to Engage
- **Eyebrow:** "Four Ways to Engage"
- **Heading:** "Choose your starting point."
- **Subtitle:** "Whether you're exploring, evaluating, or ready to build — InteliHub gives you the right tool for where you are."

| Experience | Tag | Description | CTA |
|-----------|-----|-------------|-----|
| DI Readiness Assessment | Free | "A structured 15-minute questionnaire that benchmarks your organisation's decision intelligence maturity across data, technology, people, and process. Get a personalised readiness score and a prioritised action plan." | Take the Assessment → /assessment |
| ROI Calculator | Interactive | "Quantify the financial impact of Decision Intelligence for your organisation. Input your current decision volumes, cycle times, and error rates — get a projected ROI range within minutes." | Calculate Your ROI → /roi-calculator |
| Rubiscape Live Demo | On Request | "See Inteliment's proprietary Rubiscape Decision Intelligence platform in action. Explore no-code ML pipelines, automated decision flows, and live dashboards — guided by one of our specialists." | Request a Demo → /contact?subject=rubiscape-demo |
| Talk to a DI Specialist | 30 Min | "Not sure where to start? Book a 30-minute conversation with a Decision Intelligence specialist. No pitch — just an honest conversation about your challenges and what's possible." | Book a Conversation → /contact |

### S3 — Decision Layers
| Layer | Sub-label | Description |
|-------|-----------|-------------|
| Operational | Real-time, high-volume | Automate repetitive decisions at scale — fraud flags, pricing updates, routing logic. |
| Tactical | Weekly, campaign-level | Optimise campaigns, resource allocation, and demand forecasting. |
| Strategic | Quarterly planning | Scenario modelling, portfolio decisions, and market entry analysis. |
| Autonomous | AI-driven, self-executing | AI agents that monitor, decide, and act without manual intervention. |

- **Link:** "Learn about Decision Intelligence →" → `/decision-intelligence`

### S4 — Proof Strip
| Metric | Label |
|--------|-------|
| 22+ | Years of Data Expertise |
| 500+ | Projects Delivered |
| 100+ | Enterprise Clients |
| 30–50% | Faster Time to Insight |

### S5 — CTA Banner
- **Title:** "Ready to build your decision advantage?"
- **Subtitle:** "Start with the assessment — understand where you stand and what to do next."
- **CTA:** "Take the DI Assessment" → `/assessment`

---

## PAGE: INTELI-ME (Careers landing)
**File:** `src/pages/InteliME.jsx`
**Route:** `/inteli-me`
**SEO Title:** "Inteli-Me — Careers at Inteliment"

### S1 — Hero
- **Eyebrow:** "Inteli-Me"
- **Headline:** "Build the Future of Decision Intelligence"
- **Subtitle:** "22 years of data mastery. 150+ specialists. 100+ global enterprises. If you care about craft, depth, and real-world impact — you belong here."
- **CTA Primary:** "View Open Roles" → `#open-roles`
- **CTA Secondary:** "Our Culture" → `#culture`

### S2 — Culture Values
**File:** `src/data/careers.js` — `cultureValues`
- **Eyebrow:** "Why Join Us"
- **Heading:** "Deep Work. Real Impact."
- **Subtitle:** "We don't hire for headcount. We hire for craft. Every project is a production engagement — not a prototype."

| Value | Description |
|-------|-------------|
| Deep Tech, Not Hype | "Work with Snowflake, Azure, Databricks, AWS, and the full open-source ML stack — PyTorch, Spark, Kafka, Airflow, LangChain, Hugging Face — on production-grade systems, not slide decks and proof-of-concept demos." |
| Impact at Scale | "Your work powers decisions for HSBC, Siemens, Volkswagen, Nvidia, and 100+ enterprises across banking, insurance, manufacturing, and telecom." |
| Growth Path | "From engineer to architect to practice lead. We invest in certifications (Azure, Snowflake, AWS, Databricks), training, and leadership development." |
| Global & Collaborative | "Pune HQ, Sydney, Singapore, and Europe. Hybrid work model. Cross-timezone collaboration on meaningful, outcome-driven work." |

### S3 — Campus Connect
- **Eyebrow:** "Campus Connect"
- **Heading:** "Where student ambition meets real-world data."
- **Subtitle:** "Inteliment runs structured internship and graduate programmes to bring exceptional students into Decision Intelligence careers."

| Program | Tag | Description |
|---------|-----|-------------|
| Decision Intelligence Internship | Ongoing | "Hands-on 6-month internship program for final-year engineering and MCA students. Work on live client data projects under senior engineer mentorship." |
| Graduate Accelerator | Annual Intake | "Structured 3-month onboarding for fresh graduates joining as junior engineers — bootcamp-style ramp on our technology stack, client delivery model, and DI methodology." |
| College Partnerships | Pune, India | "Active academic partnerships with engineering colleges across Pune for joint workshops, guest lectures, and talent pipeline development." |

- **Campus email:** campus@inteliment.com
- **Note:** "For campus collaboration and internship enquiries"

### S4 — Life at Inteliment
- **Heading:** "Where you'll work and who you'll work with."
- **Subtitle:** "Pune HQ. Sydney. Singapore. Hybrid. A team that builds serious things and has fun doing it."
- *⚠️ Photo gallery placeholder — images needed for: Delivery Centre Pune · Team Offsite 2024 · Inteli-Labs Research Session · Sydney Office · Hackathon Winners · All Hands 2025*

### S5 — Growth & Learning
- **Heading:** "We invest in the people who build our future."
- **Subtitle:** "Your growth is not a perk. It's how we stay ahead."

| Pillar | Description |
|--------|-------------|
| Certifications & Upskilling | "Sponsored certifications across Azure, Snowflake, Databricks, AWS, and Salesforce. Internal learning tracks, external conferences, and a dedicated learning budget per engineer." |
| Structured Career Progression | "Clear paths from analyst to lead, engineer to architect, and specialist to practice head. Regular performance reviews with defined outcomes — not vague appraisals." |
| Knowledge Culture | "Inteliment Research sessions, internal tech talks, brown-bag sessions, hackathons, and a culture where curiosity is rewarded — not just task completion." |

### S6 — Open Roles
**File:** `src/data/careers.js` — `openRolesPlaceholder`
*(Note: Will be replaced by Zoho Recruit integration)*

| Title | Department | Location | Type | Experience |
|-------|------------|---------|------|------------|
| Senior Data Engineer | Data Engineering | Pune, India | Full-time | 5–8 years |
| ML Engineer | Data Science & AI | Pune, India | Full-time | 3–6 years |
| Power BI / Tableau Developer | BI & Visualization | Pune, India | Full-time | 3–5 years |
| Snowflake Architect | Data Engineering | Pune, India | Full-time | 6–10 years |
| AI/LLM Developer | AI Decision Agents | Pune, India | Full-time | 2–5 years |
| Delivery Manager | Delivery | Sydney, Australia | Full-time | 10+ years |

- **Speculative CTA box:**
  - **Label:** "Don't See Your Role?"
  - **Heading:** "We're Always Looking for Exceptional Talent"
  - **Body:** "Outstanding data engineer, ML specialist, BI developer, or AI architect? We want to hear from you even if there's no current opening."
  - **Email CTA:** careers@inteliment.com

### S7 — CTA Banner
- **Title:** "Shape the Future of Enterprise AI"
- **Subtitle:** "22 years of data mastery. Now building the next chapter of Decision Intelligence."
- **CTA:** "Explore Open Roles" → `#open-roles`

---

## PAGE: NEWS
**File:** `src/pages/News.jsx` + `src/data/news.js`
**Route:** `/news`
**SEO Title:** "News — Inteliment"

### Hero
- **Eyebrow:** "Newsroom"
- **Headline:** "Latest from Inteliment"
- **Subtitle:** "Press releases, partnership announcements, milestones, and company updates."

### News Items (from `src/data/news.js`)
Categories: All · Company · Partnership · Event · Innovation · Milestone

| Date | Category | Title | Summary |
|------|----------|-------|---------|
| Apr 2026 | Company | Inteliment Launches Decision Intelligence Practice for GCC Clients | "Inteliment announces a dedicated Decision Intelligence practice focused on Global Capability Centres, offering full-stack DI deployment from data engineering to autonomous AI agents — with a methodology purpose-built for GCC operating models." |
| Nov 2025 | Partnership | Inteliment Achieves Snowflake Silver Partner Status | "Inteliment has been certified as a Snowflake Silver Partner, reflecting our deepening expertise in Snowflake-native data platforms and our track record of delivering Snowflake migrations and analytics solutions for enterprise clients across Australia, Europe, and India." |
| Aug 2025 | Event | Inteliment at Snowflake Summit 2025: Decision-Ready Data Platforms | "Inteliment participated in Snowflake Summit 2025, presenting our Decision Intelligence framework and demonstrating how Snowflake-native architectures serve as the foundation for enterprise DI deployments. Key sessions covered data vault 2.0, ML pipelines on Snowpark, and AI-ready data governance." |
| May 2025 | Innovation | Inteli-Labs Launches GenAI Agent Toolkit for Enterprise Decision Workflows | "Inteliment's dedicated AI research lab, Inteli-Labs, has released a production-ready GenAI agent toolkit — enabling enterprises to deploy decision-aware AI agents across supply chain, customer operations, and risk management workflows. The toolkit is built on LangChain, LlamaIndex, and Azure OpenAI." |
| Mar 2025 | Milestone | Inteliment Crosses 500 Project Milestone Across 100+ Enterprise Clients | "22 years after our founding, Inteliment has now delivered 500+ data and AI projects for over 100 enterprise clients across banking, insurance, manufacturing, telecom, and healthcare. The milestone reflects our commitment to production-grade delivery over proof-of-concept demos." |
| Dec 2024 | Partnership | Inteliment Expands Databricks ISV Partnership with New MLOps Accelerators | "Building on our existing Databricks ISV partnership, Inteliment has launched a new suite of MLOps accelerators on Databricks — covering automated feature engineering, model monitoring, and decision-layer integration. Available to enterprise clients on Azure and AWS." |

### LinkedIn CTA Box
- **Label:** "Stay Updated"
- **Heading:** "Follow us on LinkedIn"
- **Body:** "Get real-time updates, thought leadership, and event announcements from the Inteliment team."
- **CTA:** "Inteliment on LinkedIn" → https://www.linkedin.com/company/inteliment

### CTA Banner
- **Title:** "Media & Press Enquiries"
- **Subtitle:** "For press interviews, announcements, and media partnerships — reach out to our communications team."
- **CTA:** "Contact Us" → `/contact?subject=media-enquiry`

---

## PAGE: CSR
**File:** `src/pages/CSR.jsx`
**Route:** `/csr`
**SEO Title:** "CSR — Corporate Social Responsibility"

### S1 — Hero
- **Eyebrow:** "Corporate Social Responsibility"
- **Headline:** "Intelligence with Purpose"
- **Subtitle:** "We believe data and AI should serve humanity — not just the bottom line. Our CSR commitments span education, community, responsible AI, and environmental sustainability."

### S2 — Education
- **Eyebrow:** "Education"
- **Heading:** "Building the next generation of data talent."
- **Subtitle:** "Inteliment invests in education because the talent gap in data and AI is real — and we have the expertise to help close it."

| Initiative | Description |
|-----------|-------------|
| Data Literacy Workshops | "Free data literacy and analytics workshops for students at engineering colleges and vocational institutes in Pune. Covering data thinking, SQL fundamentals, and AI concepts." |
| Decision Intelligence Internship | "Structured 6-month internships for final-year students, providing hands-on experience on live enterprise data projects. Mentored by senior engineers." |
| Campus Career Sessions | "Annual career guidance sessions at partner colleges on data engineering, AI, and analytics career paths — helping students navigate their first years in the field." |

### S3 — Community
| Initiative | Description |
|-----------|-------------|
| Digital Inclusion | "Supporting underrepresented communities in accessing digital skills through partnerships with local NGOs and skill development organisations in Maharashtra." |
| Open-Source Contributions | "Inteliment engineers contribute to open-source data and AI projects — sharing tools, frameworks, and knowledge with the global developer community." |

### S4 — Responsible AI
| Principle | Description |
|-----------|-------------|
| Fairness | "Our AI models are tested for demographic bias before deployment. Clients receive bias audit reports as part of production delivery." |
| Transparency | "We build explainable AI systems where decisions can be traced, audited, and challenged — not black-box outputs." |
| Accountability | "Every AI system we build includes human-in-the-loop checkpoints for high-stakes decisions. Governance frameworks are part of every engagement." |
| Privacy by Design | "Data minimisation, anonymisation, and access controls are built into our architectures from day one — not bolted on after the fact." |

### S5 — Sustainability
- Cloud-native architectures reduce on-premise hardware footprint
- Sustainability KPI dashboards for client ESG reporting
- Paperless project delivery — all documentation, reporting, and collaboration is digital
- Efficient code and pipeline design to minimise compute waste on cloud platforms

### S6 — CTA Banner
- **Title:** "Partner With Us on a Social Initiative"
- **Subtitle:** "If you share our vision for responsible, inclusive, and sustainable AI — we'd love to hear from you."
- **CTA:** "Get in Touch" → `/contact?subject=csr-partnership`

---

## PAGE: AUSTRALIA
**File:** `src/pages/Australia.jsx` + `src/data/regions/australia.js`
**Route:** `/australia`
**SEO Title:** "Decision Intelligence for Australian Enterprises | Inteliment Australia"

### S1 — Hero
*(Content from `australiaData.hero`)*
- **CTA Primary:** "Talk to Our Sydney Team" → `/contact?region=australia`
- **CTA Secondary:** "See Our Work" → `#impact`

### S2 — Sydney Practice
- **Heading:** "Sydney-based. Built for ANZ enterprises."
- **Regulatory expertise:** APRA CPS 234 compliance · Privacy Act 1988 aligned · Australian data residency · CDR & Open Banking ready

### S3 — What We Deliver
- **Heading:** "The Full Decision Intelligence Stack — For ANZ."
- **Subtitle:** "From legacy modernisation to autonomous AI. All four layers, delivered by a team that understands the ANZ enterprise environment."
*(Solutions from `australiaData.solutions`)*

### S7 — Global Backing
| Office | Role |
|--------|------|
| 🇦🇺 Sydney, Australia | Commercial & Architecture Lead |
| 🇮🇳 Pune, India | Delivery Centre (AEST-aligned) |
| 🇸🇬 Singapore | APAC Regional Office |

### CTA Banner
- **Title:** "Ready to discuss your Australian data and AI initiative?"
- **Subtitle:** "Talk to our Sydney team. No offshore handoff — you deal with principals."
- **CTA:** "Talk to Our Sydney Team" → `/contact?region=australia`

---

## PAGE: CONTACT
**File:** `src/pages/Contact.jsx`
**Route:** `/contact`
**SEO Title:** "Contact Us"

### Hero
- **Eyebrow:** "Get In Touch"
- **Headline:** "Let's Talk Decision Intelligence"
- **Subtitle:** "Whether you're exploring DI for the first time or ready to start building, we're here to help."

### Three Intake Paths
| ID | Title | Description |
|----|-------|-------------|
| assessment | Book a DI Assessment | "Free 45-minute session with a senior DI architect to assess your decision maturity." |
| project | Discuss a Project | "Share your data challenge and get a proposed approach from our team." |
| partnership | Partnership Inquiry | "Technology partners, referral partners, or channel partners." |

### Assessment Path Content
- **Body:** "Book a free 45-minute Decision Intelligence Assessment session with one of our senior architects. We'll review your current data landscape and identify your biggest DI opportunities."
- **What to expect:**
  - "Review of your current data infrastructure"
  - "Identification of key decision latency points"
  - "Recommended DI maturity path"
  - "Technology fit assessment"
- **Button:** "Take the Online Assessment First" → `/assessment`
- **Email:** insights@inteliment.com

### Project Form Fields
Full Name · Work Email · Company · Your Role · Industry (dropdown) · What Are You Looking For? (dropdown) · Timeline (dropdown) · Tell Us About Your Project (textarea) · Consent checkbox

**Inquiry Types dropdown:**
Decision Intelligence Consulting · Data Engineering Services · AI/ML Solutions · BI & Dashboard Development · GCC / Dedicated Team Setup · Rubiscape Platform Demo · Innovation Sprint / PoC · Partnership Inquiry · General Inquiry

**Timeline options:** ASAP (< 3 months) · 3–6 months · 6–12 months · Exploring

**Success message:** "Message Sent! Our team will be in touch within 1 business day."

### Contact Details (sidebar)
- Email: insights@inteliment.com
- Phone: (020) 6911-5600
- WhatsApp: +91 70581 42400
- 🇮🇳 Pune, India — HQ & Delivery Centre — Baner
- 🇦🇺 Sydney, Australia — APAC Practice
- 🇸🇬 Singapore — SEA Office

### Response Commitment
| Commitment | SLA |
|-----------|-----|
| Initial response | < 4 business hours |
| Assessment scheduling | < 24 hours |
| Proposal turnaround | 3–5 business days |

---

## PAGE: ASSESSMENT
**File:** `src/pages/Assessment.jsx`
**Route:** `/assessment`
**SEO Title:** "Data Maturity Assessment"
**SEO Description:** "Free 5-question Decision Intelligence maturity assessment. Discover your data maturity tier and get a personalized DI roadmap."

### Page Header
- **Badge:** "Free Assessment · 2 Minutes"
- **Headline:** "Diagnose Your Decision Latency"
- **Subtitle:** "Answer 5 questions to discover your data maturity tier and get a personalised Decision Intelligence roadmap."
*(Interactive MaturityAssessment component)*

### Disclaimer
"Disclaimer: This assessment is a self-reported diagnostic tool designed to provide a general indication of your organisation's Decision Intelligence maturity. Results are based on your responses and reflect indicative positioning only. They should not be treated as a formal audit or definitive evaluation. For a detailed assessment, contact Inteliment to arrange a structured DI Readiness Workshop."

---

## PAGE: ROI CALCULATOR
**File:** `src/pages/ROICalculatorPage.jsx`
**Route:** `/roi-calculator`
**SEO Title:** "Decision Latency ROI Calculator"

### Page Header
- **Badge:** "ROI Calculator"
- **Headline:** "What Is Decision Latency Costing You?"
- **Subtitle:** "Adjust the inputs to estimate the annual cost of slow decisions — and the ROI of Decision Intelligence."
*(Interactive ROICalculator component)*

### Disclaimer
"Disclaimer: The figures produced by this calculator are illustrative estimates based on industry benchmarks and the inputs you provide. They are intended for indicative purposes only and do not represent a guarantee of financial outcomes. Actual results will vary based on your specific context, implementation approach, and organisational factors. Inteliment accepts no liability for decisions made on the basis of these estimates."

---

## PAGE: SOLUTIONS
**File:** `src/pages/Solutions.jsx`
**Route:** `/solutions`
**SEO Title:** "Solutions"
**SEO Description:** "Inteliment's Decision Intelligence solutions — from data engineering to AI decision agents. Five practice areas built on 22 years of expertise."

### Hero
- **Eyebrow:** "Solutions"
- **Headline:** "The Complete Decision Intelligence Stack"
- **Subtitle:** "Five interconnected practice areas that take you from raw data to autonomous decisions."
- **CTA:** "Find Your Starting Point" → `/assessment`

### Platform Statement
"**Platform-agnostic. Open-source fluent.** Whether your stack is Snowflake or Spark, Azure or Airflow, Power BI or Superset — we engineer Decision Intelligence on the tools that fit your architecture, not ours."

### Bridge Framing
- **Eyebrow:** "From Business Decisions to Technical Delivery"
- **Heading:** "Decision Intelligence is built on four layers. Each layer maps to a practice we've refined over 22 years."
- Layer → Practice mapping:
  - Data → Data Engineering
  - Insights → Data Science & ML · BI & Visualization
  - Decisions → AI Decision Agents
  - Actions → Enterprise DI System (All layers)

### Practice Areas
**File:** `src/data/solutions.js` — `practiceAreas`
*(Five solution cards linking to `/solutions/[slug]`)*

### Maturity Tiers
**File:** `src/data/solutions.js` — `maturityTiers`
- **Heading:** "Meet You Where You Are."
*(Five tiers with colour-coded left borders)*
- **CTA:** "Find Your Starting Point" → `/assessment`

### CTA Banner
- **CTA:** "Discuss Your Needs"

---

## PAGE: INDUSTRIES
**File:** `src/pages/Industries.jsx`
**Route:** `/industries`
**SEO Title:** "Industries"

### Hero
- **Eyebrow:** "Industries"
- **Headline:** "Decision Intelligence for Your Industry"
- **Subtitle:** "Domain expertise built over 22 years. DI implementations that understand your specific data, decisions, and outcomes."
- **CTA:** "Find Your Industry" → `#industries`

### Industries Grid
**File:** `src/data/industries.js`
*(Cards link to `/industries/[slug]` — Insurance, Banking, Healthcare, Manufacturing, Energy, Telecom, Automotive, Retail, Financial Services, Technology & SaaS, Logistics, Media)*

---

## PAGE: LEADERSHIP
**File:** `src/pages/Leadership.jsx`
**Route:** `/about/leadership`
**SEO Title:** "Leadership Team"

### Hero
- **Eyebrow:** "Our People"
- **Headline:** "The Team Behind the Intelligence"
- **Subtitle:** "Two decades of building — led by the same vision since 2004."

### Founders Section (same data as About page)
*(See About page — S3)*

### Leadership Team
- **Eyebrow:** "Senior Leadership"
- **Heading:** "The Leadership Team"
- **Subtitle:** "Experienced leaders across delivery, technology, sales, and operations — driving Inteliment's global practice."
*(Same team as About page S4 — see above)*

### CTA Banner
- **Title:** "Join Our Team"
- **Subtitle:** "We're always looking for exceptional people who want to build the future of Decision Intelligence."
- **CTA:** "View Open Roles" → `/careers`

---

## PAGE: CAREERS
**File:** `src/pages/Careers.jsx`
**Route:** `/careers`
**SEO Title:** "Careers at Inteliment"

### Hero
- **Eyebrow:** "Careers at Inteliment"
- **Headline:** "Build the Future of Decision Intelligence"
- **Subtitle:** "Join a team of 150+ specialists who've spent 22 years solving the world's hardest data problems — and are now defining how enterprises make decisions with AI."
- **CTA Primary:** "View Open Roles" → `#open-roles`
- **CTA Secondary:** "Our Culture" → `#culture`

*(Same culture values, open roles, and CTA as InteliME page — see above)*
*(Note: Zoho Recruit integration pending — embed will replace placeholder roles list)*

### Speculative Application CTA
- **Label:** "Don't See Your Role?"
- **Heading:** "We're Always Looking for Exceptional Talent"
- **Body:** "If you're an outstanding data engineer, ML specialist, BI developer, or AI architect — we want to hear from you even if there's no matching open role."
- **Email:** careers@inteliment.com

### CTA Banner
- **Title:** "Shape the Future of Enterprise AI"
- **Subtitle:** "22 years of data mastery. Now building the next chapter of Decision Intelligence."
- **CTA:** "Explore Open Roles" → `#open-roles`

---

## PAGE: IMPACT STORIES
**File:** `src/pages/Impact.jsx`
**Route:** `/impact`
**SEO Title:** "Impact Stories"
**SEO Description:** "Real Decision Intelligence results. Case studies from insurance, banking, manufacturing, and more."

### Hero
- **Eyebrow:** "Impact Stories"
- **Headline:** "Decision Intelligence in Practice"
- **Subtitle:** "Real engagements. Real results. From actuarial automation to cloud migrations — see how we deliver."

### Stories Grid
**File:** `src/data/impactStories.js`
*(Cards link to `/impact/[slug]` — shows industry badge, tech stack tags, title, subtitle)*

---

## PAGE: INSIGHTS (DI Intelligence Hub)
**File:** `src/pages/Insights.jsx`
**Route:** `/insights`
**SEO Title:** "DI Intelligence Hub"
**SEO Description:** "Thought leadership on Decision Intelligence, data engineering, AI agents, and enterprise analytics from the Inteliment team."

### Hero
- **Eyebrow:** "Intelligence Hub"
- **Headline:** "Decision Intelligence Insights"
- **Subtitle:** "Frameworks, technical roadmaps, and CXO briefings from our 22-year data intelligence practice."

### Articles Grid
**File:** `src/data/articles.js`
*(Filterable by category; shows featured article first; links to `/insights/[slug]`)*

### CTA Banner
- **Title:** "Ready to implement what you've read?"
- **CTA:** "Talk to Our Team" → `/contact`

---

## PAGE: PRIVACY POLICY
**File:** `src/pages/Privacy.jsx`
**Route:** `/privacy`
**SEO Title:** "Privacy Policy"
**Last updated:** April 2026

### Key Points
- **Data Controller:** Inteliment Technologies India Pvt. Ltd., House 106 Baner, Pune 411045, Maharashtra, India
- **Compliance:** GDPR (EEA) · Australian Privacy Act 1988 · India DPDP Act 2023
- **Third-party processors:** Zoho CRM · Zoho Campaigns · Google Analytics GA4 · Google reCAPTCHA
- **Data retention:** Enquiry data — 24 months; Client data — 7 years; Analytics — 14 months
- **Contact:** insights@inteliment.com
- **Rights:** Access · Rectification · Erasure · Restriction · Portability · Objection · Withdraw consent

*(Full legal text preserved in source file — do not rewrite legal sections without legal review)*

---

## PAGE: TERMS OF SERVICE
**File:** `src/pages/Terms.jsx`
**Route:** `/terms`
**SEO Title:** "Terms of Service"
**Last updated:** April 2026

### Key Points
- **Company:** Inteliment Technologies India Pvt. Ltd., House 106 Baner, Pune 411045, Maharashtra, India
- **Governing Law:** India — Maharashtra courts (Pune jurisdiction)
- **Liability cap:** INR 10,000
- **Prohibited:** Scraping, bots, unauthorised access, IP reproduction

*(Full legal text preserved in source file — do not rewrite legal sections without legal review)*

---

## PAGE: COOKIE POLICY
**File:** `src/pages/CookiePolicy.jsx`
**Route:** `/cookies`
**SEO Title:** "Cookie Policy"
**Last updated:** April 2026

### Cookie Types
1. **Strictly Necessary** — `inteliment_cookie_consent` (localStorage, persistent)
2. **Analytics** — Google Analytics / GA4 (anonymised)
3. **Functional** — Region preference, Assessment progress
4. **Marketing** — LinkedIn Insight Tag, Google Ads

### Cookie Consent Banner Text
- "Accept All" → sets all cookies
- "Necessary Only" → strictly necessary only

*(Full legal text preserved in source file — do not rewrite legal sections without legal review)*

---

## SHARED COMPONENTS — COPY REFERENCE

### CTABanner (default values)
**File:** `src/components/sections/CTABanner.jsx`
- Default title: (varies per usage — see individual pages)
- Default CTA: "Discuss Your Needs"
- Default URL: `/contact`

### HeroSection variants
- `full` — large hero with gradient bg
- `compact` — smaller hero for interior pages

### Key Reusable Phrases
- "22 years of data mastery"
- "150+ Decision Intelligence specialists"
- "100+ enterprise clients"
- "500+ projects delivered"
- "Production-grade, not proof-of-concept"
- "From data engineering to autonomous AI"
- "Platform-agnostic. Open-source fluent."
- "Faster, better, aligned decisions"

---

## CONTENT TODO LIST (Images & Integrations)

### Photos needed
- [ ] `/images/team/prashant-pansare.jpg` — Dr. Prashant Pansare (founder)
- [ ] `/images/team/anand-pansare.jpg` — Anand Pansare (co-founder)
- [ ] `/images/team/trupti-pansare.jpg` + all leadership team members
- [ ] `/images/about/values-elements.png` — Values visual (Yogic elements)
- [ ] Life at Inteliment gallery (6 photos): Delivery Centre Pune · Team Offsite 2024 · Inteli-Labs Research Session · Sydney Office · Hackathon Winners · All Hands 2025

### Award logos needed
- [ ] All 13 award logos in `/images/awards/[award-name].png`

### Integrations pending
- [ ] Zoho CRM — Contact form submission (`insights@inteliment.com` fallback active)
- [ ] Zoho Recruit — Careers open roles embed (placeholder list active)
- [ ] Google reCAPTCHA — Form spam protection
- [ ] LinkedIn URLs for founders/leadership team

### Social links to verify
- [ ] LinkedIn: https://www.linkedin.com/company/inteliment
- [ ] Twitter: https://twitter.com/inteliment
- [ ] YouTube: https://www.youtube.com/@inteliment
- [ ] Instagram: https://www.instagram.com/inteliment
- [ ] Facebook: https://www.facebook.com/inteliment
