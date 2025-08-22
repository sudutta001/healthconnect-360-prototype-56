import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, AlertTriangle, Heart, Shield } from "lucide-react";

interface HealthMapProps {
  onNavigate: (view: "hero" | "roleSelection" | "dashboard" | "fullMap" | "emergencyReport" | "virtualConsultation" | "findResources" | "communityReport" | "healthEducation" | "scheduleAppointment" | "medoChat") => void;
}

const healthFacilities = [
  { id: 1, name: "General Hospital", type: "hospital", status: "active", x: 25, y: 30 },
  { id: 2, name: "Community Clinic", type: "clinic", status: "active", x: 60, y: 45 },
  { id: 3, name: "Emergency Center", type: "emergency", status: "busy", x: 40, y: 70 },
  { id: 4, name: "Mental Health Center", type: "mental", status: "active", x: 80, y: 25 },
  { id: 5, name: "Vaccination Site", type: "clinic", status: "active", x: 15, y: 60 },
];

const alerts = [
  { id: 1, type: "outbreak", message: "Flu outbreak reported", x: 35, y: 55, severity: "high" },
  { id: 2, type: "shortage", message: "Medicine shortage", x: 70, y: 40, severity: "medium" },
];

const HealthMap = ({ onNavigate }: HealthMapProps) => {
  const getIconForType = (type: string) => {
    switch (type) {
      case "hospital": return Heart;
      case "clinic": return Shield;
      case "emergency": return AlertTriangle;
      case "mental": return Heart;
      default: return MapPin;
    }
  };

  const getColorForStatus = (status: string) => {
    switch (status) {
      case "active": return "bg-success";
      case "busy": return "bg-warning";
      case "offline": return "bg-muted";
      default: return "bg-primary";
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Health Resource Map</h3>
          <Button variant="outline" size="sm" onClick={() => onNavigate("fullMap")}>
            View Full Map
          </Button>
        </div>
        
        {/* Interactive Map Area */}
        <div className="relative h-64 bg-gradient-subtle rounded-lg border overflow-hidden">
          {/* Background map pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Health Facilities */}
          {healthFacilities.map((facility) => {
            const IconComponent = getIconForType(facility.type);
            return (
              <div
                key={facility.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: `${facility.x}%`, top: `${facility.y}%` }}
              >
                <div className={`w-8 h-8 ${getColorForStatus(facility.status)} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
                  <IconComponent className="h-4 w-4 text-white" />
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                  <div className="bg-card text-foreground text-xs rounded px-2 py-1 shadow-lg border whitespace-nowrap">
                    {facility.name}
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Health Alerts */}
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ left: `${alert.x}%`, top: `${alert.y}%` }}
            >
              <div className={`w-6 h-6 ${alert.severity === 'high' ? 'bg-destructive' : 'bg-warning'} rounded-full flex items-center justify-center shadow-lg animate-pulse`}>
                <AlertTriangle className="h-3 w-3 text-white" />
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                <div className="bg-card text-foreground text-xs rounded px-2 py-1 shadow-lg border whitespace-nowrap">
                  {alert.message}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span>Active Facilities</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span>High Capacity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
            <span>Health Alerts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-muted rounded-full"></div>
            <span>Offline</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HealthMap;