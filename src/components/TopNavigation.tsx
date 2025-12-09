import { Moon, Sun, Bookmark, FileText, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface TopNavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: string;
}

export function TopNavigation({ isDarkMode, toggleDarkMode, currentPage }: TopNavigationProps) {
  const navItems = [
    { id: 'about', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'photography', label: 'Photography' },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md border-b border-[#333333]/10 dark:border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-end gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm transition-colors hover:text-accent ${
                currentPage === item.id
                  ? 'text-burgundy dark:text-accent'
                  : 'text-[#333333]/60 dark:text-gray-400'
              }`}
            >
              {item.label}
            </a>
          ))}
          
          <div className="flex items-center gap-3 ml-2 pl-3 border-l border-[#333333]/10 dark:border-white/10">
            <button
              onClick={toggleDarkMode}
              className="p-1.5 hover:text-accent transition-colors text-[#333333]/60 dark:text-gray-400"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
