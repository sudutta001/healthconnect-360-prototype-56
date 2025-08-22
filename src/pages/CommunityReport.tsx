import { ArrowLeft, FileText, Users, TrendingUp, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface CommunityReportProps {
  onBack: () => void;
}

const CommunityReport = ({ onBack }: CommunityReportProps) => {
  const recentReports = [
    {
      id: 1,
      title: "Increased respiratory issues in downtown area",
      category: "Health Concern",
      status: "Under Investigation",
      date: "2 hours ago",
      severity: "medium"
    },
    {
      id: 2,
      title: "Request for mental health resources",
      category: "Resource Request",
      status: "In Progress", 
      date: "5 hours ago",
      severity: "low"
    },
    {
      id: 3,
      title: "Water quality concerns reported",
      category: "Environmental",
      status: "Resolved",
      date: "1 day ago",
      severity: "high"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Community Health Reports
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Report Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Submit New Report</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Report Type</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Health Concern</option>
                    <option>Environmental Issue</option>
                    <option>Resource Request</option>
                    <option>Service Feedback</option>
                    <option>Infrastructure Issue</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Title</label>
                  <Input placeholder="Brief description of the issue" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input placeholder="Where is this issue occurring?" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Detailed Description</label>
                  <Textarea placeholder="Provide as much detail as possible..." rows={4} />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Severity Level</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Low - Information/Suggestion</option>
                    <option>Medium - Needs Attention</option>
                    <option>High - Urgent Action Required</option>
                  </select>
                </div>
                
                <div className="flex gap-4">
                  <Button variant="health" className="flex-1">
                    <FileText className="h-4 w-4 mr-2" />
                    Submit Report
                  </Button>
                  <Button variant="outline">
                    Save Draft
                  </Button>
                </div>
              </div>
            </Card>

            {/* Recent Reports */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Community Reports</h2>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium">{report.title}</h3>
                      <Badge 
                        variant={report.severity === 'high' ? 'destructive' : report.severity === 'medium' ? 'default' : 'secondary'}
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-xs">{report.category}</Badge>
                      <span>{report.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Report Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Reports</span>
                  <span className="font-semibold">147</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Resolved</span>
                  <span className="font-semibold text-success">89%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">In Progress</span>
                  <span className="font-semibold text-warning">8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Under Review</span>
                  <span className="font-semibold text-muted-foreground">3%</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Trends
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  My Reports
                </Button>
                <Button variant="outline" className="w-full">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Report Guidelines
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Contact Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Need help with your report or have questions?
              </p>
              <Button variant="health" className="w-full">
                Contact Us
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityReport;