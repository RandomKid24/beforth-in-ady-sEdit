import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function Loading() {
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? "/images/befu-white.png" : "/images/befu.png";

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Bird Logo with Flight Animation */}
        <motion.div
          className="mb-12 relative"
          initial={{ scale: 0, rotate: -180, y: -100 }}
          animate={{ scale: 1, rotate: 0, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
          }}
        >
          {/* Flight path trail effect */}
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1.2, 1.4],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
              >
                <div className="w-24 h-24 border-2 border-blue-500/20 rounded-full" />
              </motion.div>
            ))}
          </div>

          {/* Bird logo with flapping/flying animation */}
          <motion.div
            className="relative z-10"
            animate={{
              y: [0, -15, 0, -10, 0],
              rotate: [0, -2, 2, -1, 0],
              scale: [1, 1.05, 0.98, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={logoSrc}
              alt="Beforth Bird"
              className="w-24 h-24 object-contain drop-shadow-2xl"
              animate={{
                filter: [
                  "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
                  "drop-shadow(0 0 30px rgba(147, 51, 234, 0.6))",
                  "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Wing flap particles */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{
                  x: -4,
                  y: -4,
                  opacity: 0,
                }}
                animate={{
                  x: [0, Math.cos((angle * Math.PI) / 180) * 60],
                  y: [0, Math.sin((angle * Math.PI) / 180) * 60],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </motion.div>

        {/* Company name */}
        <motion.h2
          className="text-2xl font-semibold text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Beforth
          </span>
        </motion.h2>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Progress percentage */}
        <motion.p
          className="mt-4 text-sm text-muted-foreground font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress}%
        </motion.p>

        {/* Loading text - Bird themed */}
        <motion.div
          className="mt-6 text-base text-muted-foreground font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span>Spreading wings</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ...
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
