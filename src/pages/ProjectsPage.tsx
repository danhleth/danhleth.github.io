import { motion } from 'framer-motion';
import { projects } from '../data/projects';

interface ProjectsPageProps {
  onProjectClick?: (projectId: string) => void;
}

export function ProjectsPage({ onProjectClick }: ProjectsPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-16 lg:pt-0"
    >
      <motion.h1 
        className="text-3xl mb-8 text-[#333333] dark:text-white relative inline-block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        projects
        <motion.div
          className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              y: -8,
              transition: { type: "spring", stiffness: 300 }
            }}
            onClick={() => onProjectClick?.(project.id)}
            className="group relative block p-6 bg-[#F5F5F7] dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800 overflow-hidden cursor-pointer"
          >
            {/* Animated gradient background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />
            
            {/* Hover border effect */}
            <motion.div
              className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100"
              initial={{ scale: 0.9, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative z-10">
              <h3 className="text-[#333333] dark:text-white mb-2 group-hover:text-accent dark:group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[#333333]/70 dark:text-gray-400 mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="text-xs px-2 py-1 bg-white dark:bg-[#1a1a1a] text-[#333333]/60 dark:text-gray-500 border border-gray-200 dark:border-gray-700 group-hover:border-accent dark:group-hover:border-accent transition-colors"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(180, 151, 90, 0.1)'
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
