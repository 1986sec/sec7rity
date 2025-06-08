"use client";

import { motion } from 'framer-motion';
import { Shield, Github, Linkedin, Mail, ExternalLink, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/1986sec',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/1986sec',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'ProtonMail',
      href: 'mailto:contact@1986sec.xyz',
      color: 'hover:text-purple-400'
    }
  ];

  const quickLinks = [
    { label: 'Hakkımda', href: '#about' },
    { label: 'Hizmetler', href: '#services' },
    { label: 'Araçlar', href: '#tools' },
    { label: 'Projeler', href: '#projects' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-background/95">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,255,65,0.08),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold gradient-text font-mono">1986SEC</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed font-mono">
              Profesyonel siber güvenlik hizmetleri: penetrasyon testleri, OSINT, 
              red team operasyonları ve tehdit modellemesi. Gelişmiş güvenlik 
              metodolojileri ile dijital geleceğinizi koruyoruz.
            </p>
            <div className="bg-black/50 border border-primary/30 rounded-lg p-4 font-mono text-sm">
              <div className="text-primary">$ whoami</div>
              <div className="text-green-400">1986sec - Advanced Persistent Threat Specialist</div>
              <div className="text-primary">$ uptime</div>
              <div className="text-cyan-400">10+ years in cybersecurity operations</div>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className={`p-3 bg-muted rounded-lg transition-all duration-300 hover:bg-primary/10 ${link.color}`}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground font-mono"># Navigation</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left font-mono"
                >
                  ./{link.label.toLowerCase()}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground font-mono"># Core Services</h3>
            <div className="space-y-2">
              {[
                'Penetration Testing',
                'OSINT & Intelligence',
                'Red Team Operations',
                'Threat Modeling',
                'Security Consulting',
                'Exploit Development'
              ].map((service, index) => (
                <p key={service} className="text-muted-foreground text-sm font-mono">
                  → {service}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground font-mono">
                © {new Date().getFullYear()} 1986SEC. All rights reserved. | 
                <span className="text-primary ml-1">Ethical Hacking & Cybersecurity</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/1986sec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono flex items-center"
              >
                <Github className="h-4 w-4 mr-1" />
                github.com/1986sec
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-blue-500/50 to-primary/50" />
    </footer>
  );
};

export default Footer;