import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Stethoscope, 
  Users, 
  Heart, 
  Shield,
  ChevronRight 
} from "lucide-react";

const roles = [
  {
    id: "citizen",
    name: "Citizen / Patient",
    description: "Access health services, book consultations, and report health issues",
    icon: Heart,
    color: "bg-gradient-primary"
  },
  {
    id: "provider",
    name: "Healthcare Provider",
    description: "Manage patients, conduct consultations, and share medical resources",
    icon: Stethoscope,
    color: "bg-gradient-wellness"
  },
  {
    id: "ngo",
    name: "NGO / Volunteer",
    description: "Coordinate health campaigns, track programs, and support communities",
    icon: Users,
    color: "bg-secondary"
  },
  {
    id: "admin",
    name: "Health Authority",
    description: "Monitor health trends, manage resources, and oversee health programs",
    icon: Shield,
    color: "bg-accent"
  }
];

interface RoleSelectorProps {
  onRoleSelect: (role: string) => void;
}

const RoleSelector = ({ onRoleSelect }: RoleSelectorProps) => {
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    onRoleSelect(roleId);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Welcome to HealthConnect 360</h2>
        <p className="text-muted-foreground">Choose your role to get started with your personalized dashboard</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roles.map((role) => {
          const IconComponent = role.icon;
          return (
            <Card
              key={role.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-card hover:scale-105 ${
                selectedRole === role.id ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
              onClick={() => handleRoleSelect(role.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${role.color} rounded-lg flex items-center justify-center`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-foreground">{role.name}</h3>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
                <ChevronRight className={`h-5 w-5 text-muted-foreground transition-colors ${
                  selectedRole === role.id ? 'text-primary' : ''
                }`} />
              </div>
            </Card>
          );
        })}
      </div>
      
      {selectedRole && (
        <div className="flex justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            Continue to Dashboard
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default RoleSelector;