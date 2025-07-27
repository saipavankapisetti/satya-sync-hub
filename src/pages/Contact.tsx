import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StoreProvider } from '@/contexts/StoreContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "support@satyaelectronics.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9876543210",
      description: "Mon-Sat 9AM-6PM"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Bangalore, Karnataka, India",
      description: "Visit our office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Saturday",
      description: "9:00 AM - 6:00 PM"
    }
  ];

  return (
    <StoreProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Contact Us
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-90 px-4">
              Have questions? Need technical support? Want to partner with us? 
              We're here to help you succeed with your electronics projects.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                We'd love to hear from you. Here's how you can reach us.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center p-4 md:p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm md:text-base">{info.title}</h3>
                  <p className="text-sm md:text-base text-primary font-medium mb-1">{info.details}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{info.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="p-6 md:p-8">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl mb-4">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm md:text-base">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="text-sm md:text-base"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm md:text-base">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="text-sm md:text-base"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="text-sm md:text-base"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full text-sm md:text-base">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map & Additional Info */}
              <div className="space-y-6">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl mb-4">Visit Our Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted h-48 rounded-lg mb-4 flex items-center justify-center">
                      <p className="text-muted-foreground text-sm">Map placeholder</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm md:text-base">
                        <strong>Address:</strong><br />
                        SatyaElectronics Hub<br />
                        Electronics Street, Tech Park<br />
                        Bangalore, Karnataka 560001<br />
                        India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl mb-4">Quick Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm md:text-base">Technical Support</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Need help with product selection or technical questions? 
                        Our experts are here to help.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm md:text-base">Bulk Orders</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Looking for bulk quantities? Contact us for special pricing 
                        and dedicated support.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm md:text-base">Partnership</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Interested in becoming a partner or supplier? 
                        Let's discuss opportunities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-3 text-sm md:text-base">How do I track my order?</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  You'll receive a tracking number via email once your order ships. 
                  You can also track it from your account dashboard.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-3 text-sm md:text-base">What's your return policy?</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  We offer a 7-day return policy for most products. 
                  Contact us within 7 days of delivery for returns.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-3 text-sm md:text-base">Do you ship internationally?</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Yes, we ship to most countries. Shipping costs and delivery times 
                  vary by location.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-3 text-sm md:text-base">Can I get technical support?</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Absolutely! Our technical team is available to help with product 
                  selection and technical questions.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </StoreProvider>
  );
};

export default Contact; 