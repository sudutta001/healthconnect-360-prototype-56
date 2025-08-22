import { ArrowLeft, BookOpen, Play, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HealthEducationProps {
  onBack: () => void;
}

const HealthEducation = ({ onBack }: HealthEducationProps) => {
  const courses = [
    {
      id: 1,
      title: "Nutrition Fundamentals",
      description: "Learn about balanced diet, macronutrients, and healthy eating habits",
      duration: "45 min",
      level: "Beginner",
      category: "Nutrition",
      progress: 65
    },
    {
      id: 2,
      title: "Mental Health Awareness",
      description: "Understanding stress, anxiety, and maintaining mental wellness",
      duration: "60 min",
      level: "Intermediate",
      category: "Mental Health",
      progress: 30
    },
    {
      id: 3,
      title: "First Aid Basics",
      description: "Essential first aid techniques for common emergencies",
      duration: "90 min",
      level: "Beginner",
      category: "Emergency Care",
      progress: 0
    },
    {
      id: 4,
      title: "Reproductive Health",
      description: "Comprehensive education on reproductive health and family planning",
      duration: "120 min",
      level: "Intermediate",
      category: "Reproductive Health",
      progress: 100
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Understanding Diabetes Management",
      category: "Chronic Conditions",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Building Strong Immunity",
      category: "Wellness",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 3,
      title: "Workplace Mental Health",
      category: "Mental Health",
      readTime: "12 min read",
      featured: true
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
            <BookOpen className="h-6 w-6 text-primary" />
            Health Education
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Educational Courses */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Interactive Courses</h2>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {course.duration}
                          </span>
                          <Badge variant="outline" className="text-xs">{course.level}</Badge>
                          <Badge variant="secondary" className="text-xs">{course.category}</Badge>
                        </div>
                      </div>
                      <Button size="sm" variant={course.progress > 0 ? "health" : "outline"}>
                        <Play className="h-4 w-4 mr-2" />
                        {course.progress > 0 ? "Continue" : "Start"}
                      </Button>
                    </div>
                    {course.progress > 0 && (
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Health Articles */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Latest Articles</h2>
              <div className="space-y-4">
                {articles.map((article) => (
                  <div key={article.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{article.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                        <Badge variant="outline" className="text-xs">{article.category}</Badge>
                        <span>{article.readTime}</span>
                        {article.featured && <Badge variant="secondary" className="text-xs">Featured</Badge>}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Read</Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Resources</h3>
              <div className="space-y-3">
                <Button variant="health" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Health Guide
                </Button>
                <Button variant="outline" className="w-full">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Health Glossary
                </Button>
                <Button variant="outline" className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Video Library
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Nutrition</span>
                  <Badge variant="outline">12</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Mental Health</span>
                  <Badge variant="outline">8</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Exercise</span>
                  <Badge variant="outline">15</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Prevention</span>
                  <Badge variant="outline">10</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthEducation;