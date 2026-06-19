'use client';

import { motion } from 'framer-motion';
import { HiArrowUp, HiHeart } from 'react-icons/hi2';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaXTwitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-dark-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-1">
            <a href="#hero" onClick={scrollToTop} className="inline-flex items-center gap-2 group mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/25">
                A
              </span>
              <span className="font-display font-bold text-lg text-white">
                Alex<span className="text-primary-400">.</span>Chen
              </span>
            </a>
            <p className="text-dark-500 text-sm leading-relaxed max-w-xs">
              Crafting digital experiences with clean code, thoughtful design, and a passion for excellence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-dark-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full glass border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-600 text-xs flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Alex Chen. Made with
            <HiHeart className="w-3 h-3 text-red-400 inline animate-pulse" />
            and lots of ☕
          </p>

          <motion.a
            href="#hero"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-dark-500 hover:text-white text-xs transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top
            <span className="p-1 rounded-md bg-dark-800 group-hover:bg-primary-500/20 transition-colors">
              <HiArrowUp className="w-3 h-3" />
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
