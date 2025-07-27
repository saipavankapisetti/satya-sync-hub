import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-16 md:py-24 lg:py-32 overflow-hidden animate-fade-in">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Hero content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in">
              Power Your
              <br />
              <span className="text-primary-glow animate-glow">Electronics</span>
              <br />
              Dreams
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl opacity-90 px-4 lg:px-0 leading-relaxed animate-fade-in">
              Discover cutting-edge electronics, microcontrollers, sensors, and components 
              for your next innovative project. From Arduino to Raspberry Pi, we have everything 
              you need to bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start animate-fade-in">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-all duration-300 text-lg md:text-xl"
                size="lg"
              >
                Shop Now
                <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg md:text-xl px-8 py-4 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Explore Categories
              </Button>
            </div>
          </div>

          {/* Feature cards */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-primary-glow/20 rounded-lg">
                  <Zap className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-base md:text-lg">Latest Technology</h3>
                  <p className="text-sm md:text-base opacity-90">Cutting-edge components and modules</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-primary-glow/20 rounded-lg">
                  <Shield className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-base md:text-lg">Quality Guaranteed</h3>
                  <p className="text-sm md:text-base opacity-90">Authentic products with warranty</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-primary-glow/20 rounded-lg">
                  <Truck className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-base md:text-lg">Fast Delivery</h3>
                  <p className="text-sm md:text-base opacity-90">Free shipping on orders above ₹999</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;