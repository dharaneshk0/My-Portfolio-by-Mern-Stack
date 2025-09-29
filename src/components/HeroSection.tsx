import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export function HeroSection() {
  const [showEnglish, setShowEnglish] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnglish(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Fullscreen Background video */}
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/20 to-black/60" />

      {/* Foreground content */}
      <div className="relative z-10 text-center px-6">
        {/* Japanese to English Name Transition */}
        <div className="relative h-32 mb-8">
          <motion.h1
            className="absolute inset-0 text-6xl md:text-8xl font-bold text-white"
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: showEnglish ? 0 : 1,
              y: showEnglish ? -20 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Japanese Name Here */}
          </motion.h1>

          <motion.h1
            className="absolute inset-0 text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: showEnglish ? 1 : 0,
              y: showEnglish ? 0 : 20,
            }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            Gummalla Dharanesh Kumar
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="space-y-4"
        >
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Creative Developer And AI & ML Engineer
          </motion.p>

          <motion.p
            className="text-lg text-black-400 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Crafting immersive digital experiences through code, design, and
            innovation
          </motion.p>
        </motion.div>

        {/* Floating action button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-12"
        >
          <motion.button
            className="px-8 py-3 bg-white/10 backdrop--sm border border-pink/20 rounded-full text-white hover:bg-black/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-19 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
