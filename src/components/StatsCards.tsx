import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Users, 
  MapPin, 
  Calendar,
  Heart,
  Shield,
  Stethoscope,
  AlertTriangle
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "stable";
  icon: React.ComponentType<any>;
  color: string;
}

const StatCard = ({ title, value, change, trend, icon: Icon, color }: StatCardProps) => {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Activity;
  const trendColor = trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground";

  return (
    <Card className="p-6 hover:shadow-card transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <div className="flex items-center gap-1">
            <TrendIcon className={`h-4 w-4 ${trendColor}`} />
            <span className={`text-sm ${trendColor}`}>{change}</span>
          </div>
        </div>
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </Card>
  );
};

interface StatsCardsProps {
  role: string;
}

const StatsCards = ({ role }: StatsCardsProps) => {
  const getStatsForRole = () => {
    switch (role) {
      case "provider":
        return [
          {
            title: "Today's Consultations",
            value: "24",
            change: "+12% from yesterday",
            trend: "up" as const,
            icon: Video,
            color: "bg-gradient-primary"
          },
          {
            title: "Active Patients",
            value: "156",
            change: "+8 new this week",
            trend: "up" as const,
            icon: Users,
            color: "bg-gradient-wellness"
          },
          {
            title: "Health Records",
            value: "1,234",
            change: "Updated 2 hours ago",
            trend: "stable" as const,
            icon: Stethoscope,
            color: "bg-secondary"
          },
          {
            title: "Emergency Cases",
            value: "3",
            change: "Urgent attention needed",
            trend: "up" as const,
            icon: AlertTriangle,
            color: "bg-destructive"
          }
        ];
      case "ngo":
        return [
          {
            title: "Active Campaigns",
            value: "12",
            change: "+3 this month",
            trend: "up" as const,
            icon: Heart,
            color: "bg-gradient-wellness"
          },
          {
            title: "Volunteers",
            value: "89",
            change: "+15 joined recently",
            trend: "up" as const,
            icon: Users,
            color: "bg-secondary"
          },
          {
            title: "Communities Served",
            value: "45",
            change: "+5 new areas",
            trend: "up" as const,
            icon: MapPin,
            color: "bg-accent"
          },
          {
            title: "Health Screenings",
            value: "324",
            change: "This month",
            trend: "stable" as const,
            icon: Shield,
            color: "bg-gradient-primary"
          }
        ];
      case "admin":
        return [
          {
            title: "Health Facilities",
            value: "78",
            change: "+2 operational",
            trend: "up" as const,
            icon: MapPin,
            color: "bg-gradient-primary"
          },
          {
            title: "Population Health Score",
            value: "87%",
            change: "+3% improvement",
            trend: "up" as const,
            icon: Activity,
            color: "bg-success"
          },
          {
            title: "Disease Reports",
            value: "23",
            change: "-5 from last week",
            trend: "down" as const,
            icon: AlertTriangle,
            color: "bg-warning"
          },
          {
            title: "Healthcare Workers",
            value: "456",
            change: "Active in system",
            trend: "stable" as const,
            icon: Stethoscope,
            color: "bg-gradient-wellness"
          }
        ];
      default:
        return [
          {
            title: "Health Score",
            value: "92%",
            change: "+5% this month",
            trend: "up" as const,
            icon: Heart,
            color: "bg-gradient-wellness"
          },
          {
            title: "Consultations",
            value: "8",
            change: "Completed this year",
            trend: "stable" as const,
            icon: Video,
            color: "bg-gradient-primary"
          },
          {
            title: "Nearby Services",
            value: "15",
            change: "Within 5km",
            trend: "stable" as const,
            icon: MapPin,
            color: "bg-secondary"
          },
          {
            title: "Next Checkup",
            value: "12",
            change: "Days remaining",
            trend: "stable" as const,
            icon: Calendar,
            color: "bg-accent"
          }
        ];
    }
  };

  const stats = getStatsForRole();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <StatCard {...stat} />
        </div>
      ))}
    </div>
  );
};

// Add Video import to fix the missing import
import { Video } from "lucide-react";

export default StatsCards;