import SideNav from '@/components/nav/SideNav';
import Hero from '@/components/sections/Hero';
import ExecutiveSummary from '@/components/sections/ExecutiveSummary';
import ProductOverview from '@/components/sections/ProductOverview';
import PrivateSectorGTM from '@/components/sections/PrivateSectorGTM';
import FederalGTM from '@/components/sections/FederalGTM';
import Roadmap2026 from '@/components/sections/Roadmap2026';
import MarketingPlan from '@/components/sections/MarketingPlan';
import Team from '@/components/sections/Team';
import Partnership from '@/components/sections/Partnership';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SideNav />
      <Hero />
      <ExecutiveSummary />
      <ProductOverview />
      <PrivateSectorGTM />
      <FederalGTM />
      <Roadmap2026 />
      <MarketingPlan />
      <Team />
      <Partnership />
    </main>
  );
}
