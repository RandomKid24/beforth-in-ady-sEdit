import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import { Logo } from './logo';

interface MobileMenuProps {
  navItems: {
    name: string;
    link: string;
  }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 right-0 top-0 z-[101] bg-background shadow-2xl"
            >
              <div className="flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-background">
                  <div className="flex items-center gap-2">
                    <Logo />
                    <span className="text-xl font-semibold text-foreground">Beforth</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                {/* Navigation */}
                <nav className="px-4 py-6 bg-background">
                  <div className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.link}
                          className="block px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all"
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};