import { Truck, Shield, Calendar, Wrench, Download, Smartphone, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, CreditCard } from 'lucide-react';
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

  const quickLinks = [
    { name: "All Categories", path: "/categories" },
    { name: "DIY Projects", path: "/projects" },
    { name: "Learn & Courses", path: "/courses" },
    { name: "Technical Support", path: "/support" },
    { name: "Bulk Orders", path: "/bulk-orders" }
  ];

  const popularCategories = [
    "Arduino", "Raspberry Pi", "Sensors", "Drone Parts", "IoT & Wireless"
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Youtube, name: "YouTube", href: "#" }
  ];

  const paymentMethods = [
    { name: "Visa", icon: CreditCard },
    { name: "Mastercard", icon: CreditCard },
    { name: "UPI", icon: CreditCard },
    { name: "PayPal", icon: CreditCard },
    { name: "Net Banking", icon: CreditCard }
  ];

  const handlePageClick = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                SatyaElectronics
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Your trusted partner for electronics, robotics, and IoT solutions. 
                We aim at fostering the growth of knowledge in Embedded Systems, IoT and Automation.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-sm text-gray-600">+91 812 3057 137</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-sm text-gray-600">support@satyaelectronics.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-sm text-gray-600">Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Payment Methods</h4>
              <div className="flex gap-2 items-center">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-1 text-xs text-gray-600">
                    <method.icon className="h-3 w-3" />
                    <span>{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handlePageClick(link.path)}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors block py-1 text-left w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Popular Categories</h4>
            <ul className="space-y-2">
              {popularCategories.map((category, index) => (
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

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-lg">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                aria-label="Email for newsletter subscription"
              />
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceHighlights.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <service.icon className="h-6 w-6 text-red-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{service.title}</p>
                  <p className="text-xs text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 text-center md:text-left">
              © 2024 SatyaElectronics. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 