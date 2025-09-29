import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import myPhoto from "../assets/myphoto.jpg"; // <-- add your photo here

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side: Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white"
              variants={itemVariants}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate creative developer who bridges the gap between
              design and technology. With a background in both visual arts and
              computer science, I create immersive digital experiences that
              captivate and inspire.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              My work spans across web development, 3D graphics, interactive
              installations, and digital art. I believe in the power of
              technology to tell stories and create meaningful connections
              between people and digital spaces.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                "Frontend Developer",
                "Backend Developer",
                "AI & ML Engineer",
                "Motion Design",
                "UI/UX",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side: Photo */}
          <motion.div variants={itemVariants} className="relative">
            <motion.img
              src={"/myphoto.png"}
              alt="My Photo"
              className="w-full h-96 object-cover rounded-2xl border border-white/10 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
