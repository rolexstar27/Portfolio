'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  HiArrowTopRightOnSquare,
  HiCodeBracket,
  HiSparkles,
  HiEye,
} from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa6';

const projects = [
  {
    title: 'Lumina Dashboard',
    description:
      'A real-time analytics dashboard with stunning data visualizations, dark mode, and role-based access control. Built for SaaS companies to track KPIs.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'tRPC'],
    color: 'from-violet-500/20 to-indigo-500/10',
    borderColor: 'border-violet-500/20',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    accent: 'text-violet-400',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'VibeKit UI Library',
    description:
      'A modern component library with 50+ accessible, animated React components. Features customizable themes, dark mode, and comprehensive documentation.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Storybook'],
    color: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/20',
    glowColor: 'rgba(6, 182, 212, 0.15)',
    accent: 'text-cyan-400',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'Forge E-Commerce',
    description:
      'Full-stack e-commerce platform with cart, checkout, Stripe integration, admin panel, and real-time inventory management.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    color: 'from-emerald-500/20 to-green-500/10',
    borderColor: 'border-emerald-500/20',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    accent: 'text-emerald-400',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format',
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'MindFlow AI',
    description:
      'AI-powered productivity app with smart task prioritization, natural language processing, and collaborative workspaces.',
    tags: ['React', 'Python', 'OpenAI', 'FastAPI', 'PostgreSQL'],
    color: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'border-amber-500/20',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    accent: 'text-amber-400',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format',
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'PixelSync',
    description:
      'Real-time collaborative design tool with WebSocket sync, version history, and export to multiple formats.',
    tags: ['Next.js', 'Socket.io', 'Canvas API', 'PostgreSQL', 'AWS S3'],
    color: 'from-pink-500/20 to-rose-500/10',
    borderColor: 'border-pink-500/20',
    glowColor: 'rgba(236, 72, 153, 0.15)',
    accent: 'text-pink-400',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&auto=format',
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'DevLog Platform',
    description:
      'A blogging platform optimized for developers with MDX support, syntax highlighting, and automated SEO optimization.',
    tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel', 'Contentlayer'],
    color: 'from-blue-500/20 to-sky-500/10',
    borderColor: 'border-blue-500/20',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    accent: 'text-blue-400',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&auto=format',
    demo: '#',
    github: '#',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 20 } },
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-full rounded-3xl bg-gradient-to-b ${project.color} glass border ${project.borderColor} overflow-hidden transition-all duration-500`}
        style={{
          boxShadow: isHovered ? `0 0 40px ${project.glowColor}, 0 0 80px ${project.glowColor}` : 'none',
        }}
      >
        {/* Image / Placeholder section */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          {project.image ? (
            <div className="absolute inset-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={project.featured}
              />
              {/* Gradient overlay for better text readability */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
            </div>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Animated background pattern */}
                <div className="relative w-full h-full">
                  <motion.div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border ${project.borderColor} opacity-30`}
                    animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border ${project.borderColor} opacity-20`}
                    animate={{ scale: [1.2, 0.8, 1.2], rotate: [360, 180, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 dark:bg-dark-950/60 backdrop-blur-md border border-primary-500/30 text-xs font-medium text-primary-600 dark:text-primary-300">
                <HiSparkles className="w-3 h-3" />
                Featured
              </span>
            </div>
          )}

          {/* Hover overlay with links */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/70 dark:bg-dark-950/70 backdrop-blur-sm flex items-center justify-center gap-4"
              >
                <motion.a
                  href={project.demo}
                  initial={{ scale: 0, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0, y: 10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-dark-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-dark-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiEye className="w-4 h-4" />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  initial={{ scale: 0, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0, y: 10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.05 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border-gray-300/50 dark:border-dark-700/50 text-gray-900 dark:text-white text-sm font-medium hover:border-primary-500/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-4 h-4" />
                  Source
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-500 dark:text-dark-400 text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-gray-100/50 dark:bg-dark-950/50 text-gray-500 dark:text-dark-500 border border-gray-200/50 dark:border-dark-800/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className={`h-0.5 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gray-50/50 dark:bg-dark-950" />
        <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-primary-500/3 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-primary-500 dark:text-primary-400 font-mono text-sm tracking-widest uppercase">Projects</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
            Selected{' '}
            <span className="gradient-text-static">Work</span>
          </h2>
          <p className="text-gray-500 dark:text-dark-400 text-lg max-w-2xl mx-auto text-balance">
            A showcase of projects that represent my passion for clean code, beautiful design,
            and exceptional user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full glass border-gray-300/50 dark:border-dark-700/50 text-gray-700 dark:text-dark-200 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-all duration-300 group"
            whileHover={{ scale: 1.03, borderColor: 'rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            View All Projects
            <HiArrowTopRightOnSquare className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
