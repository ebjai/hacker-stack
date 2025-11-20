import LeadHackerHero from "../components/LeadHacker/LeadHackerHero";
import LeadPipeline3D from "../components/LeadHacker/LeadPipeline3D";
import Agents from "../components/LeadHacker/Agents";
import NeonHologram from "../components/LeadHacker/NeonHologram";

export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-24 pt-20 md:px-8">
      <LeadHackerHero />
      <LeadPipeline3D />
      <Agents />
      <NeonHologram />
    </main>
  );
}
