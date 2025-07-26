import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { StoreProvider } from '@/contexts/StoreContext';

const categories = [
  {
    id: 'arduino',
    name: 'Arduino',
    description: 'Microcontroller boards, shields, and Arduino-compatible components',
    icon: '🤖',
    productCount: 150,
    color: 'bg-blue-500'
  },
  {
    id: 'raspberry-pi',
    name: 'Raspberry Pi',
    description: 'Single-board computers, accessories, and HATs for Pi projects',
    icon: '🍓',
    productCount: 85,
    color: 'bg-red-500'
  },
  {
    id: 'sensors',
    name: 'Sensors',
    description: 'Temperature, motion, light, pressure, and environmental sensors',
    icon: '📡',
    productCount: 200,
    color: 'bg-green-500'
  },
  {
    id: 'motors',
    name: 'Motors & Actuators',
    description: 'Servo motors, stepper motors, DC motors, and motor drivers',
    icon: '⚙️',
    productCount: 75,
    color: 'bg-purple-500'
  },
  {
    id: 'displays',
    name: 'Displays',
    description: 'LCD, OLED, LED displays, and character displays',
    icon: '📺',
    productCount: 60,
    color: 'bg-yellow-500'
  },
  {
    id: 'communication',
    name: 'Communication',
    description: 'WiFi, Bluetooth, GSM, LoRa, and wireless modules',
    icon: '📶',
    productCount: 95,
    color: 'bg-indigo-500'
  },
  {
    id: 'power',
    name: 'Power Supply',
    description: 'Batteries, chargers, voltage regulators, and power modules',
    icon: '🔋',
    productCount: 45,
    color: 'bg-orange-500'
  },
  {
    id: 'tools',
    name: 'Tools & Equipment',
    description: 'Soldering tools, multimeters, oscilloscopes, and lab equipment',
    icon: '🔨',
    productCount: 30,
    color: 'bg-gray-500'
  },
  {
    id: 'components',
    name: 'Electronic Components',
    description: 'Resistors, capacitors, ICs, transistors, and basic components',
    icon: '🔌',
    productCount: 300,
    color: 'bg-teal-500'
  },
  {
    id: 'kits',
    name: 'Learning Kits',
    description: 'Starter kits, project kits, and educational electronics sets',
    icon: '📚',
    productCount: 40,
    color: 'bg-pink-500'
  },
  {
    id: 'cables',
    name: 'Cables & Connectors',
    description: 'Jumper wires, USB cables, pin headers, and connectors',
    icon: '🔗',
    productCount: 80,
    color: 'bg-cyan-500'
  }
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Product Categories
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of electronics components and development boards
              organized by categories for easy browsing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-card"
                onClick={() => navigate(`/category/${category.id}`)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-white text-xl`}>
                        {category.icon}
                      </div>
                      <div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {category.name}
                        </CardTitle>
                        <div className="text-sm text-muted-foreground">
                          {category.productCount} products
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {category.description}
                  </CardDescription>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 group-hover:border-primary group-hover:text-primary"
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

          {/* Featured Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Popular Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.slice(0, 3).map((category) => (
                <Card
                  key={`featured-${category.id}`}
                  className="bg-gradient-hero text-white cursor-pointer hover:shadow-glow transition-all duration-300"
                  onClick={() => navigate(`/category/${category.id}`)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-white/80 mb-4">{category.productCount} products available</p>
                    <Button variant="hero" size="sm">
                      Explore Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StoreProvider>
  );
};

export default Categories;