import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 md:py-20 lg:py-28 xl:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Hero content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 animate-fade-in">
            {/* New arrivals badge */}
            <div className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-200 shadow-md hover:shadow-lg">
              New arrivals every week
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              Power Your
              <br />
              <span className="text-yellow-400 drop-shadow-sm">Innovation</span>
              <br />
              <span className="text-white">with Electronics</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 px-4 lg:px-0 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover premium Arduino, Raspberry Pi, IoT components, and robotics kits. 
              Build the future with quality electronics and expert support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-600"
                size="lg"
              >
                Explore Products
                <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 border-white text-white hover:bg-white hover:text-blue-600 active:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="relative h-80 sm:h-96 md:h-[500px]">
                <img
                  src="/hero-electronics-BQYrp0vT.jpg"
                  alt="Electronics components and circuit boards for innovation"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="mt-12 md:mt-16 lg:mt-20 relative">
          <div className="bg-blue-50 dark:bg-gray-100 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="flex items-center justify-center gap-4 text-blue-900 dark:text-blue-800 animate-slide-up p-4 bg-white dark:bg-gray-200 rounded-xl shadow-md">
                <div className="p-3 bg-blue-100 dark:bg-blue-200 rounded-full">
                  <Truck className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg">Free Delivery ₹500+</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-600">Pan-India shipping</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4 text-blue-900 dark:text-blue-800 animate-slide-up p-4 bg-white dark:bg-gray-200 rounded-xl shadow-md" style={{ animationDelay: '0.1s' }}>
                <div className="p-3 bg-blue-100 dark:bg-blue-200 rounded-full">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg">Quality Guaranteed</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-600">Authentic products</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4 text-blue-900 dark:text-blue-800 animate-slide-up p-4 bg-white dark:bg-gray-200 rounded-xl shadow-md sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
                <div className="p-3 bg-blue-100 dark:bg-blue-200 rounded-full">
                  <Zap className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg">Expert Support</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-600">Technical assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;