import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Truck, Shield, Heart, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StoreProvider } from '@/contexts/StoreContext';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering cutting-edge electronics solutions"
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Authentic products with guaranteed reliability"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your success is our priority"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a global electronics community"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "10,000+", label: "Products" },
    { number: "100+", label: "Brands" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              About SatyaElectronics Hub
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-90 px-4">
              India's most trusted destination for electronics, robotics, and IoT components. 
              Empowering innovators, makers, and engineers since 2020.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6 md:p-8">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl mb-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    To democratize access to high-quality electronics components and empower the next generation 
                    of innovators, makers, and engineers. We believe that technology should be accessible to everyone, 
                    regardless of their background or experience level.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Through our comprehensive product range, educational resources, and community support, 
                    we're building a world where anyone can turn their ideas into reality.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 md:p-8">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl mb-4">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    To become the leading platform for electronics innovation in India and beyond, 
                    fostering a community of creators who push the boundaries of what's possible with technology.
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    We envision a future where every student, hobbyist, and professional has access to 
                    the tools and knowledge they need to bring their innovative ideas to life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Numbers that tell our story of growth and success
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">{value.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose SatyaElectronics Hub?</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                What makes us the preferred choice for electronics enthusiasts
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-semibold">Authentic Products</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  We partner with leading manufacturers to ensure you get only genuine, 
                  high-quality components with full warranty and support.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-semibold">Fast Delivery</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Free shipping on orders above ₹999 with reliable delivery across India. 
                  Get your components when you need them.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-semibold">Expert Support</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Our technical experts are here to help you choose the right components 
                  and provide guidance for your projects.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Meet the passionate people behind SatyaElectronics Hub
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  S
                </div>
                <h3 className="font-semibold mb-2">Satya Kumar</h3>
                <p className="text-sm text-muted-foreground mb-3">Founder & CEO</p>
                <p className="text-xs text-muted-foreground">
                  Electronics enthusiast with 10+ years of experience in embedded systems and IoT.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  T
                </div>
                <h3 className="font-semibold mb-2">Tech Team</h3>
                <p className="text-sm text-muted-foreground mb-3">Engineering Experts</p>
                <p className="text-xs text-muted-foreground">
                  Skilled engineers specializing in robotics, IoT, and embedded systems.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  C
                </div>
                <h3 className="font-semibold mb-2">Customer Support</h3>
                <p className="text-sm text-muted-foreground mb-3">24/7 Assistance</p>
                <p className="text-xs text-muted-foreground">
                  Dedicated team providing technical support and product guidance.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 md:py-12 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Building?</h2>
            <p className="text-base md:text-lg mb-6 opacity-90">
              Join thousands of makers and innovators who trust SatyaElectronics Hub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => navigate('/categories')}>
                Browse Products
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </StoreProvider>
  );
};

export default About; 