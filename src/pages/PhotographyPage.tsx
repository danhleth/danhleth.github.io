import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ImageWithFallback } from '../components/ImageWithFallback';

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1765217244517-f69de9ee20fd?w=1080&q=80&auto=format&fit=crop',
    title: 'Ngam cafe',
    category: 'Deep Scene'
  },
  {
    url: 'https://images.unsplash.com/photo-1765216557076-ef65d974fdb7?w=1080&q=80&auto=format&fit=crop',
    title: 'Main Gate Buddha Tooth Relic Temple',
    category: 'Architecture'
  },
  {
    url: 'https://images.unsplash.com/photo-1765216556947-5905de0ec9e5?w=1080&q=80&auto=format&fit=crop',
    title: 'Buddha Tooth Relic Temple',
    category: 'Architecture'
  },
  {
    url: 'https://images.unsplash.com/photo-1765216556940-7fd5814f89ed?w=1080&q=80&auto=format&fit=crop',
    title: 'Hilton Orchard',
    category: 'Architecture'
  },
  {
    url: 'https://images.unsplash.com/photo-1765216556955-572790df96ee?w=1080&q=80&auto=format&fit=crop',
    title: 'The Arc, NTU',
    category: 'Architecture'
  },
  {
    url: 'https://images.unsplash.com/photo-1765216556942-9e3faa9a4645?w=1080&q=80&auto=format&fit=crop',
    title: 'Corner at NTU',
    category: 'Architecture'
  },
  {
    url: 'https://images.unsplash.com/photo-1765216557007-9f068eee3cef?w=1080&q=80&auto=format&fit=crop',
    title: 'Pagoda Roof',
    category: 'Architecture'
  },
  {
    url: 'https://images.unsplash.com/photo-1765216557305-f14d7b17625c?w=1080&q=80&auto=format&fit=crop',
    title: 'Random Corner at Orchard',
    category: 'Architecture'
  }
];

export function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
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
        className="text-3xl mb-4 text-[#333333] dark:text-white relative inline-block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        photography
        <motion.div
          className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-accent to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.h1>
      
      <motion.p 
        className="text-[#333333] dark:text-gray-300 mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        A collection of visual explorations capturing <span className="text-accent">moments</span>, <span className="text-accent">patterns</span>, and <span className="text-accent">stories</span>. 
        Photography helps me understand <mark>composition</mark>, <mark>context</mark>, and the <mark>interplay of light</mark>—
        principles that inform my work in observing the world.
      </motion.p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedPhoto(index)}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900 relative group"
          >
            <ImageWithFallback
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
            />
            
            {/* Overlay with title */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-left">
                <p className="text-white text-sm">{photo.title}</p>
                <p className="text-white/60 text-xs">{photo.category}</p>
              </div>
            </motion.div>

            {/* Corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-accent border-r-transparent"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0, scale: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close"
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <X size={32} />
            </motion.button>
            
            <motion.div 
              className="max-w-5xl max-h-[90vh] relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <ImageWithFallback
                src={photos[selectedPhoto].url}
                alt={photos[selectedPhoto].title}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-lg">{photos[selectedPhoto].title}</p>
                <p className="text-white/60">{photos[selectedPhoto].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
