import { Star, Clock, Users, BookOpen, Play, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import { StoreProvider } from '@/contexts/StoreContext';
import { mockCourses } from '@/data/courses';
import { toast } from 'sonner';

const Courses = () => {
  const handleEnrollNow = (courseTitle: string) => {
    toast.success(`Enrolled in ${courseTitle}! Check your email for course access.`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500';
      case 'Intermediate':
        return 'bg-yellow-500';
      case 'Advanced':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Master Electronics with Expert-Led Courses
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Learn from industry professionals and build real-world projects. 
              From Arduino basics to advanced PCB design - we have courses for every level.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Certified Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                <span>Hands-on Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Expert Instructors</span>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <main className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Available Courses</h2>
            <p className="text-muted-foreground">
              Choose from our comprehensive selection of electronics and programming courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge
                    className={`absolute top-4 left-4 text-white ${getLevelColor(course.level)}`}
                  >
                    {course.level}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {renderStars(course.rating)}
                    <span className="text-sm text-muted-foreground">
                      ({course.rating}) • {course.students} students
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {course.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {course.topics.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{course.topics.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">
                      ₹{course.price.toLocaleString()}
                    </div>
                    <Button
                      variant="gradient"
                      onClick={() => handleEnrollNow(course.title)}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Our Courses */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Courses?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Practical Learning</h3>
                <p className="text-muted-foreground">
                  Learn by building real projects with hands-on exercises and practical assignments.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from industry professionals with years of experience in electronics and programming.
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Certification</h3>
                <p className="text-muted-foreground">
                  Get recognized certificates upon completion to showcase your new skills.
                </p>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </StoreProvider>
  );
};

export default Courses;