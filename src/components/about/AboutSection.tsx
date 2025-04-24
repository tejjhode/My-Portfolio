import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const [yearsExperience, setYearsExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Animate the counters when the section is in view
      const experienceInterval = setInterval(() => {
        setYearsExperience(prev => (prev < 8 ? prev + 1 : prev));
      }, 200);
      
      const projectsInterval = setInterval(() => {
        setProjects(prev => (prev < 50 ? prev + 1 : prev));
      }, 40);
      
      const clientsInterval = setInterval(() => {
        setClients(prev => (prev < 20 ? prev + 1 : prev));
      }, 100);
      
      return () => {
        clearInterval(experienceInterval);
        clearInterval(projectsInterval);
        clearInterval(clientsInterval);
      };
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

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
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
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
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
            Get to know more about me, my background, and what I do
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQHUeRTmuOkU-A/profile-displayphoto-shrink_400_400/B4DZYowRDsG4Ag-/0/1744440464660?e=1750896000&v=beta&t=6qD216GuzRRRX4AjxjMiRmIdEKTe0BeOiPju_NjH9jc"
                alt=""
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 dark:bg-primary-900/20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-100 dark:bg-secondary-900/20 rounded-full -z-10"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Full Stack Java Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            I’m a motivated and detail-oriented software developer with hands-on experience in full-stack web development, IoT solutions, and AI-based applications. As a passionate learner and builder, I thrive on creating scalable, efficient systems that solve real-world problems. I have practical experience working with technologies like React, Java Spring Boot, and cloud platforms, and I enjoy integrating smart, modern tech into user-friendly applications. Whether it’s developing web interfaces, building IoT systems, or applying AI to enhance user experience, I love exploring how different domains intersect. Currently, I’m seeking innovative opportunities to contribute to meaningful projects, grow as a developer, and make a positive impact through technology.
            </p>
            
            <div className="grid grid-cols-3 gap-4 py-4">
              {/* <div className="text-center">
                <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400">{yearsExperience}+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400">{projects}+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400">{clients}+</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Clients</p>
              </div> */}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                 href="https://drive.google.com/file/d/1ouFMWegRLJtb-PWMDokI9Gn5-ecyrZbh/view?usp=sharing"  
                 target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors duration-300"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary-600 dark:text-primary-400 font-medium border border-primary-200 dark:border-gray-700 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;