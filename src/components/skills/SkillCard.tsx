import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';
import SkillBar from './SkillBar';

interface SkillCardProps {
  title: string;
  skills: Skill[];
  delay?: number;
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, delay = 0, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 p-2 bg-primary-100 dark:bg-primary-900/20 rounded-full text-primary-600 dark:text-primary-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={delay + index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;