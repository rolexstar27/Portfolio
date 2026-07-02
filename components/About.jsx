'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { HiCodeBracket, HiServer, HiPaintBrush, HiAcademicCap } from 'react-icons/hi2';
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa6';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql } from 'react-icons/si';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Shipped', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Commits', value: '2k+' },
];

const highlights = [
  { icon: HiCodeBracket, title: 'Frontend', desc: 'React, Next.js, TypeScript, Tailwind' },
  { icon: HiServer, title: 'Backend', desc: 'Node.js, PostgreSQL, Prisma, GraphQL' },
  { icon: HiPaintBrush, title: 'Design', desc: 'Figma, UI/UX, Design Systems' },
  { icon: HiAcademicCap, title: 'Learning', desc: 'Always exploring new technologies' },
];

const techStack = [
  { icon: FaReact, name: 'React', color: 'text-sky-400' },
  { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-900 dark:text-white' },
  { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
  { icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-400' },
  { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-400' },
  { icon: FaFigma, name: 'Figma', color: 'text-pink-400' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50/50 dark:bg-dark-950">
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern bg-grid mask-radial" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-20">
            <span className="text-primary-500 dark:text-primary-400 font-mono text-sm tracking-widest uppercase">About</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
              Turning Ideas Into{' '}
              <span className="gradient-text-static">Reality</span>
            </h2>
            <p className="text-gray-500 dark:text-dark-400 text-lg max-w-2xl mx-auto text-balance">
              I&apos;m a passionate developer who loves building products that make a difference.
              Clean code, thoughtful design, and delightful interactions are what I do best.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-20"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="relative group p-6 rounded-2xl glass border-gray-200/50 dark:border-dark-800/50 text-center overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <span className="block font-display text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-dark-400">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
            {/* Left - Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden gradient-border">
                <Image
                  src="/images/profile-image.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Decorative corner */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary-500/20 border border-primary-500/30" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-accent-500/20 border border-accent-500/30" />
              </div>

              {/* Floating Tech Bubbles */}
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className={`absolute w-12 h-12 rounded-xl glass border-gray-200/50 dark:border-dark-700/50 flex items-center justify-center ${tech.color}`}
                  style={{
                    top: `${15 + (i % 4) * 20}%`,
                    left: i < 4 ? '-10px' : undefined,
                    right: i >= 4 ? '-10px' : undefined,
                  }}
                  animate={{
                    y: [0, i % 2 === 0 ? -8 : 8, 0],
                    rotate: [0, i % 2 === 0 ? 5 : -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <tech.icon className="w-5 h-5" />
                </motion.div>
              ))}
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                A dedicated developer with a{' '}
                <span className="gradient-text-static">design eye</span>
              </h3>

              <div className="space-y-4 text-gray-600 dark:text-dark-300 leading-relaxed">
                <p>
                  With over 5 years of experience in full-stack development, I&apos;ve had the
                  privilege of working with startups and established companies to create
                  impactful digital products.
                </p>
                <p>
                  My approach combines technical excellence with creative problem-solving.
                  I believe the best products come from understanding both the code and the
                  people using it.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m exploring the intersection of technology and sustainable fashion trends—bringing the same eye for aesthetics and structure from the screen to the physical world.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {highlights.map(({ icon: Icon, title, desc }) => (
                  <motion.div
                    key={title}
                    className="flex items-start gap-3 p-3 rounded-xl glass border-gray-200/50 dark:border-dark-800/50 hover:border-primary-500/20 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="p-1.5 rounded-lg bg-primary-500/10 text-primary-500 dark:text-primary-400">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">{title}</h4>
                      <p className="text-gray-400 dark:text-dark-500 text-xs mt-0.5">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
