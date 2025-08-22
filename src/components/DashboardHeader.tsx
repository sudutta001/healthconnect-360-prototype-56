import { Bell, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
  onNavigate?: (view: "hero" | "roleSelection" | "dashboard" | "fullMap" | "emergencyReport" | "virtualConsultation" | "findResources" | "communityReport" | "healthEducation" | "scheduleAppointment" | "medoChat") => void;
}

const DashboardHeader = ({ onNavigate }: DashboardHeaderProps) => {
  const handleNotificationClick = () => {
    // Show notifications - for now just log
    console.log("Notifications opened");
    // Could navigate to a notifications page in the future
  };

  const handleProfileClick = () => {
    // Show profile menu - for now just log  
    console.log("Profile menu opened");
    // Could navigate to a profile page in the future
  };

  const handleMenuClick = () => {
    // Mobile menu toggle
    console.log("Mobile menu toggled");
  };
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={handleMenuClick}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">H</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">HealthConnect 360</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search resources, services..." 
              className="pl-10 w-80"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative" onClick={handleNotificationClick}>
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full text-xs text-destructive-foreground flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" onClick={handleProfileClick}>
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;