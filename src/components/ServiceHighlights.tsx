import { Truck, Shield, Headphones, Zap, RotateCcw, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServiceHighlights = () => {
  const services = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Free shipping on orders above ₹500",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Technical Support",
      description: "Expert assistance for all your needs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round the clock customer service",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Quick order processing and dispatch",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "Hassle-free return policy",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Clock,
      title: "Genuine Products",
      description: "100% authentic products guaranteed",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights; 