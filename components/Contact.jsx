'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HiEnvelope,
  HiMapPin,
  HiPaperAirplane,
  HiCheckCircle,
  HiSparkles,
} from 'react-icons/hi2';
import { FaGithub, FaLinkedin, FaXTwitter, FaDiscord } from 'react-icons/fa6';

const socialLinks = [
  { icon: FaGithub, href: '#', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/haymarmaw/', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: FaXTwitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
  { icon: FaDiscord, href: '#', label: 'Discord', color: 'hover:text-indigo-400' },
];

const contactInfo = [
  {
    icon: HiEnvelope,
    label: 'Email',
    value: 'haymarmaw@gmail.com',
    href: 'mailto:haymarmaw@gmail.com',
    color: 'text-primary-500 dark:text-primary-400',
  },
  {
    icon: HiMapPin,
    label: 'Location',
    value: 'Myanmar',
    color: 'text-accent-500 dark:text-accent-400',
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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white dark:bg-dark-950" />
        <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern bg-grid mask-radial opacity-50" />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/3 dark:bg-primary-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-20">
            <span className="inline-flex items-center gap-2 text-primary-500 dark:text-primary-400 font-mono text-sm tracking-widest uppercase">
              <HiSparkles className="w-4 h-4" />
              Contact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
              Let&apos;s{' '}
              <span className="gradient-text-static">Work Together</span>
            </h2>
            <p className="text-gray-500 dark:text-dark-400 text-lg max-w-2xl mx-auto text-balance">
              Have a project in mind or just want to chat? I&apos;d love to hear from you.
              Drop me a message and I&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Left - Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">Get in touch</h3>
                <p className="text-gray-500 dark:text-dark-400 text-sm leading-relaxed">
                  I&apos;m currently open to freelance opportunities and interesting collaborations.
                  Whether you have a project or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <motion.div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-xl glass border-gray-200/50 dark:border-dark-800/50"
                    whileHover={{ x: 4 }}
                  >
                    <span className={`p-2.5 rounded-lg bg-gray-100/50 dark:bg-dark-800/50 ${color}`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-dark-500 uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-gray-700 dark:text-dark-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-700 dark:text-dark-200">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs text-gray-400 dark:text-dark-500 uppercase tracking-wider mb-3">Follow Me</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`w-10 h-10 rounded-full glass border-gray-300/50 dark:border-dark-700/50 flex items-center justify-center text-gray-500 dark:text-dark-400 ${color} transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="p-6 sm:p-8 rounded-3xl glass border-gray-200/50 dark:border-dark-800/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-500/3 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs text-gray-500 dark:text-dark-400 uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-dark-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-gray-500 dark:text-dark-400 uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-dark-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 dark:text-dark-400 uppercase tracking-wider">Message</label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-dark-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitted}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                      submitted
                        ? 'bg-green-500/20 text-green-500 dark:text-green-400 border border-green-500/30'
                        : 'bg-primary-500 hover:bg-primary-400 text-white shadow-lg shadow-primary-500/25'
                    }`}
                    whileHover={submitted ? {} : { scale: 1.02 }}
                    whileTap={submitted ? {} : { scale: 0.98 }}
                  >
                    {submitted ? (
                      <>
                        <HiCheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
