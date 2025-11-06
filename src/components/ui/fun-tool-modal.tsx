import { motion, AnimatePresence } from 'framer-motion';
import { X, RefreshCw, Copy } from 'lucide-react';
import { Button } from './button';
import { useState } from 'react';

interface FunToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'quote' | 'compliment' | 'badge';
}

const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "Stay hungry, stay foolish.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Don't watch the clock; do what it does. Keep going.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
];

const compliments = [
  "Your problem-solving skills are outstanding!",
  "You bring so much creativity to the team!",
  "Your attention to detail is impressive!",
  "You're a great team player!",
  "Your positive attitude is contagious!",
  "You always go above and beyond!",
  "Your work ethic is admirable!",
  "You're a natural leader!",
];

const badges = [
  { title: "Code Warrior", desc: "Squashed 100+ bugs" },
  { title: "Team Player", desc: "Always ready to help" },
  { title: "Early Bird", desc: "First one in the office" },
  { title: "Coffee Champion", desc: "Fueled by caffeine" },
  { title: "Innovation Expert", desc: "Always thinking ahead" },
  { title: "Meeting Master", desc: "Keeps everyone on track" },
];

export function FunToolModal({ isOpen, onClose, type }: FunToolModalProps) {
  const getRandomIndex = (arrayLength: number) => Math.floor(Math.random() * arrayLength);
  
  const [currentItem, setCurrentItem] = useState(() => {
    switch (type) {
      case 'quote':
        return getRandomIndex(quotes.length);
      case 'compliment':
        return getRandomIndex(compliments.length);
      case 'badge':
        return getRandomIndex(badges.length);
      default:
        return 0;
    }
  });
  const [copied, setCopied] = useState(false);

  const getContent = () => {
    switch (type) {
      case 'quote':
        return quotes[currentItem];
      case 'compliment':
        return compliments[currentItem];
      case 'badge':
        return badges[currentItem];
      default:
        return '';
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'quote':
        return 'Office Quote';
      case 'compliment':
        return 'Workplace Compliment';
      case 'badge':
        return 'Achievement Badge';
      default:
        return '';
    }
  };

  const handleGenerate = () => {
    const maxLength = type === 'badge' ? badges.length : type === 'quote' ? quotes.length : compliments.length;
    setCurrentItem(Math.floor(Math.random() * maxLength));
    setCopied(false);
  };

  const handleCopy = () => {
    const content = type === 'badge' 
      ? `${badges[currentItem].title}: ${badges[currentItem].desc}`
      : getContent();
    navigator.clipboard.writeText(content as string);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-background rounded-2xl shadow-2xl w-full max-w-[90%] sm:max-w-md p-4 sm:p-6 relative border border-border pointer-events-auto"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 pr-8">{getTitle()}</h2>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 min-h-[120px] sm:min-h-[150px] flex items-center justify-center">
                  {type === 'badge' ? (
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl mb-2">🏆</div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                        {badges[currentItem].title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{badges[currentItem].desc}</p>
                    </div>
                  ) : (
                    <p className="text-base sm:text-lg text-foreground leading-relaxed px-2">
                      {getContent() as string}
                    </p>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleGenerate}
                    className="flex-1 w-full"
                    size="lg"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Generate New
                  </Button>
                  <Button
                    onClick={handleCopy}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
