import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Cart from '@/components/Cart';
import { StoreProvider, useStore } from '@/contexts/StoreContext';
import { mockProducts } from '@/data/mockProducts';

const categoryInfo = {
  'arduino': {
    name: 'Arduino',
    description: 'Microcontroller boards, shields, and Arduino-compatible components for rapid prototyping',
    icon: '🤖',
    color: 'bg-blue-500'
  },
  'raspberry-pi': {
    name: 'Raspberry Pi',
    description: 'Single-board computers, accessories, and HATs for powerful computing projects',
    icon: '🍓',
    color: 'bg-red-500'
  },
  'sensors': {
    name: 'Sensors',
    description: 'High-quality sensors for temperature, motion, light, pressure, and environmental monitoring',
    icon: '📡',
    color: 'bg-green-500'
  },
  'motors': {
    name: 'Motors & Actuators',
    description: 'Servo motors, stepper motors, DC motors, and motor driver circuits',
    icon: '⚙️',
    color: 'bg-purple-500'
  },
  'displays': {
    name: 'Displays',
    description: 'LCD, OLED, LED displays, and character displays for visual output',
    icon: '📺',
    color: 'bg-yellow-500'
  },
  'communication': {
    name: 'Communication',
    description: 'WiFi, Bluetooth, GSM, LoRa, and wireless communication modules',
    icon: '📶',
    color: 'bg-indigo-500'
  },
  'power': {
    name: 'Power Supply',
    description: 'Batteries, chargers, voltage regulators, and power management modules',
    icon: '🔋',
    color: 'bg-orange-500'
  },
  'tools': {
    name: 'Tools & Equipment',
    description: 'Professional soldering tools, multimeters, oscilloscopes, and lab equipment',
    icon: '🔨',
    color: 'bg-gray-500'
  },
  'components': {
    name: 'Electronic Components',
    description: 'Essential electronic components including resistors, capacitors, ICs, and transistors',
    icon: '🔌',
    color: 'bg-teal-500'
  },
  'kits': {
    name: 'Learning Kits',
    description: 'Educational starter kits and project bundles for learning electronics',
    icon: '📚',
    color: 'bg-pink-500'
  },
  'cables': {
    name: 'Cables & Connectors',
    description: 'High-quality jumper wires, USB cables, pin headers, and connector solutions',
    icon: '🔗',
    color: 'bg-cyan-500'
  }
};

const CategoryContent = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useStore();

  const category = categoryId ? categoryInfo[categoryId as keyof typeof categoryInfo] : null;

  useEffect(() => {
    // Initialize products and set category
    dispatch({ type: 'SET_PRODUCTS', payload: mockProducts });
    if (categoryId) {
      dispatch({ type: 'SET_CATEGORY', payload: categoryId });
    }
  }, [dispatch, categoryId]);

  const filteredProducts = state.products.filter(product => 
    categoryId === 'all' || product.category === categoryId
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Button onClick={() => navigate('/categories')}>
            View All Categories
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Category Header */}
      <section className="bg-gradient-card border-b">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/categories')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="flex items-center gap-6">
            <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center text-white text-2xl`}>
              {category.icon}
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                {category.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {category.description}
              </p>
              <div className="flex items-center gap-4">
                <Badge variant="secondary">
                  {filteredProducts.length} products available
                </Badge>
                <Badge variant="outline">
                  Free shipping on orders above ₹999
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              {category.name} Products
            </h2>
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-2">
              No products found in {category.name}
            </h3>
            <p className="text-muted-foreground mb-4">
              We're working on adding more products to this category.
            </p>
            <Button onClick={() => navigate('/categories')}>
              Browse Other Categories
            </Button>
          </Card>
        ) : (
          <ProductGrid />
        )}

        {/* Related Categories */}
        {filteredProducts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6">Related Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(categoryInfo)
                .filter(([key]) => key !== categoryId)
                .slice(0, 4)
                .map(([key, info]) => (
                  <Card
                    key={key}
                    className="p-4 cursor-pointer hover:shadow-card transition-all hover:scale-105"
                    onClick={() => navigate(`/category/${key}`)}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{info.icon}</div>
                      <h4 className="font-medium text-sm">{info.name}</h4>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        )}
      </main>
      
      <Cart />
    </div>
  );
};

const Category = () => {
  return (
    <StoreProvider>
      <CategoryContent />
    </StoreProvider>
  );
};

export default Category;