import { useState } from "react";
import { ClassSelector } from "@/components/ClassSelector";
import { BiomeMap } from "@/components/BiomeMap";
import { BiomeDetailPanel } from "@/components/BiomeDetailPanel";
import { StudentSidebar } from "@/components/StudentSidebar";
import { Biome } from "@/components/BiomeTile";

const Index = () => {
  const [selectedClass, setSelectedClass] = useState("class-a");
  const [selectedBiome, setSelectedBiome] = useState<Biome | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleBiomeClick = (biome: Biome) => {
    if (biome.unlocked) {
      setSelectedBiome(biome);
      setIsPanelOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ClassSelector selectedClass={selectedClass} onClassChange={setSelectedClass} />
      
      <div className="flex-1 flex flex-col lg:flex-row">
        <main className="flex-1 overflow-y-auto">
          <BiomeMap onBiomeClick={handleBiomeClick} />
        </main>
        
        <StudentSidebar />
      </div>

      <BiomeDetailPanel
        biome={selectedBiome}
        open={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </div>
  );
};

export default Index;
