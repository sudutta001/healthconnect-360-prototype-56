import { 
  AlertTriangle, 
  Video, 
  FileText, 
  MapPin, 
  Calendar, 
  MessageSquare,
  Stethoscope,
  Users,
  Heart,
  ClipboardCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const quickActions = [
  {
    id: "emergency",
    title: "Report Emergency",
    description: "Report urgent health situations",
    icon: AlertTriangle,
    variant: "emergency" as const,
    urgent: true
  },
  {
    id: "consultation",
    title: "Virtual Consultation",
    description: "Connect with healthcare providers",
    icon: Video,
    variant: "health" as const
  },
  {
    id: "resources",
    title: "Find Resources",
    description: "Locate nearby health services",
    icon: MapPin,
    variant: "wellness" as const
  },
  {
    id: "report",
    title: "Community Report",
    description: "Report community health issues",
    icon: FileText,
    variant: "default" as const
  },
  {
    id: "education",
    title: "Health Education",
    description: "Access wellness programs",
    icon: Heart,
    variant: "secondary" as const
  },
  {
    id: "schedule",
    title: "Schedule Appointment",
    description: "Book health checkups",
    icon: Calendar,
    variant: "outline" as const
  },
  {
    id: "medochat",
    title: "Med-o-Chat",
    description: "Health chat assistant",
    icon: MessageSquare,
    variant: "wellness" as const
  }
];

interface QuickActionsProps {
  role: string;
  onNavigate: (view: "hero" | "roleSelection" | "dashboard" | "fullMap" | "emergencyReport" | "virtualConsultation" | "findResources" | "communityReport" | "healthEducation" | "scheduleAppointment" | "medoChat") => void;
}

const QuickActions = ({ role, onNavigate }: QuickActionsProps) => {
  const getFilteredActions = () => {
    switch (role) {
      case "provider":
        return [
          { ...quickActions[1], title: "Start Consultation" },
          { id: "patients", title: "Manage Patients", description: "View patient records", icon: Users, variant: "health" as const },
          { id: "diagnosis", title: "Medical Tools", description: "Access diagnostic aids", icon: Stethoscope, variant: "wellness" as const },
          quickActions[0],
          quickActions[3],
          quickActions[5]
        ];
      case "ngo":
        return [
          { id: "campaign", title: "Health Campaign", description: "Manage health programs", icon: ClipboardCheck, variant: "wellness" as const },
          quickActions[2],
          quickActions[3],
          quickActions[4],
          quickActions[0],
          { id: "volunteers", title: "Coordinate Volunteers", description: "Manage volunteer network", icon: Users, variant: "secondary" as const }
        ];
      case "admin":
        return [
          { id: "monitor", title: "Health Monitoring", description: "Track health trends", icon: ClipboardCheck, variant: "health" as const },
          quickActions[2],
          quickActions[3],
          { id: "analytics", title: "Health Analytics", description: "View health data insights", icon: FileText, variant: "wellness" as const },
          quickActions[0],
          { id: "manage", title: "Resource Management", description: "Manage health infrastructure", icon: MapPin, variant: "secondary" as const }
        ];
      default:
        return quickActions;
    }
  };

  const actions = getFilteredActions();

  const handleActionClick = (actionId: string) => {
    switch (actionId) {
      case "emergency":
        onNavigate("emergencyReport");
        break;
      case "consultation":
        onNavigate("virtualConsultation");
        break;
      case "resources":
        onNavigate("findResources");
        break;
      case "report":
        onNavigate("communityReport");
        break;
      case "education":
        onNavigate("healthEducation");
        break;
      case "schedule":
        onNavigate("scheduleAppointment");
        break;
      case "medochat":
        onNavigate("medoChat");
        break;
      default:
        console.log(`Action ${actionId} clicked`);
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action) => {
            const IconComponent = action.icon;
            return (
              <Button
                key={action.id}
                variant={action.variant}
                className={`h-auto p-4 flex-col items-start text-left space-y-2 ${
                  action.urgent ? 'animate-pulse-health' : ''
                }`}
                onClick={() => handleActionClick(action.id)}
              >
                <div className="flex items-center gap-2 w-full">
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{action.title}</span>
                </div>
                <p className="text-xs opacity-90">{action.description}</p>
              </Button>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default QuickActions;