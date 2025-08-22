import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import HealthMap from "@/components/HealthMap";

interface FullMapProps {
  onBack: () => void;
}

const FullMap = ({ onBack }: FullMapProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Health Resource Map</h1>
        </div>
        <div className="h-[calc(100vh-200px)]">
          <HealthMap onNavigate={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default FullMap;