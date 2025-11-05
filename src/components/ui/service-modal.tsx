import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, BarChart3, Zap } from 'lucide-react';
import { Button } from './button';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    benefits: string[];
    process: string[];
    pricing?: string;
  };
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 z-50 max-w-4xl mx-auto my-8 bg-background rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            <div className="flex flex-col h-full max-h-[90vh]">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-muted/30">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">{service.title}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <BarChart3 className="h-5 w-5 text-blue-500 mr-2" />
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="flex items-start space-x-3"
                        >
                          <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Implementation Process */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                    <Zap className="h-5 w-5 text-purple-500 mr-2" />
                    Implementation Process
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {service.process.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="relative p-4 rounded-xl bg-muted/50 border border-border"
                      >
                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border bg-muted/30">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-muted-foreground">
                      Ready to get started with {service.title.toLowerCase()}?
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={onClose}>
                      Close
                    </Button>
                    <Button>
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};