import Web3Navbar from "./components/Navbar";
import AuraBackground from "./components/AuraBackground";
import Web3Hero from "./components/Hero";
// These will be the next sections we build:
import ProjectGrid from "./components/ProjectGrid";
import TechStack from "./components/TechStack";
import Writing from "./components/Writing";
import Web3Footer from "./components/Web3Footer"; 

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-[#00F0FF] selection:text-black">
      {/* 1. The Global Background (Fixed) */}
      <AuraBackground />

      {/* 2. Navigation */}
      <Web3Navbar />

      {/* 3. The Hero - Main Entrance */}
      <Web3Hero />

      {/* 4. The Content Sections (Coming Next) */}
      <div className="relative z-10">
        <ProjectGrid />
        <TechStack />
      </div>
      <Writing />

      {/* 5. The Footer */}
      <Web3Footer />
    </main>
  );
}