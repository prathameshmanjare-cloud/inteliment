export const assessmentQuestions = [
  {
    id: 'q1',
    step: 1,
    question: 'How is your enterprise data currently organized?',
    type: 'radio',
    options: [
      { id: 'a', label: 'Centralized data warehouse with BI dashboards', score: 5 },
      { id: 'b', label: 'Data warehouse but limited BI adoption', score: 4 },
      { id: 'c', label: 'Multiple disconnected data systems', score: 3 },
      { id: 'd', label: 'Starting our data / analytics journey', score: 2 },
      { id: 'e', label: 'Significant unstructured data (emails, docs, logs)', score: 1 },
    ],
  },
  {
    id: 'q2',
    step: 2,
    question: 'How do your teams typically make critical business decisions?',
    type: 'radio',
    options: [
      { id: 'a', label: 'Based on real-time dashboards and automated alerts', score: 5 },
      { id: 'b', label: 'Based on periodic reports (weekly / monthly)', score: 3 },
      { id: 'c', label: 'Based on experience and intuition with some data', score: 2 },
      { id: 'd', label: 'Mostly gut feel, data is hard to access', score: 1 },
    ],
  },
  {
    id: 'q3',
    step: 3,
    question: 'What is your primary data / analytics challenge?',
    type: 'radio',
    options: [
      { id: 'a', label: "We have data but can't get actionable insights fast enough", score: 4 },
      { id: 'b', label: 'Our data is siloed across multiple systems', score: 3 },
      { id: 'c', label: 'We need predictive capabilities (churn, demand, risk)', score: 4 },
      { id: 'd', label: 'We need to automate decision-making processes', score: 5 },
      { id: 'e', label: 'We need to process unstructured data at scale', score: 2 },
    ],
  },
  {
    id: 'q4',
    step: 4,
    question: 'Which platforms are part of your current data ecosystem?',
    type: 'multiselect',
    subtitle: 'Select all that apply',
    options: [
      { id: 'snowflake', label: 'Snowflake', score: 0 },
      { id: 'azure', label: 'Azure / Microsoft', score: 0 },
      { id: 'databricks', label: 'Databricks', score: 0 },
      { id: 'aws', label: 'AWS', score: 0 },
      { id: 'sap', label: 'SAP', score: 0 },
      { id: 'informatica', label: 'Informatica', score: 0 },
      { id: 'tableau', label: 'Tableau / Power BI', score: 0 },
      { id: 'other', label: 'Other / None', score: 0 },
    ],
  },
  {
    id: 'q5',
    step: 5,
    question: 'What is your timeline for improving decision-making capabilities?',
    type: 'radio',
    options: [
      { id: 'a', label: 'Immediate, within 3 months', score: 5 },
      { id: 'b', label: 'Near-term, 3 to 6 months', score: 4 },
      { id: 'c', label: 'Planning phase, 6 to 12 months', score: 3 },
      { id: 'd', label: 'Exploring options, no set timeline', score: 2 },
    ],
  },
]

export const maturityTierMap = [
  {
    minScore: 19,
    tier: 1,
    name: 'Mature',
    color: '#10B981',
    description:
      'Your data infrastructure is strong. You are ready for AI Decision Agents and prescriptive intelligence on top of existing systems.',
  },
  {
    minScore: 16,
    tier: 2,
    name: 'Advancing',
    color: '#00B4D8',
    description:
      'You have solid foundations. Focus: build the intelligence layer with predictive models and conversational AI.',
  },
  {
    minScore: 13,
    tier: 3,
    name: 'Developing',
    color: '#F59E0B',
    description:
      'Your data exists but is not unified. Priority: consolidate into an enterprise data architecture, then layer on analytics and AI.',
  },
  {
    minScore: 9,
    tier: 4,
    name: 'Foundation',
    color: '#F97316',
    description:
      'You are building from the ground up. The opportunity: design a decision-intelligent architecture from day one, avoiding legacy debt.',
  },
  {
    minScore: 0,
    tier: 5,
    name: 'Emerging',
    color: '#E63946',
    description:
      'Significant unstructured data and manual processes. Start with operational AI agents to structure data, then build toward full DI.',
  },
]
