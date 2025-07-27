import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-12 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Hero content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Power Your
              <br />
              <span className="text-primary-glow animate-glow">Electronics</span>
              <br />
              Dreams
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 px-4 lg:px-0">
              Discover cutting-edge electronics, microcontrollers, sensors, and components 
              for your next innovative project. From Arduino to Raspberry Pi, we have everything 
              you need to bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-base md:text-lg px-6 md:px-8 py-2 md:py-3">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-2 md:py-3 border-white text-white hover:bg-white hover:text-primary">
                Explore Categories
              </Button>
            </div>
          </div>

          {/* Feature cards */}
          <div className="space-y-4 md:space-y-6">
            <Card className="p-4 md:p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-primary-glow/20 rounded-lg">
                  <Zap className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm md:text-base">Latest Technology</h3>
                  <p className="text-xs md:text-sm opacity-90">Cutting-edge components and modules</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-primary-glow/20 rounded-lg">
                  <Shield className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm md:text-base">Quality Guaranteed</h3>
                  <p className="text-xs md:text-sm opacity-90">Authentic products with warranty</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-primary-glow/20 rounded-lg">
                  <Truck className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm md:text-base">Fast Delivery</h3>
                  <p className="text-xs md:text-sm opacity-90">Free shipping on orders above ₹999</p>
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