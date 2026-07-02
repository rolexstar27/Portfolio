'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiFigma, SiVuedotjs, SiGit, SiVercel, SiJest, SiFramer,
  SiJquery, SiPhp, SiSupabase, SiNetlify,
} from 'react-icons/si';
import { FaCode, FaAws, FaDatabase, FaHtml5, FaCss3Alt, FaCloud, FaPaintbrush, FaImage } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi2';

const skillCategories = [
  {
    label: 'UI/UX',
    icon: SiFigma,
    color: 'text-pink-400',
    bg: 'from-pink-500/10 to-pink-500/5',
    border: 'border-pink-500/20',
    skills: [
      { name: 'Figma', level: 92, icon: SiFigma, color: 'text-purple-400', barColor: 'from-purple-400 via-pink-500 to-red-600' },
      { name: 'Adobe XD', level: 85, icon: FaPaintbrush, color: 'text-pink-500', barColor: 'from-pink-400 via-fuchsia-500 to-purple-600' },
      { name: 'Adobe Photoshop', level: 88, icon: FaImage, color: 'text-blue-400', barColor: 'from-blue-400 via-cyan-500 to-sky-600' },
      { name: 'HTML5', level: 95, icon: FaHtml5, color: 'text-orange-400', barColor: 'from-orange-400 via-red-500 to-red-700' },
      { name: 'CSS3', level: 93, icon: FaCss3Alt, color: 'text-blue-400', barColor: 'from-blue-400 via-blue-500 to-indigo-600' },
      { name: 'jQuery', level: 80, icon: SiJquery, color: 'text-blue-300', barColor: 'from-blue-300 via-blue-400 to-blue-600' },
    ],
  },
  {
    label: 'Frontend',
    icon: SiReact,
    color: 'text-sky-400',
    bg: 'from-sky-500/10 to-sky-500/5',
    border: 'border-sky-500/20',
    skills: [
      { name: 'React', level: 95, icon: SiReact, color: 'text-sky-400', barColor: 'from-sky-400 via-sky-500 to-blue-600' },
      { name: 'Next.js', level: 90, icon: SiNextdotjs, color: 'text-gray-900 dark:text-white', barColor: 'from-gray-700 via-gray-800 to-black dark:from-gray-300 dark:via-gray-200 dark:to-white' },
      { name: 'TypeScript', level: 92, icon: SiTypescript, color: 'text-blue-500', barColor: 'from-blue-400 via-blue-500 to-blue-700' },
      { name: 'Tailwind CSS', level: 95, icon: SiTailwindcss, color: 'text-cyan-400', barColor: 'from-cyan-400 via-cyan-500 to-teal-600' },
      { name: 'Vue.js', level: 75, icon: SiVuedotjs, color: 'text-emerald-400', barColor: 'from-emerald-400 via-green-500 to-green-700' },
      { name: 'Framer Motion', level: 88, icon: SiFramer, color: 'text-purple-400', barColor: 'from-purple-400 via-purple-500 to-indigo-600' },
    ],
  },
  {
    label: 'Backend',
    icon: FaCode,
    color: 'text-green-400',
    bg: 'from-green-500/10 to-green-500/5',
    border: 'border-green-500/20',
    skills: [
      { name: 'ASP.NET', level: 85, icon: FaCode, color: 'text-purple-400', barColor: 'from-purple-400 via-violet-500 to-indigo-700' },
      { name: 'PHP', level: 82, icon: SiPhp, color: 'text-indigo-400', barColor: 'from-indigo-400 via-blue-500 to-blue-700' },
      { name: 'Node.js', level: 90, icon: SiNodedotjs, color: 'text-green-500', barColor: 'from-green-400 via-green-500 to-emerald-700' },
      { name: 'SQL', level: 88, icon: FaDatabase, color: 'text-blue-400', barColor: 'from-blue-400 via-blue-500 to-indigo-700' },
      { name: 'RESTful APIs', level: 90, icon: FaCode, color: 'text-emerald-400', barColor: 'from-emerald-400 via-green-500 to-teal-700' },
      { name: 'Supabase', level: 80, icon: SiSupabase, color: 'text-emerald-400', barColor: 'from-emerald-400 via-green-500 to-green-700' },
    ],
  },
  {
    label: 'DevOps & Tools',
    icon: FaCode,
    color: 'text-purple-400',
    bg: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
    skills: [
      { name: 'Azure', level: 82, icon: FaCloud, color: 'text-blue-400', barColor: 'from-blue-400 via-sky-500 to-cyan-600' },
      { name: 'Git', level: 92, icon: SiGit, color: 'text-orange-400', barColor: 'from-orange-400 via-red-500 to-red-700' },
      { name: 'AWS', level: 72, icon: FaAws, color: 'text-yellow-400', barColor: 'from-amber-400 via-orange-500 to-red-600' },
      { name: 'Vercel', level: 88, icon: SiVercel, color: 'text-gray-900 dark:text-white', barColor: 'from-gray-600 via-gray-700 to-black dark:from-gray-200 dark:via-gray-100 dark:to-white' },
      { name: 'Netlify', level: 80, icon: SiNetlify, color: 'text-teal-400', barColor: 'from-teal-400 via-cyan-500 to-green-600' },
      { name: 'Jest', level: 85, icon: SiJest, color: 'text-red-400', barColor: 'from-red-400 via-rose-500 to-red-800' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

const SkillBar = ({ skill, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 100, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <skill.icon className={`w-4 h-4 ${skill.color}`} />
          <span className="text-sm font-medium text-gray-700 dark:text-dark-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="text-xs font-mono text-primary-500 dark:text-primary-400"
            >
              {skill.level}%
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className="h-2 rounded-full bg-gray-200 dark:bg-dark-800 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${skill.barColor}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: 0.3 + index * 0.08, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 shimmer-bg" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillCard = ({ category, isInView, index }) => (
  <motion.div
    variants={itemVariants}
    custom={index}
    className={`relative group p-6 sm:p-8 rounded-3xl bg-gradient-to-b ${category.bg} glass border ${category.border} overflow-hidden`}
    whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
  >
    {/* Hover glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent blur-xl" />
    </div>

    {/* Category Header */}
    <div className="flex items-center gap-3 mb-8 relative z-10">
      <span className={`p-2.5 rounded-xl bg-gray-100/50 dark:bg-dark-800/50 ${category.color}`}>
        <category.icon className="w-5 h-5" />
      </span>
      <div>
        <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">{category.label}</h3>
        <p className="text-xs text-gray-400 dark:text-dark-500">{category.skills.length} technologies</p>
      </div>
    </div>

    {/* Skills */}
    <div className="space-y-4 relative z-10">
      {category.skills.map((skill, i) => (
        <SkillBar key={skill.name} skill={skill} index={i} isInView={isInView} />
      ))}
    </div>

    {/* Corner accent */}
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <HiSparkles className="w-4 h-4 text-primary-400" />
    </div>
  </motion.div>
);

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white dark:bg-dark-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/3 dark:bg-primary-500/3 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-primary-500 dark:text-primary-400 font-mono text-sm tracking-widest uppercase">Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Technologies I{' '}
            <span className="gradient-text-static">Excel At</span>
          </h2>
          <p className="text-gray-500 dark:text-dark-400 text-lg max-w-2xl mx-auto text-balance">
            A curated set of tools and technologies I use daily to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, i) => (
            <SkillCard key={category.label} category={category} isInView={isInView} index={i} />
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 dark:text-dark-500 text-sm mb-4">Also experienced with</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['SASS', 'Webpack', 'CI/CD', 'Agile/Scrum', 'Responsive Design', 'Accessibility', 'SEO', 'Docker', 'Firebase', 'GraphQL'].map(
              (tag) => (
                <motion.span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-900 text-gray-500 dark:text-dark-400 border border-gray-200 dark:border-dark-800 hover:border-primary-500/30 hover:text-gray-700 dark:hover:text-dark-200 transition-colors cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tag}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
