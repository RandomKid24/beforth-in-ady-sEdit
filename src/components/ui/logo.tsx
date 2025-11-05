import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function Logo() {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? "/images/befu-white.png" : "/images/befu.png";
  
  return (
    <motion.img 
      src={logoSrc} 
      alt="Beforth Logo" 
      className="h-12 w-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}