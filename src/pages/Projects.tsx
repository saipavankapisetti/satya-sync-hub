import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Cpu, Wifi, Bot, Lightbulb, Zap, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StoreProvider } from '@/contexts/StoreContext';
import AdaptiveCard from '@/components/ui/adaptive-card';
import ResponsiveGrid from '@/components/ui/responsive-grid';

const projectCategories = [
  {
    id: 'iot-projects',
    name: 'IoT Projects',
    description: 'Smart home automation, environmental monitoring, and connected devices',
    icon: Wifi,
    projectCount: 24,
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 'robotics-projects',
    name: 'Robotics Projects',
    description: 'Arduino robots, automation systems, and mechanical projects',
    icon: Bot,
    projectCount: 18,
    color: 'bg-red-500',
    gradient: 'from-red-500 to-red-600'
  },
  {
    id: 'arduino-projects',
    name: 'Arduino Projects',
    description: 'Microcontroller projects, sensors, and automation',
    icon: Cpu,
    projectCount: 32,
    color: 'bg-green-500',
    gradient: 'from-green-500 to-green-600'
  },
  {
    id: 'raspberry-pi-projects',
    name: 'Raspberry Pi Projects',
    description: 'Single-board computer projects and applications',
    icon: Settings,
    projectCount: 15,
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: 'sensor-projects',
    name: 'Sensor Projects',
    description: 'Environmental monitoring and data collection projects',
    icon: Lightbulb,
    projectCount: 28,
    color: 'bg-yellow-500',
    gradient: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'automation-projects',
    name: 'Automation Projects',
    description: 'Industrial automation and control systems',
    icon: Zap,
    projectCount: 12,
    color: 'bg-indigo-500',
    gradient: 'from-indigo-500 to-indigo-600'
  }
];

const topProjects = [
  {
    id: '1',
    title: 'Smart Home Automation System',
    description: 'Complete IoT-based home automation using ESP32 and various sensors',
    difficulty: 'Intermediate',
    duration: '2-3 weeks',
    components: ['ESP32', 'DHT22', 'Relay Module', 'LED Strip'],
    image: '/api/placeholder/300/200',
    category: 'IoT Projects',
    rating: 4.8,
    views: 1250,
    featured: true,
    badges: ['Popular', 'Trending']
  },
  {
    id: '2',
    title: 'Arduino Line Following Robot',
    description: 'Autonomous robot that follows lines using IR sensors and Arduino',
    difficulty: 'Beginner',
    duration: '1-2 weeks',
    components: ['Arduino Uno', 'IR Sensors', 'DC Motors', 'Chassis'],
    image: '/api/placeholder/300/200',
    category: 'Robotics Projects',
    rating: 4.6,
    views: 890,
    featured: true,
    badges: ['Best Seller']
  },
  {
    id: '3',
    title: 'Raspberry Pi Weather Station',
    description: 'Weather monitoring system with real-time data logging',
    difficulty: 'Advanced',
    duration: '3-4 weeks',
    components: ['Raspberry Pi', 'BME280', 'Rain Sensor', 'Display'],
    image: '/api/placeholder/300/200',
    category: 'Raspberry Pi Projects',
    rating: 4.9,
    views: 2100,
    featured: true,
    badges: ['Top Rated']
  },
  {
    id: '4',
    title: 'ESP32 WiFi Camera',
    description: 'Wireless camera system with live streaming capabilities',
    difficulty: 'Intermediate',
    duration: '2-3 weeks',
    components: ['ESP32-CAM', 'OV2640 Camera', 'WiFi Module'],
    image: '/api/placeholder/300/200',
    category: 'IoT Projects',
    rating: 4.7,
    views: 1560,
    featured: true,
    badges: ['New']
  },
  {
    id: '5',
    title: 'Arduino Smart Irrigation System',
    description: 'Automated plant watering system with soil moisture sensors',
    difficulty: 'Beginner',
    duration: '1-2 weeks',
    components: ['Arduino Nano', 'Soil Sensor', 'Water Pump', 'Relay'],
    image: '/api/placeholder/300/200',
    category: 'Arduino Projects',
    rating: 4.5,
    views: 980,
    featured: true,
    badges: ['Eco-Friendly']
  },
  {
    id: '6',
    title: 'Raspberry Pi Security Camera',
    description: 'Motion-activated security camera with cloud storage',
    difficulty: 'Advanced',
    duration: '3-4 weeks',
    components: ['Raspberry Pi', 'Camera Module', 'PIR Sensor', 'SD Card'],
    image: '/api/placeholder/300/200',
    category: 'Raspberry Pi Projects',
    rating: 4.8,
    views: 1890,
    featured: true,
    badges: ['Security']
  }
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Electronics Projects
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-90 px-4">
              Explore hundreds of DIY electronics projects, from beginner-friendly Arduino projects 
              to advanced IoT and robotics systems. Learn by building real-world applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="text-base md:text-lg">
                Start Building
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg border-white text-white hover:bg-white hover:text-primary">
                Browse Categories
              </Button>
            </div>
          </div>
        </section>

        {/* Project Categories */}
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Project Categories</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive collection of electronics projects organized by category
            </p>
          </div>

                      <div className="mb-6">
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-center">More Top Projects</h4>
            </div>
            <ResponsiveGrid
              cols={{ sm: 1, md: 2, lg: 3, xl: 3 }}
              gap={{ sm: 4, md: 6, lg: 6, xl: 8 }}
            >
            {projectCategories.map((category) => (
              <AdaptiveCard
                key={category.id}
                title={category.name}
                subtitle={`${category.projectCount} projects`}
                description={category.description}
                icon={category.icon}
                gradient={category.gradient}
                primaryAction={{
                  label: `Browse ${category.name}`,
                  onClick: () => navigate(`/projects/${category.id}`),
                  variant: 'outline'
                }}
                onClick={() => navigate(`/projects/${category.id}`)}
                size="md"
                variant="featured"
              />
            ))}
          </ResponsiveGrid>

          {/* Top Projects Section */}
          <div className="mt-12 md:mt-16">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Top Projects</h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Discover our most popular and highly-rated electronics projects
              </p>
            </div>

            {/* Featured Hero Project */}
            <div className="mb-8">
              <AdaptiveCard
                title={topProjects[0].title}
                subtitle="Most Popular Project"
                description={topProjects[0].description}
                image={topProjects[0].image}
                tags={[topProjects[0].category, ...(topProjects[0].badges || [])]}
                rating={topProjects[0].rating}
                views={topProjects[0].views}
                duration={topProjects[0].duration}
                difficulty={topProjects[0].difficulty as 'Beginner' | 'Intermediate' | 'Advanced'}
                primaryAction={{
                  label: 'View Project',
                  onClick: () => navigate(`/projects/${topProjects[0].id}`),
                  variant: 'default'
                }}
                secondaryAction={{
                  label: 'Learn More',
                  onClick: () => navigate(`/projects/${topProjects[0].id}`),
                  variant: 'outline'
                }}
                onClick={() => navigate(`/projects/${topProjects[0].id}`)}
                size="lg"
                variant="hero"
                gradient="from-blue-500 to-purple-600"
                className="max-w-4xl mx-auto"
              />
            </div>
            <ResponsiveGrid
              cols={{ sm: 1, md: 2, lg: 3, xl: 3 }}
              gap={{ sm: 4, md: 6, lg: 6, xl: 8 }}
            >
              {topProjects.slice(1).map((project) => (
                <AdaptiveCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={[project.category, ...(project.badges || [])]}
                  rating={project.rating}
                  views={project.views}
                  duration={project.duration}
                  difficulty={project.difficulty as 'Beginner' | 'Intermediate' | 'Advanced'}
                  primaryAction={{
                    label: 'View Project',
                    onClick: () => navigate(`/projects/${project.id}`),
                    variant: 'outline'
                  }}
                  onClick={() => navigate(`/projects/${project.id}`)}
                  size="md"
                  variant={project.featured ? 'featured' : 'default'}
                  gradient={project.featured ? 'from-primary/5 to-primary/10' : undefined}
                />
              ))}
            </ResponsiveGrid>
          </div>

          {/* Project Stats */}
          <div className="mt-12 md:mt-16">
            <ResponsiveGrid
              cols={{ sm: 2, md: 4, lg: 4, xl: 4 }}
              gap={{ sm: 4, md: 6, lg: 6, xl: 8 }}
            >
              <AdaptiveCard
                title="150+"
                subtitle="Total Projects"
                size="sm"
                variant="compact"
                hover={false}
                className="text-center"
              />
              <AdaptiveCard
                title="25K+"
                subtitle="Project Views"
                size="sm"
                variant="compact"
                hover={false}
                className="text-center"
              />
              <AdaptiveCard
                title="4.8"
                subtitle="Average Rating"
                size="sm"
                variant="compact"
                hover={false}
                className="text-center"
              />
              <AdaptiveCard
                title="6"
                subtitle="Categories"
                size="sm"
                variant="compact"
                hover={false}
                className="text-center"
              />
            </ResponsiveGrid>
          </div>
        </main>

        <Footer />
      </div>
    </StoreProvider>
  );
};

export default Projects; 