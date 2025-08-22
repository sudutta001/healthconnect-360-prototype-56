import { ArrowLeft, Calendar, Clock, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ScheduleAppointmentProps {
  onBack: () => void;
}

const ScheduleAppointment = ({ onBack }: ScheduleAppointmentProps) => {
  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  const providers = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "General Medicine", available: true },
    { id: 2, name: "Dr. Michael Chen", specialty: "Cardiology", available: true },
    { id: 3, name: "Dr. Emily Davis", specialty: "Mental Health", available: false },
    { id: 4, name: "Dr. James Wilson", specialty: "Pediatrics", available: true },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      provider: "Dr. Sarah Johnson",
      specialty: "General Medicine",
      date: "Today",
      time: "2:30 PM",
      type: "Check-up"
    },
    {
      id: 2,
      provider: "Dr. Michael Chen", 
      specialty: "Cardiology",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "Follow-up"
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
            <Calendar className="h-6 w-6 text-primary" />
            Schedule Appointment
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Appointment Booking */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Book New Appointment</h2>
              
              {/* Step 1: Select Provider */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">1. Select Healthcare Provider</h3>
                <div className="space-y-3">
                  {providers.map((provider) => (
                    <div key={provider.id} className={`p-3 border rounded-lg cursor-pointer hover:border-primary ${!provider.available ? 'opacity-50' : ''}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium">{provider.name}</h4>
                            <p className="text-sm text-muted-foreground">{provider.specialty}</p>
                          </div>
                        </div>
                        <Badge variant={provider.available ? "default" : "secondary"}>
                          {provider.available ? "Available" : "Unavailable"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Date */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">2. Select Date</h3>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 14 }, (_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() + i);
                    const isToday = i === 0;
                    return (
                      <div key={i} className={`p-3 text-center border rounded-lg cursor-pointer hover:border-primary ${isToday ? 'border-primary bg-primary/5' : ''}`}>
                        <div className="text-xs text-muted-foreground">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                        <div className="font-medium">{date.getDate()}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Select Time */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">3. Select Time</h3>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <Button key={time} variant="outline" size="sm" className="h-auto py-2">
                      <Clock className="h-3 w-3 mr-1" />
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Step 4: Appointment Details */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">4. Appointment Details</h3>
                <div className="space-y-3">
                  <select className="w-full p-2 border rounded-md">
                    <option>Routine Check-up</option>
                    <option>Follow-up Visit</option>
                    <option>Consultation</option>
                    <option>Urgent Care</option>
                  </select>
                  <textarea 
                    className="w-full p-2 border rounded-md" 
                    placeholder="Additional notes or symptoms..."
                    rows={3}
                  ></textarea>
                </div>
              </div>

              <Button variant="health" className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Upcoming Appointments</h3>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{appointment.provider}</h4>
                      <Badge variant="outline" className="text-xs">{appointment.type}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{appointment.specialty}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{appointment.date} at {appointment.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Appointments
              </Button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Appointment Types</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Routine Check-up</span>
                  <span className="text-muted-foreground">30 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultation</span>
                  <span className="text-muted-foreground">45 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Follow-up</span>
                  <span className="text-muted-foreground">15 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Urgent Care</span>
                  <span className="text-muted-foreground">60 min</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our booking support team for assistance.
              </p>
              <Button variant="outline" className="w-full">
                <MapPin className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointment;