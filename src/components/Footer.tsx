import { Truck, Shield, Calendar, Wrench, Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const serviceHighlights = [
    {
      icon: Truck,
      title: "Worldwide Shipping",
      description: "Fast delivery worldwide"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "100% secure payment"
    },
    {
      icon: Calendar,
      title: "7 Day Return Policy",
      description: "Easy returns within 7 days"
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Expert technical assistance"
    }
  ];

  const topCategories = [
    "STEM Kits", "Raspberry Pi", "Arduino", "Compatible with Arduino",
    "Electronic Components", "Electronic Modules", "Drone Parts", "3D Printers/Pens",
    "IOT & Wireless Boards", "Sensors", "Motors & Mechanical", "Development Boards",
    "Display Module", "Batteries & Power Supply", "Cables", "Tools & Instruments"
  ];

  const shopByBrand = [
    "Raspberry Pi", "Arduino", "BBC Micro:Bit", "Seeed Studio", "Bonka LiPo Batteries",
    "Matata STEM Kit", "Acebott STEM Kit", "Elephant Robotics", "Waveshare", "7Semi",
    "Noel India", "Elecrow", "Hiwonder", "DFRobot", "Cytron", "Bambu Lab", "Witty Fox",
    "Multitec", "MetroQ"
  ];

  const blogs = [
    "Arduino Pin Configuration", "What is AH in Battery", "IR Sensor Working",
    "Types of Sensors in IoT", "Drone Part List", "How to Choose ESC for Quadcopter",
    "What is Motor Driver"
  ];

  const pages = [
    { name: "IoT", path: "/iot" },
    { name: "Robotics", path: "/robotics" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];



  const handlePageClick = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Information & Services - Wider column on desktop */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                satyaelectronics
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                SatyaElectronics Hub is India's most trusted Robotics and DIY store. 
                We aim at fostering the growth of knowledge in Embedded Systems, IoT and Automation.
              </p>
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {serviceHighlights.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <service.icon className="h-5 w-5 text-gray-700" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{service.title}</p>
                    <p className="text-xs text-gray-500">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download App Section */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="h-5 w-5 text-gray-700" />
                <span className="font-medium text-gray-900">DOWNLOAD APP</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-black text-white hover:bg-gray-800">
                  <Download className="h-4 w-4 mr-2" />
                  Android
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  iOS
                </Button>
              </div>
            </div>
          </div>

          {/* Top Categories */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Top Categories</h4>
            <ul className="space-y-2">
              {topCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors block py-1"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop By Brand */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Shop By Brand</h4>
            <ul className="space-y-2">
              {shopByBrand.map((brand, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors block py-1"
                  >
                    {brand}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Pages</h4>
            <ul className="space-y-2">
              {pages.map((page, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handlePageClick(page.path)}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors block py-1 text-left w-full"
                  >
                    {page.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Blogs */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Blogs</h4>
            <ul className="space-y-2">
              {blogs.map((blog, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors block py-1"
                  >
                    {blog}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2024 SatyaElectronics Hub. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Follow us:</span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Button>
                <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Button>
                <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 