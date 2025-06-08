"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Code, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Siber Güvenlik. İstihbarat. Güç.';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.08),transparent_70%)]" />
      </div>

      {/* Matrix-style Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20 font-mono text-xs"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {['0x', '#!/bin/bash', 'nmap -sS', 'sqlmap', 'metasploit', 'burpsuite', 'wireshark'][Math.floor(Math.random() * 7)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Terminal Icons Cluster */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center space-x-4"
          >
            <div className="p-3 bg-primary/10 rounded-full glow">
              <Terminal className="h-8 w-8 text-primary" />
            </div>
            <div className="p-3 bg-blue-500/10 rounded-full glow-blue">
              <Code className="h-8 w-8 text-blue-400" />
            </div>
            <div className="p-3 bg-purple-500/10 rounded-full">
              <Shield className="h-8 w-8 text-purple-400" />
            </div>
            <div className="p-3 bg-yellow-500/10 rounded-full">
              <Zap className="h-8 w-8 text-yellow-400" />
            </div>
          </motion.div>

          {/* Main Heading with Enhanced Effects */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono"
            >
              <span className="gradient-text drop-shadow-2xl">1986SEC</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-3xl lg:text-4xl text-muted-foreground font-mono min-h-[2em] flex items-center justify-center"
            >
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-pulse ml-1 text-primary">█</span>
            </motion.div>
          </div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <span className="text-primary font-mono">root@1986sec:~#</span> Gelişmiş penetrasyon testleri, OSINT operasyonları, 
              red team saldırıları ve tehdit modellemesi hizmetleri.
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl mx-auto">
              Cutting-edge siber güvenlik metodolojileri ve ileri düzey istihbarat toplama teknikleri 
              ile dijital altyapınızı koruyoruz.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow font-mono text-lg px-8 py-3 group"
            >
              <Terminal className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Projeleri İncele
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-mono text-lg px-8 py-3 group"
            >
              <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Teknik Detaylar
            </Button>
          </motion.div>

          {/* Technical Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-12"
          >
            {[
              { label: 'CVE Keşifleri', value: '15+' },
              { label: 'Penetrasyon Testleri', value: '100+' },
              { label: 'OSINT Operasyonları', value: '50+' },
              { label: 'Red Team Kampanyaları', value: '25+' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-4 bg-card/30 border border-border/50 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <span className="text-sm font-mono">Aşağı Kaydır</span>
            <ChevronDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;