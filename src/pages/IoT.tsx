import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Wifi, Bluetooth, Cpu, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StoreProvider } from '@/contexts/StoreContext';

const iotCategories = [
  {
    id: 'wifi-modules',
    name: 'WiFi Modules',
    description: 'ESP8266, ESP32, and other WiFi connectivity modules',
    icon: Wifi,
    productCount: 45,
    color: 'bg-blue-500'
  },
  {
    id: 'bluetooth-modules',
    name: 'Bluetooth Modules',
    description: 'HC-05, HC-06, and Bluetooth Low Energy modules',
    icon: Bluetooth,
    productCount: 32,
    color: 'bg-indigo-500'
  },
  {
    id: 'sensors',
    name: 'IoT Sensors',
    description: 'Temperature, humidity, motion, and environmental sensors',
    icon: Activity,
    productCount: 78,
    color: 'bg-green-500'
  },
  {
    id: 'microcontrollers',
    name: 'IoT Microcontrollers',
    description: 'Arduino IoT, Raspberry Pi Pico, and ESP boards',
    icon: Cpu,
    productCount: 56,
    color: 'bg-purple-500'
  }
];

const IoT = () => {
  const navigate = useNavigate();

  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Internet of Things
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-90 px-4">
              Connect your world with cutting-edge IoT devices, sensors, and modules. 
              Build smart homes, industrial automation, and connected systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="text-base md:text-lg">
                Explore IoT Products
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg border-white text-white hover:bg-white hover:text-primary">
                Learn IoT
              </Button>
            </div>
          </div>
        </section>

        {/* IoT Categories */}
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">IoT Categories</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of IoT components and modules for your connected projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {iotCategories.map((category) => (
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

          {/* Featured IoT Products */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Popular IoT Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-hero text-white cursor-pointer hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">📡</div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">ESP32 Development Kit</h4>
                  <p className="text-white/80 mb-4 text-sm md:text-base">WiFi + Bluetooth microcontroller</p>
                  <Badge variant="secondary" className="text-xs">Best Seller</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-hero text-white cursor-pointer hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌡️</div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">DHT22 Sensor</h4>
                  <p className="text-white/80 mb-4 text-sm md:text-base">Temperature & humidity sensor</p>
                  <Badge variant="secondary" className="text-xs">Popular</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-hero text-white cursor-pointer hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">📶</div>
                  <h4 className="text-lg md:text-xl font-semibold mb-2">HC-05 Bluetooth Module</h4>
                  <p className="text-white/80 mb-4 text-sm md:text-base">Serial Bluetooth communication</p>
                  <Badge variant="secondary" className="text-xs">Top Rated</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* IoT Learning Section */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Learn IoT</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-3">Getting Started with IoT</h4>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Learn the basics of IoT development, from setting up your first sensor to building connected applications.
                </p>
                <Button variant="outline" size="sm">
                  Start Learning
                </Button>
              </Card>

              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-3">IoT Project Ideas</h4>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Explore practical IoT projects including smart home automation, environmental monitoring, and more.
                </p>
                <Button variant="outline" size="sm">
                  View Projects
                </Button>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </StoreProvider>
  );
};

export default IoT; 