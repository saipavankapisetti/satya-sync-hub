import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bot, Cpu, Zap, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StoreProvider } from '@/contexts/StoreContext';

const roboticsCategories = [
  {
    id: 'servo-motors',
    name: 'Servo Motors',
    description: 'High precision servo motors for robotic joints and movements',
    icon: Settings,
    productCount: 67,
    color: 'bg-blue-500'
  },
  {
    id: 'stepper-motors',
    name: 'Stepper Motors',
    description: 'Precise stepper motors for 3D printers and CNC applications',
    icon: Zap,
    productCount: 43,
    color: 'bg-green-500'
  },
  {
    id: 'microcontrollers',
    name: 'Robotics Controllers',
    description: 'Arduino, Raspberry Pi, and specialized robotics controllers',
    icon: Cpu,
    productCount: 89,
    color: 'bg-purple-500'
  },
  {
    id: 'sensors',
    name: 'Robotics Sensors',
    description: 'Distance, proximity, and environmental sensors for robots',
    icon: Bot,
    productCount: 54,
    color: 'bg-orange-500'
  }
];

const Robotics = () => {
  const navigate = useNavigate();

  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Robotics & Automation
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-90 px-4">
              Build intelligent robots and automated systems with our comprehensive range of 
              motors, controllers, sensors, and robotics components.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="text-base md:text-lg">
                Explore Robotics
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg border-white text-white hover:bg-white hover:text-primary">
                Learn Robotics
              </Button>
            </div>
          </div>
        </section>

        {/* Robotics Categories */}
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Robotics Categories</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Discover motors, controllers, sensors, and components for building advanced robots
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {roboticsCategories.map((category) => (
              <Card
                key={category.id}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-card"
                onClick={() => navigate(`/category/${category.id}`)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${category.color} flex items-center justify-center text-white`}>
                        <category.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors text-sm md:text-base">
                          {category.name}
                        </CardTitle>
                        <div className="text-xs md:text-sm text-muted-foreground">
                          {category.productCount} products
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 group-hover:border-primary group-hover:text-primary text-xs md:text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/category/${category.id}`);
                    }}
                  >
                    Browse {category.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Robotics Products */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Popular Robotics Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-hero text-white cursor-pointer hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">⚙️</div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">MG996R Servo Motor</h4>
                  <p className="text-white/80 mb-4 text-sm md:text-base">High torque servo for robotic arms</p>
                  <Badge variant="secondary" className="text-xs">Best Seller</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-hero text-white cursor-pointer hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">Arduino Robot Kit</h4>
                  <p className="text-white/80 mb-4 text-sm md:text-base">Complete robot building kit</p>
                  <Badge variant="secondary" className="text-xs">Popular</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-hero text-white cursor-pointer hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">📡</div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">HC-SR04 Sensor</h4>
                  <p className="text-white/80 mb-4 text-sm md:text-base">Ultrasonic distance sensor</p>
                  <Badge variant="secondary" className="text-xs">Top Rated</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Robotics Learning Section */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Learn Robotics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-3">Robotics Fundamentals</h4>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Learn the basics of robotics including motor control, sensor integration, and programming.
                </p>
                <Button variant="outline" size="sm">
                  Start Learning
                </Button>
              </Card>

              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-3">Robotics Projects</h4>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Build practical robots including line followers, obstacle avoiders, and robotic arms.
                </p>
                <Button variant="outline" size="sm">
                  View Projects
                </Button>
              </Card>
            </div>
          </div>

          {/* Robotics Applications */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Robotics Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-4 text-center">
                <div className="text-3xl mb-3">🏭</div>
                <h4 className="font-semibold mb-2">Industrial Automation</h4>
                <p className="text-xs text-muted-foreground">Manufacturing and assembly robots</p>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-3xl mb-3">🏠</div>
                <h4 className="font-semibold mb-2">Home Automation</h4>
                <p className="text-xs text-muted-foreground">Smart home robotic systems</p>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-3xl mb-3">🚗</div>
                <h4 className="font-semibold mb-2">Autonomous Vehicles</h4>
                <p className="text-xs text-muted-foreground">Self-driving car components</p>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-3xl mb-3">🎓</div>
                <h4 className="font-semibold mb-2">Educational Robots</h4>
                <p className="text-xs text-muted-foreground">Learning and teaching robots</p>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </StoreProvider>
  );
};

export default Robotics; 