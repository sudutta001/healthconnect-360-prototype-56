import { ArrowLeft, AlertTriangle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface EmergencyReportProps {
  onBack: () => void;
}

const EmergencyReport = ({ onBack }: EmergencyReportProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            Emergency Report
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Emergency Form */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Report Emergency</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Emergency Type</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Medical Emergency</option>
                  <option>Disease Outbreak</option>
                  <option>Mental Health Crisis</option>
                  <option>Public Health Threat</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Location</label>
                <Input placeholder="Enter location or address" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <Textarea placeholder="Describe the emergency situation..." rows={4} />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Contact Number</label>
                <Input placeholder="Your contact number" />
              </div>
              
              <div className="flex gap-4">
                <Button variant="emergency" className="flex-1">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Submit Emergency Report
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call 911
                </Button>
              </div>
            </div>
          </Card>

          {/* Emergency Contacts */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Emergency Contacts</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h3 className="font-medium">Emergency Services</h3>
                  <p className="text-sm text-muted-foreground">24/7 Emergency Response</p>
                </div>
                <Button size="sm" variant="emergency">911</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h3 className="font-medium">Poison Control</h3>
                  <p className="text-sm text-muted-foreground">24/7 Poison Help</p>
                </div>
                <Button size="sm" variant="outline">1-800-222-1222</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h3 className="font-medium">Mental Health Crisis</h3>
                  <p className="text-sm text-muted-foreground">24/7 Crisis Support</p>
                </div>
                <Button size="sm" variant="outline">988</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmergencyReport;