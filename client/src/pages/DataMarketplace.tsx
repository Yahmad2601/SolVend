import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap } from "lucide-react";

export default function DataMarketplace() {
  const [, navigate] = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal automatically when the page loads
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-black">
      {/* Blurred Background Content */}
      <div className="min-h-screen container mx-auto px-6 py-24 blur-md select-none pointer-events-none">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Data Marketplace
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Unlock the power of ethical, real-time consumer insights.
        </p>
      </div>

      {/* "Coming Soon" Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="m-4 w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 p-8 text-center shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-primary/10">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white">
              Coming Soon
            </h2>
            <p className="mt-3 mb-8 text-gray-600 dark:text-gray-400">
              Our revolutionary Data Marketplace is under construction. Stay
              tuned for a new era of consumer insights.
            </p>
            <Button
              size="lg"
              onClick={handleGoBack}
              className="w-full text-sm font-semibold bg-gray-900 text-white rounded-lg hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
