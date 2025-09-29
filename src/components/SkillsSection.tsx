import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      category: "Web Design & Deployment",
      items: [
        { name: "Three.js", level: 88 },
        { name: "Three.js Fiber", level: 75 },
        { name: "Motion/Framer", level: 90 },
        { name: "GSAP Animation", level: 82 }
      ]
    },
    {
      category: "Design Tools Usage & AIML",
      items: [
        { name: "Figma", level: 63 },
        { name: "Adobe Creative Suite", level: 55 },
        { name: "Blender", level: 78 },
        { name: "Deep Learning", level: 52 },
        { name: "Machine Learning", level: 50 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Since I am a fresher, and my college (KHIT) is known for its scarcity on practical skills, I have worked on various projects and gained experience in different technologies. Here are some of my key skills:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              variants={skillVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              whileHover={{ 
                backgroundColor: 'rgba(255,255,255,0.08)',
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {skillGroup.category}
              </h3>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: groupIndex * 0.2 + index * 0.1 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-white text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          delay: groupIndex * 0.2 + index * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}