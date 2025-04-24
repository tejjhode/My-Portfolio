import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

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
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary-100 dark:bg-secondary-900/20 blur-3xl opacity-60"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHUeRTmuOkU-A/profile-displayphoto-shrink_400_400/B4DZYowRDsG4Ag-/0/1744440464660?e=1750896000&v=beta&t=6qD216GuzRRRX4AjxjMiRmIdEKTe0BeOiPju_NjH9jc"
              alt="Tejaswa Jhode"
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Tejaswa Jhode</span>
              <br />
              Full Stack Java Developer
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            <TypewriterText 
              texts={[
                "Building enterprise solutions with Spring Boot & React",
                "Creating scalable web applications",
                "Turning ideas into robust software",
                "Passionate about clean code and best practices"
              ]} 
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary-600 dark:text-primary-400 font-medium border border-primary-200 dark:border-gray-700 transition-colors duration-300"
            >
              Let's Connect
            </button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ArrowDown className="text-primary-600 dark:text-primary-400" size={24} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;