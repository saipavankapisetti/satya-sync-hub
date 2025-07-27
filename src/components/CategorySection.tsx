import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Arduino",
      description: "Development boards and shields",
      image: "🔌",
      color: "from-blue-500 to-cyan-500",
      path: "/category/arduino"
    },
    {
      name: "Raspberry Pi",
      description: "Single-board computers and accessories",
      image: "🍓",
      color: "from-green-500 to-emerald-500",
      path: "/category/raspberry-pi"
    },
    {
      name: "Sensors",
      description: "Various sensor modules and components",
      image: "📡",
      color: "from-purple-500 to-pink-500",
      path: "/category/sensors"
    },
    {
      name: "Drone Parts",
      description: "Components for drone building",
      image: "🚁",
      color: "from-orange-500 to-red-500",
      path: "/category/drone-parts"
    },
    {
      name: "IoT & Wireless",
      description: "Internet of Things and wireless modules",
      image: "🌐",
      color: "from-yellow-500 to-orange-500",
      path: "/category/iot"
    },
    {
      name: "Tools & Instruments",
      description: "Professional tools and measuring instruments",
      image: "🔧",
      color: "from-indigo-500 to-purple-500",
      path: "/category/tools"
    },
    {
      name: "Electronic Components",
      description: "Basic electronic components and parts",
      image: "⚡",
      color: "from-pink-500 to-rose-500",
      path: "/category/components"
    },
    {
      name: "Development Boards",
      description: "Various development and prototyping boards",
      image: "🖥️",
      color: "from-cyan-500 to-blue-500",
      path: "/category/development-boards"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-blue-600">Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From basic components to advanced development boards, find everything you need for your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-3xl">{category.image}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-4 text-center">{category.description}</p>
                <Button 
                  onClick={() => navigate(category.path)}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 