"use client";

import { motion } from 'framer-motion';
import { Terminal, Shield, Search, Network, Database, Lock, Code, Zap } from 'lucide-react';

const Tools = () => {
  const tools = [
    { name: 'Kali Linux', icon: Terminal, category: 'OS' },
    { name: 'Burp Suite Pro', icon: Search, category: 'Web' },
    { name: 'Metasploit Framework', icon: Shield, category: 'Exploit' },
    { name: 'Nmap', icon: Network, category: 'Recon' },
    { name: 'Wireshark', icon: Network, category: 'Analysis' },
    { name: 'OWASP ZAP', icon: Lock, category: 'Web' },
    { name: 'Maltego', icon: Search, category: 'OSINT' },
    { name: 'Aircrack-ng', icon: Network, category: 'Wireless' },
    { name: 'John the Ripper', icon: Lock, category: 'Crypto' },
    { name: 'Hashcat', icon: Database, category: 'Crypto' },
    { name: 'Nikto', icon: Search, category: 'Web' },
    { name: 'SQLmap', icon: Database, category: 'Database' },
    { name: 'Cobalt Strike', icon: Shield, category: 'C2' },
    { name: 'Empire Framework', icon: Terminal, category: 'C2' },
    { name: 'BloodHound', icon: Network, category: 'AD' },
    { name: 'Responder', icon: Network, category: 'Network' },
    { name: 'Mimikatz', icon: Lock, category: 'Credential' },
    { name: 'PowerShell Empire', icon: Code, category: 'Post-Exploit' },
    { name: 'Covenant', icon: Shield, category: 'C2' },
    { name: 'Ghidra', icon: Code, category: 'Reverse Eng' },
    { name: 'IDA Pro', icon: Code, category: 'Reverse Eng' },
    { name: 'x64dbg', icon: Terminal, category: 'Debug' },
    { name: 'Volatility', icon: Database, category: 'Forensics' },
    { name: 'Autopsy', icon: Search, category: 'Forensics' }
  ];

  const categories = [
    { name: 'Penetration Testing', count: 8, color: 'text-red-400' },
    { name: 'OSINT & Reconnaissance', count: 6, color: 'text-blue-400' },
    { name: 'Exploit Development', count: 5, color: 'text-yellow-400' },
    { name: 'Digital Forensics', count: 4, color: 'text-purple-400' },
    { name: 'Reverse Engineering', count: 4, color: 'text-green-400' },
    { name: 'Cryptography & Hashing', count: 3, color: 'text-cyan-400' },
    { name: 'Command & Control', count: 4, color: 'text-orange-400' },
    { name: 'Network Analysis', count: 6, color: 'text-pink-400' }
  ];

  return (
    <section id="tools" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background to-background/95">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_70%)]" />
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
            <span className="text-primary">root@1986sec</span>:<span className="text-blue-400">~</span># cat /etc/arsenal.conf
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Professional-grade cybersecurity tools & advanced exploitation frameworks
          </p>
        </motion.div>

        {/* Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-4 bg-card/50 border border-border/50 rounded-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className={`text-2xl font-bold font-mono ${category.color}`}>{category.count}</div>
              <div className="text-xs text-muted-foreground font-mono">{category.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Marquee */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex space-x-6 animate-marquee">
            {[...tools, ...tools].map((tool, index) => (
              <motion.div
                key={`${tool.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index % tools.length) * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex-shrink-0 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 min-w-[220px] group"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground font-mono">
                      {tool.name}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground font-mono">
                      {tool.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Technical Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-center gradient-text font-mono">
            # Technical Expertise Matrix
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Programming & Scripting',
                skills: ['Python', 'C/C++', 'Assembly x86/x64', 'PowerShell', 'Bash/Zsh', 'JavaScript', 'Go', 'Rust'],
                icon: Code,
                color: 'text-yellow-400'
              },
              {
                category: 'Network & Infrastructure',
                skills: ['TCP/IP Stack Analysis', 'Network Protocol Fuzzing', 'VLAN Hopping', 'BGP Hijacking', 'DNS Tunneling', 'IPv6 Security', 'SDN Penetration', 'ICS/SCADA Security'],
                icon: Network,
                color: 'text-blue-400'
              },
              {
                category: 'Web Application Security',
                skills: ['OWASP Top 10+', 'SQL Injection (Advanced)', 'XSS (DOM/Stored/Reflected)', 'CSRF/SSRF', 'XXE/SSTI', 'Deserialization Attacks', 'JWT Security', 'GraphQL Security'],
                icon: Lock,
                color: 'text-green-400'
              },
              {
                category: 'Exploit Development',
                skills: ['Buffer Overflow Exploitation', 'ROP/JOP Chain Development', 'Heap Exploitation', 'Kernel Exploitation', 'Browser Exploitation', 'Mobile App Exploitation', 'IoT Device Hacking', 'Firmware Analysis'],
                icon: Zap,
                color: 'text-red-400'
              },
              {
                category: 'Digital Forensics',
                skills: ['Memory Forensics', 'Network Forensics', 'Mobile Forensics', 'Cloud Forensics', 'Malware Analysis', 'Incident Response', 'Timeline Analysis', 'Anti-Forensics Detection'],
                icon: Search,
                color: 'text-purple-400'
              },
              {
                category: 'Cryptography & PKI',
                skills: ['Symmetric/Asymmetric Crypto', 'Hash Function Analysis', 'PKI Implementation', 'Certificate Pinning Bypass', 'Cryptographic Protocol Analysis', 'Side-Channel Attacks', 'Quantum Cryptography', 'Blockchain Security'],
                icon: Shield,
                color: 'text-cyan-400'
              }
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <skillGroup.icon className={`h-6 w-6 ${skillGroup.color} mr-3`} />
                  <h4 className="text-lg font-semibold text-foreground font-mono">{skillGroup.category}</h4>
                </div>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground font-mono">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;