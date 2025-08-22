import { ArrowLeft, Video, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VirtualConsultationProps {
  onBack: () => void;
}

const VirtualConsultation = ({ onBack }: VirtualConsultationProps) => {
  const availableDoctors = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "General Medicine", available: true, nextSlot: "2:30 PM" },
    { id: 2, name: "Dr. Michael Chen", specialty: "Cardiology", available: true, nextSlot: "3:15 PM" },
    { id: 3, name: "Dr. Emily Davis", specialty: "Mental Health", available: false, nextSlot: "Tomorrow 9:00 AM" },
    { id: 4, name: "Dr. James Wilson", specialty: "Pediatrics", available: true, nextSlot: "4:00 PM" },
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
            <Video className="h-6 w-6 text-primary" />
            Virtual Consultation
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Available Doctors */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Available Healthcare Providers</h2>
              <div className="space-y-4">
                {availableDoctors.map((doctor) => (
                  <div key={doctor.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">{doctor.name}</h3>
                        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Next: {doctor.nextSlot}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={doctor.available ? "default" : "secondary"}>
                        {doctor.available ? "Available" : "Busy"}
                      </Badge>
                      <Button 
                        size="sm" 
                        variant={doctor.available ? "health" : "outline"}
                        disabled={!doctor.available}
                      >
                        <Video className="h-4 w-4 mr-2" />
                        {doctor.available ? "Start Call" : "Schedule"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="health" className="w-full">
                  <Video className="h-4 w-4 mr-2" />
                  Start Instant Consultation
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  My Consultations
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Consultation Types</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>General Medicine</span>
                  <span className="text-muted-foreground">15-30 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Mental Health</span>
                  <span className="text-muted-foreground">30-60 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Follow-up</span>
                  <span className="text-muted-foreground">10-15 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency</span>
                  <span className="text-muted-foreground">Immediate</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualConsultation;