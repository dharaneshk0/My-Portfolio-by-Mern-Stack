import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6 border-t border-pink/10 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // triggers earlier
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          {/* Left side text */}
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              © 2024 Gummalla Dharanesh Kumar. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Crafted with passion and creativity
            </p>
          </div>

          {/* Right side heart animation */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gray-300 text-sm">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-red-400"
            >
              ❤️
            </motion.div>
            <span className="text-gray-300 text-sm">in Guntur</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
