import { ArrowLeft, MapPin, Search, Filter, Hospital, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface FindResourcesProps {
  onBack: () => void;
}

const FindResources = ({ onBack }: FindResourcesProps) => {
  const resources = [
    {
      id: 1,
      name: "Central Medical Center",
      type: "Hospital",
      distance: "0.8 miles",
      rating: 4.8,
      specialties: ["Emergency", "Cardiology", "Pediatrics"],
      available: true,
      icon: Hospital
    },
    {
      id: 2,
      name: "Community Health Clinic",
      type: "Clinic",
      distance: "1.2 miles",
      rating: 4.6,
      specialties: ["General Medicine", "Vaccination"],
      available: true,
      icon: Heart
    },
    {
      id: 3,
      name: "Mental Wellness Center",
      type: "Mental Health",
      distance: "2.1 miles",
      rating: 4.9,
      specialties: ["Counseling", "Therapy", "Crisis Support"],
      available: true,
      icon: Shield
    },
    {
      id: 4,
      name: "Mobile Health Unit",
      type: "Mobile Service",
      distance: "0.5 miles",
      rating: 4.7,
      specialties: ["Basic Care", "Screening"],
      available: false,
      icon: Heart
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
            <MapPin className="h-6 w-6 text-primary" />
            Find Health Resources
          </h1>
        </div>

        {/* Search and Filter */}
        <Card className="p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for hospitals, clinics, services..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="health">
              <MapPin className="h-4 w-4 mr-2" />
              Near Me
            </Button>
          </div>
        </Card>

        {/* Resources List */}
        <div className="grid gap-6">
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <Card key={resource.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{resource.name}</h3>
                        <Badge variant={resource.available ? "default" : "secondary"}>
                          {resource.available ? "Open" : "Closed"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{resource.type} • {resource.distance}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          <span className="text-sm font-medium">{resource.rating}</span>
                          <span className="text-yellow-500 ml-1">⭐</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {resource.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <Button size="sm" variant="health">
                      <MapPin className="h-4 w-4 mr-2" />
                      Directions
                    </Button>
                    <Button size="sm" variant="outline">
                      Contact
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FindResources;