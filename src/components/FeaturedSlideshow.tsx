import ProductSlideshow from './ProductSlideshow';

const FeaturedSlideshow = () => {
  const featuredSlides = [
    {
      id: "slide-1",
      title: "Arduino Uno R3",
      subtitle: "The perfect starting point for your electronics journey",
      description: "Learn programming and electronics with the world's most popular microcontroller board. Perfect for beginners and experts alike.",
      image: "/hero-electronics-BQYrp0vT.jpg",
      cta: "Shop Arduino",
      ctaLink: "/category/arduino",
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "slide-2",
      title: "Raspberry Pi 4",
      subtitle: "Powerful computing for makers and developers",
      description: "Build amazing projects with the latest Raspberry Pi. From home automation to media centers, the possibilities are endless.",
      image: "/hero-electronics-BQYrp0vT.jpg",
      cta: "Explore Pi",
      ctaLink: "/category/raspberry-pi",
      color: "from-green-600 to-green-800"
    },
    {
      id: "slide-3",
      title: "ESP32 Development Kit",
      subtitle: "WiFi and Bluetooth connectivity for IoT projects",
      description: "Create smart devices and IoT applications with the versatile ESP32. Built-in WiFi and Bluetooth make it perfect for connected projects.",
      image: "/hero-electronics-BQYrp0vT.jpg",
      cta: "Get ESP32",
      ctaLink: "/category/esp32",
      color: "from-purple-600 to-purple-800"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular electronics components and development boards
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ProductSlideshow 
            slides={featuredSlides}
            autoPlay={true}
            interval={4000}
            showControls={true}
            showIndicators={true}
            height="h-80 md:h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlideshow; 