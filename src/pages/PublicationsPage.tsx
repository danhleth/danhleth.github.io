import { motion } from 'framer-motion';
import { useState } from 'react';
import { publications } from '../data/publications';

export function PublicationsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        publications
        <motion.div
          className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.h1>
      
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative pl-6 group"
          >
            {/* Decorative line */}
            <motion.div
              className="absolute left-0 top-0 w-1 h-full rounded-full"
              style={{ backgroundColor: pub.color }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: hoveredIndex === index ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3 mb-2">
                <h3 className="text-[#333333] dark:text-white flex-1 group-hover:text-accent dark:group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
                {pub.rank && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 whitespace-nowrap">
                    {pub.rank}
                  </span>
                )}
              </div>
              
              {pub.awards && pub.awards.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {pub.awards.map((award, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 text-xs font-medium rounded bg-burgundy/10 text-burgundy dark:bg-burgundy/20 dark:text-accent border border-burgundy/20"
                    >
                      🏆 {award}
                    </span>
                  ))}
                </div>
              )}
              
              <p className="text-sm text-[#333333]/70 dark:text-gray-400 mb-1">
                {pub.authors}
              </p>
              <p className="text-sm text-[#333333]/60 dark:text-gray-500">
                <span className="italic">{pub.venue}</span>, {pub.year}
                {' • '}
                <motion.a 
                  href={pub.link} 
                  className="text-accent hover:underline inline-flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                >
                  PDF
                  <motion.span
                    animate={{ x: hoveredIndex === index ? 3 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
