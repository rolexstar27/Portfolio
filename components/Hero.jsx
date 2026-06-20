'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowDown, HiMapPin } from 'react-icons/hi2';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const FloatingShape = ({ className, delay = 0, duration = 20, size = 200 }) => (
  <motion.div
    className={`absolute rounded-full opacity-[0.04] dark:opacity-[0.03] bg-primary-500 ${className}`}
    style={{ width: size, height: size }}
    animate={{
      y: [0, -30, 0, 20, 0],
      x: [0, 20, -10, 15, 0],
      scale: [1, 1.05, 0.95, 1.02, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      }}
    />

    {/* Aurora gradient overlay */}
    <div className="absolute inset-0 aurora-bg opacity-50 dark:opacity-100" />

    {/* Floating shapes */}
    <FloatingShape className="top-[15%] left-[5%]" delay={0} size={300} />
    <FloatingShape className="top-[60%] right-[8%]" delay={3} size={250} duration={25} />
    <FloatingShape className="top-[20%] right-[25%]" delay={5} size={150} duration={18} />
    <FloatingShape className="bottom-[20%] left-[20%]" delay={2} size={180} duration={22} />
    <FloatingShape className="top-[40%] left-[40%]" delay={7} size={100} duration={15} />

    {/* Glow orbs */}
    <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary-400/5 dark:bg-primary-600/10 blur-[120px]" />
    <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent-400/5 dark:bg-accent-600/10 blur-[100px]" />
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-500/3 dark:bg-primary-500/5 blur-[150px]" />
  </div>
);

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <GridBackground />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-primary-500/20 text-sm text-primary-600 dark:text-primary-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-gray-900 dark:text-white">Crafting </span>
              <span className="gradient-text">Digital</span>
              <br />
              <span className="gradient-text">Experiences</span>
              <span className="text-gray-900 dark:text-white"> That </span>
              <br className="hidden sm:block" />
              <span className="text-gray-900 dark:text-white">Inspire</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-500 dark:text-dark-400 max-w-2xl mx-auto mb-4 text-balance leading-relaxed"
            >
              Full-stack developer specializing in building beautiful, performant, and
              accessible web applications with modern technologies.
            </motion.p>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-1.5 text-gray-400 dark:text-dark-500 mb-8">
              <HiMapPin className="w-4 h-4" />
              <span className="text-sm">Myanmar</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-3.5 rounded-full bg-primary-500 hover:bg-primary-400 text-white font-medium text-sm transition-colors duration-300 shadow-xl shadow-primary-500/25 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 rounded-full shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3.5 rounded-full glass border-gray-300/50 dark:border-dark-700/50 hover:border-primary-500/30 text-gray-700 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mb-16">
              {[
                { icon: FaGithub, href: '#', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/haymarmaw/', label: 'LinkedIn' },
                { icon: FaXTwitter, href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass border-gray-300/50 dark:border-dark-700/50 flex items-center justify-center text-gray-500 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-2 text-gray-400 dark:text-dark-600"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
              <div className="w-5 h-8 rounded-full border border-gray-300 dark:border-dark-700 flex items-start justify-center p-1">
                <motion.div
                  className="w-1 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
