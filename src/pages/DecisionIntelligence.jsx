import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/di/sections/HeroSection';
import DifferenceSection from '../components/di/sections/DifferenceSection';
import DecisionLandscapeSection from '../components/di/sections/DecisionLandscapeSection';
import EquippedAdvantageSection from '../components/di/sections/EquippedAdvantageSection';
import AnalyticsEvolutionSection from '../components/di/sections/AnalyticsEvolutionSection';
import EngagementModelsSection from '../components/di/sections/EngagementModelsSection';

export default function DecisionIntelligence() {
  return (
    <>
      <Helmet>
        <title>Inteliment — Decision Intelligence Platform | From Data to Decisions</title>
        <meta
          name="description"
          content="Move beyond dashboards. Inteliment's Decision Intelligence platform transforms your data into actionable recommendations, bridging the gap between knowing and acting."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Inteliment — Decision Intelligence Platform" />
        <meta property="og:description" content="Your dashboards tell you what happened. Decision Intelligence tells you what to do next." />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="relative">
        <HeroSection />
        <DifferenceSection />
        <DecisionLandscapeSection />
        <EquippedAdvantageSection />
        <AnalyticsEvolutionSection />
        <EngagementModelsSection />
      </main>
    </>
  );
}
