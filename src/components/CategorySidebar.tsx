import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useStore } from '@/contexts/StoreContext';

const categories = [
  { id: 'all', name: 'All Products', icon: '🔧' },
  { id: 'arduino', name: 'Arduino', icon: '🤖' },
  { id: 'raspberry-pi', name: 'Raspberry Pi', icon: '🍓' },
  { id: 'sensors', name: 'Sensors', icon: '📡' },
  { id: 'motors', name: 'Motors & Actuators', icon: '⚙️' },
  { id: 'displays', name: 'Displays', icon: '📺' },
  { id: 'communication', name: 'Communication', icon: '📶' },
  { id: 'power', name: 'Power Supply', icon: '🔋' },
  { id: 'tools', name: 'Tools & Equipment', icon: '🔨' },
  { id: 'components', name: 'Electronic Components', icon: '🔌' },
  { id: 'kits', name: 'Learning Kits', icon: '📚' },
  { id: 'cables', name: 'Cables & Connectors', icon: '🔗' },
];

const CategorySidebar = () => {
  const { state, dispatch } = useStore();
  const { selectedCategory } = state;

  return (
    <Card className="p-4 sticky top-24 h-fit bg-gradient-card">
      <h3 className="font-semibold mb-4 text-lg bg-gradient-primary bg-clip-text text-transparent">
        Categories
      </h3>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className="w-full justify-start gap-3 text-left"
            onClick={() => dispatch({ type: 'SET_CATEGORY', payload: category.id })}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="text-sm">{category.name}</span>
          </Button>
        ))}
      </div>

      {/* Featured Categories */}
      <div className="mt-8">
        <h4 className="font-medium mb-3 text-sm text-muted-foreground">Featured</h4>
        <div className="space-y-3">
          <Card className="p-3 bg-gradient-hero text-primary-foreground">
            <div className="text-sm font-medium">🚀 New Arrivals</div>
            <div className="text-xs opacity-90">Latest electronics</div>
          </Card>
          
          <Card className="p-3 bg-accent text-accent-foreground">
            <div className="text-sm font-medium">💰 Best Deals</div>
            <div className="text-xs opacity-90">Up to 50% off</div>
          </Card>
          
          <Card className="p-3 bg-success text-success-foreground">
            <div className="text-sm font-medium">⭐ Top Rated</div>
            <div className="text-xs opacity-90">Customer favorites</div>
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default CategorySidebar;