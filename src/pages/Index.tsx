import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import RoleSelector from "@/components/RoleSelector";
import Dashboard from "@/components/Dashboard";
import FullMap from "@/pages/FullMap";
import EmergencyReport from "@/pages/EmergencyReport";
import VirtualConsultation from "@/pages/VirtualConsultation";
import FindResources from "@/pages/FindResources";
import CommunityReport from "@/pages/CommunityReport";
import HealthEducation from "@/pages/HealthEducation";
import ScheduleAppointment from "@/pages/ScheduleAppointment";
import MedOChat from "@/pages/MedOChat";

const Index = () => {
  const [currentView, setCurrentView] = useState<"hero" | "roleSelection" | "dashboard" | "fullMap" | "emergencyReport" | "virtualConsultation" | "findResources" | "communityReport" | "healthEducation" | "scheduleAppointment" | "medoChat">("hero");
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleGetStarted = () => {
    setCurrentView("roleSelection");
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setCurrentView("dashboard");
  };

  const handleBackToHome = () => {
    setCurrentView("dashboard");
  };

  const handleNavigateTo = (view: typeof currentView) => {
    setCurrentView(view);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "hero":
        return <HeroSection />;
      case "roleSelection":
        return (
          <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-4xl">
              <RoleSelector onRoleSelect={handleRoleSelect} />
            </div>
          </div>
        );
      case "dashboard":
        return <Dashboard role={selectedRole} onNavigate={handleNavigateTo} />;
      case "fullMap":
        return <FullMap onBack={handleBackToHome} />;
      case "emergencyReport":
        return <EmergencyReport onBack={handleBackToHome} />;
      case "virtualConsultation":
        return <VirtualConsultation onBack={handleBackToHome} />;
      case "findResources":
        return <FindResources onBack={handleBackToHome} />;
      case "communityReport":
        return <CommunityReport onBack={handleBackToHome} />;
      case "healthEducation":
        return <HealthEducation onBack={handleBackToHome} />;
      case "scheduleAppointment":
        return <ScheduleAppointment onBack={handleBackToHome} />;
      case "medoChat":
        return <MedOChat onBack={handleBackToHome} />;
      default:
        return <HeroSection />;
    }
  };

  // Pass the handler to HeroSection
  if (currentView === "hero") {
    return <HeroSection onGetStarted={handleGetStarted} />;
  }

  return renderCurrentView();
};

export default Index;
