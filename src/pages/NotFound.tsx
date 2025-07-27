import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex items-center justify-center min-h-[60vh] p-4">
        <Card className="max-w-md w-full text-center p-6 md:p-8">
          <CardContent className="space-y-4">
            <div className="text-6xl md:text-8xl font-bold text-primary mb-4">
              404
            </div>
            <h1 className="text-xl md:text-2xl font-semibold mb-2">
              Oops! Page not found
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => navigate('/')}
                className="w-full sm:w-auto"
              >
                Return to Home
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/categories')}
                className="w-full sm:w-auto"
              >
                Browse Categories
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
