import { Card } from '@/components/ui/card';

const partners = [
  { name: 'Arduino', logo: '🤖' },
  { name: 'Raspberry Pi', logo: '🍓' },
  { name: 'Adafruit', logo: '🌟' },
  { name: 'SparkFun', logo: '⚡' },
  { name: 'Texas Instruments', logo: '🔧' },
  { name: 'STMicroelectronics', logo: '🔌' },
  { name: 'Nordic', logo: '📡' },
  { name: 'Espressif', logo: '📶' },
  { name: 'Seeed Studio', logo: '🌱' },
  { name: 'DFRobot', logo: '🤖' },
  { name: 'Waveshare', logo: '🌊' },
  { name: 'MicroPython', logo: '🐍' },
];

const Partners = () => {
  return (
    <section className="py-8 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Trusted Partners
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            We collaborate with leading electronics manufacturers and open-source communities
            to bring you the best products and solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
          {partners.map((partner) => (
            <Card
              key={partner.name}
              className="p-3 md:p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 group bg-gradient-card"
            >
              <div className="text-2xl md:text-4xl mb-2 md:mb-3 group-hover:animate-bounce">
                {partner.logo}
              </div>
              <h3 className="font-medium text-xs md:text-sm group-hover:text-primary transition-colors">
                {partner.name}
              </h3>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            Want to become a partner? 
            <a href="#" className="text-primary hover:underline ml-1">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;