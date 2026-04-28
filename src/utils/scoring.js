import { maturityTierMap } from '@/data/assessmentQuestions'
import { maturityTiers } from '@/data/solutions'

// Score mapping per question and option index (0-based)
const Q1_SCORES = [5, 4, 3, 2, 1]
const Q2_SCORES = [5, 3, 2, 1]
const Q3_SCORES = [4, 3, 4, 5, 2]
const Q5_SCORES = [5, 4, 3, 2]

export function calculateMaturityScore(answers) {
  // Options are letter IDs ('a','b','c'…); convert to 0-based index
  const toIdx = (id) => (typeof id === 'string' ? id.charCodeAt(0) - 97 : id)

  const q1Score = Q1_SCORES[toIdx(answers.q1)] ?? 3
  const q2Score = Q2_SCORES[toIdx(answers.q2)] ?? 3
  const q3Score = Q3_SCORES[toIdx(answers.q3)] ?? 3
  const q5Score = Q5_SCORES[toIdx(answers.q5)] ?? 3

  const totalScore = q1Score + q2Score + q3Score + q5Score

  // Find tier, sorted descending, first match wins
  const tierEntry = maturityTierMap.find((t) => totalScore >= t.minScore) || maturityTierMap[maturityTierMap.length - 1]

  // Map to tier index (tier 1 = index 0)
  const tierData = maturityTiers[tierEntry.tier - 1]

  // Radar data, 5 dimensions derived from question scores
  const radarData = [
    { subject: 'Data Foundation', score: q1Score * 20 },
    { subject: 'Decision Speed', score: q2Score * 20 },
    { subject: 'Analytics Maturity', score: q3Score * 20 },
    { subject: 'AI Readiness', score: Math.round((q1Score + q3Score) / 2) * 20 },
    { subject: 'Strategic Urgency', score: q5Score * 20 },
  ]

  return {
    totalScore,
    tier: tierEntry.tier,
    tierName: tierEntry.name,
    tierColor: tierEntry.color,
    tierDescription: tierEntry.description,
    tierData,
    radarData,
    platforms: answers.q4 || [],
    urgency: Q5_SCORES.indexOf(q5Score),
  }
}
