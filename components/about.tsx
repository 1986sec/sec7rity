"use client";

import { motion } from 'framer-motion';
import { Shield, Target, Search, Brain, Terminal, Code, Zap, Lock } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Shield, label: 'Savunma', color: 'text-green-400' },
    { icon: Target, label: 'Hassasiyet', color: 'text-red-400' },
    { icon: Search, label: 'İstihbarat', color: 'text-blue-400' },
    { icon: Brain, label: 'Strateji', color: 'text-purple-400' },
    { icon: Terminal, label: 'Exploit', color: 'text-yellow-400' },
    { icon: Code, label: 'Reverse Eng.', color: 'text-cyan-400' },
    { icon: Zap, label: 'Zero-Day', color: 'text-orange-400' },
    { icon: Lock, label: 'Kriptografi', color: 'text-pink-400' },
  ];

  const certifications = [
    'OSCP - Offensive Security Certified Professional',
    'CISSP - Certified Information Systems Security Professional', 
    'CEH - Certified Ethical Hacker',
    'GCIH - GIAC Certified Incident Handler',
    'OSWE - Offensive Security Web Expert',
    'OSCE - Offensive Security Certified Expert'
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(0,255,65,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.06),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text font-mono mb-4">
            <span className="text-primary">root@1986sec</span>:<span className="text-blue-400">~</span># whoami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Advanced Persistent Threat Specialist & Cyber Warfare Expert
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Terminal-style Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Terminal Window */}
            <div className="bg-black/90 border border-primary/30 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-300 text-sm font-mono ml-4">1986sec@kali:~</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <div className="text-primary">$ cat /etc/passwd | grep 1986sec</div>
                <div className="text-green-400">1986sec:x:1000:1000:Cyber Warfare Specialist:/home/1986sec:/bin/bash</div>
                <div className="text-primary">$ sudo -l</div>
                <div className="text-yellow-400">User 1986sec may run the following commands on ALL hosts:</div>
                <div className="text-yellow-400 ml-4">(ALL : ALL) NOPASSWD: ALL</div>
                <div className="text-primary">$ uname -a</div>
                <div className="text-blue-400">Linux kali 6.1.0-kali7-amd64 #1 SMP PREEMPT_DYNAMIC Kali 6.1.20-2kali1 x86_64 GNU/Linux</div>
                <div className="text-primary">$ uptime</div>
                <div className="text-cyan-400">10+ years in cybersecurity, 1000+ systems compromised ethically</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-foreground font-mono flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                Sertifikasyonlar & Yetkinlikler
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-muted-foreground font-mono">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-primary font-mono"># Expertise Overview</h3>
                <p className="text-foreground leading-relaxed">
                  10+ yıllık siber güvenlik deneyimi ile Advanced Persistent Threat (APT) simülasyonları, 
                  zero-day exploit geliştirme ve kritik altyapı güvenlik değerlendirmeleri konularında uzmanım. 
                  Kali Linux, Metasploit Framework, Burp Suite Professional ve özel exploit geliştirme araçları 
                  kullanarak kapsamlı güvenlik testleri gerçekleştiriyorum.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-blue-400 font-mono"># Technical Arsenal</h3>
                <p className="text-foreground leading-relaxed">
                  Network penetration testing, web application security assessment, wireless security auditing 
                  ve social engineering kampanyaları yürütüyorum. Python, C++, Assembly ve PowerShell ile 
                  custom payload geliştirme, memory corruption exploits ve advanced evasion techniques 
                  konularında derin teknik bilgiye sahibim.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-purple-400 font-mono"># Mission Statement</h3>
                <p className="text-foreground leading-relaxed">
                  Organizasyonların siber tehditlere karşı dirençli güvenlik mimarileri oluşturmasına yardımcı oluyorum. 
                  Red team operasyonları, threat hunting, incident response ve strategic security consulting 
                  hizmetleri sunarak kurumsal güvenlik seviyesini maksimum düzeye çıkarıyorum.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-card/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 group"
                >
                  <skill.icon className={`h-6 w-6 mx-auto mb-2 ${skill.color} group-hover:scale-110 transition-transform`} />
                  <p className="text-xs font-medium text-muted-foreground font-mono">{skill.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;