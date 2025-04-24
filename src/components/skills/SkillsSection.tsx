import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Code, Server, Cloud } from 'lucide-react';
import { skills } from '../../data/skills';
import SkillCard from './SkillCard';

const SkillsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const databaseSkills = skills.filter(skill => skill.category === 'database');
  const devopsSkills = skills.filter(skill => skill.category === 'DSA');

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
            }}
            className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
            }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            The technologies and tools I specialize in
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <SkillCard 
            title="Backend" 
            skills={backendSkills} 
            icon={<Server size={24} />} 
            delay={0.1} 
          />
          <SkillCard 
            title="Frontend" 
            skills={frontendSkills} 
            icon={<Code size={24} />} 
            delay={0.2} 
          />
          <SkillCard 
            title="Database" 
            skills={databaseSkills} 
            icon={<Database size={24} />} 
            delay={0.3} 
          />
          <SkillCard 
            title="DSA" 
            skills={devopsSkills} 
            icon={<Cloud size={24} />} 
            delay={0.4} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;