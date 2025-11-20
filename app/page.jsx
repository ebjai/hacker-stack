import LeadHackerHero from "./components/LeadHacker/LeadHackerHero.jsx";
import LeadPipeline3D from "./components/LeadHacker/LeadPipeline3D.jsx";
import Agents from "./components/LeadHacker/Agents.jsx";
import NeonHologram from "./components/LeadHacker/NeonHologram.jsx";

export default function Page() {
  return (
    <div className="min-h-screen">
      <LeadHackerHero />
      <LeadPipeline3D />
      <Agents />
      <NeonHologram />
    </div>
  );
}
