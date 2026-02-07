import React from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ darkMode, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onToggle}
      className={`absolute top-16 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${
        darkMode 
          ? 'bg-[#232326] hover:bg-[#2C2C30] border-2 border-[#2C2C30]' 
          : 'bg-white hover:bg-gray-50 border-2 border-gray-200'
      }`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <Moon className="w-5 h-5 text-[#FFD76A]" fill="currentColor" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
}