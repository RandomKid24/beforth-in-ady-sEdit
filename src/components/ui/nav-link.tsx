import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
}

export function NavLink({ to, children, className = "", initial, animate, transition }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className="relative"
    >
      <Link
        to={to}
        className={`text-sm font-medium transition-colors ${
          isActive 
            ? 'text-foreground' 
            : 'text-muted-foreground hover:text-foreground'
        } ${className}`}
      >
        {children}
      </Link>
      {/* Subtle active indicator */}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          layoutId="activeNav"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.div>
  );
}
