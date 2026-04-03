import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial 1.2s delay for the initial premium load experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center flex-col"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-display font-bold tracking-widest text-text-primary mb-6 uppercase"
          >
            Aura<span className="text-primary">.</span>
          </motion.div>
          
          {/* Minimalist Progress Line */}
          <div className="w-32 h-px bg-surface-high relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              className="absolute inset-y-0 w-full bg-primary-gradient"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
