import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import QuickActions from "@/components/QuickActions";
import StatsCards from "@/components/StatsCards";
import HealthMap from "@/components/HealthMap";
import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip
} from "recharts";

const healthTrendsData = [
  { month: "Jan", consultations: 45, emergencies: 8, campaigns: 12 },
  { month: "Feb", consultations: 52, emergencies: 6, campaigns: 15 },
  { month: "Mar", consultations: 61, emergencies: 4, campaigns: 18 },
  { month: "Apr", consultations: 58, emergencies: 7, campaigns: 16 },
  { month: "May", consultations: 67, emergencies: 5, campaigns: 22 },
  { month: "Jun", consultations: 74, emergencies: 3, campaigns: 25 }
];

const resourceDistribution = [
  { name: "Primary Care", value: 35, color: "#3B82F6" },
  { name: "Mental Health", value: 25, color: "#10B981" },
  { name: "Emergency Services", value: 20, color: "#F59E0B" },
  { name: "Preventive Care", value: 20, color: "#EF4444" }
];

interface DashboardProps {
  role: string;
  onNavigate: (view: "hero" | "roleSelection" | "dashboard" | "fullMap" | "emergencyReport" | "virtualConsultation" | "findResources" | "communityReport" | "healthEducation" | "scheduleAppointment" | "medoChat") => void;
}

const Dashboard = ({ role, onNavigate }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const getRoleTitle = () => {
    switch (role) {
      case "provider": return "Healthcare Provider Dashboard";
      case "ngo": return "NGO & Volunteer Dashboard";
      case "admin": return "Health Authority Dashboard";
      default: return "Citizen Health Dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader onNavigate={onNavigate} />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Dashboard Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">{getRoleTitle()}</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your health ecosystem today.
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards role={role} />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions role={role} onNavigate={onNavigate} />
          </div>

          {/* Right Column - Charts and Analytics */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Health Map */}
            <HealthMap onNavigate={onNavigate} />
            {/* Health Trends Chart */}
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Health Activity Trends</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={healthTrendsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="month" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip />
                      <Bar dataKey="consultations" fill="#3B82F6" radius={4} />
                      <Bar dataKey="campaigns" fill="#10B981" radius={4} />
                      <Bar dataKey="emergencies" fill="#EF4444" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>

            {/* Resource Distribution */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Resource Distribution</h3>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={resourceDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          dataKey="value"
                        >
                          {resourceDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-2">
                    {resourceDistribution.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="font-medium">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Recent Activities</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Consultation completed</p>
                        <p className="text-xs text-muted-foreground">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Health alert reported</p>
                        <p className="text-xs text-muted-foreground">15 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New resource added</p>
                        <p className="text-xs text-muted-foreground">1 hour ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;