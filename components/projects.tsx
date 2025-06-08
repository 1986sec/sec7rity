"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Search, Target, Lock, Terminal, Code, Zap, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise APT Simulation Framework',
      description: 'Fortune 500 şirketi için geliştirilmiş Advanced Persistent Threat simülasyon platformu. Multi-stage attack chains, custom C2 infrastructure ve advanced evasion techniques içeren kapsamlı red team operasyonu.',
      icon: Target,
      tags: ['APT Simulation', 'Custom C2', 'Evasion Techniques', 'Multi-Stage Attacks', 'Enterprise Security'],
      link: 'https://github.com/1986sec',
      github: 'https://github.com/1986sec',
      status: 'Confidential',
      techStack: ['Cobalt Strike', 'Custom C2', 'PowerShell Empire', 'Covenant'],
      impact: '15+ Critical Vulnerabilities Discovered'
    },
    {
      title: 'OSINT Automation & Threat Intelligence Platform',
      description: 'Açık kaynak istihbarat toplama ve analiz için geliştirilmiş Python framework. Automated reconnaissance, social media intelligence, dark web monitoring ve threat actor profiling yetenekleri.',
      icon: Search,
      tags: ['OSINT', 'Python Framework', 'Threat Intelligence', 'Automation', 'Dark Web Monitoring'],
      link: 'https://github.com/1986sec',
      github: 'https://github.com/1986sec',
      status: 'Open Source',
      techStack: ['Python', 'Scrapy', 'Elasticsearch', 'Maltego', 'Shodan API'],
      impact: '500+ Threat Indicators Collected Daily'
    },
    {
      title: 'Zero-Day Exploit Development Lab',
      description: 'Kritik sistemlerde zero-day vulnerability research ve exploit development projesi. Memory corruption exploits, kernel-level attacks ve advanced payload development içeren kapsamlı güvenlik araştırması.',
      icon: Zap,
      tags: ['Zero-Day Research', 'Exploit Development', 'Kernel Exploitation', 'Memory Corruption', 'Vulnerability Research'],
      link: 'https://github.com/1986sec',
      github: null,
      status: 'Research',
      techStack: ['C/C++', 'Assembly', 'WinDbg', 'GDB', 'Ghidra'],
      impact: '3 CVE Discoveries & Responsible Disclosure'
    },
    {
      title: 'Cloud Security Assessment Toolkit',
      description: 'AWS, Azure ve GCP cloud infrastructure güvenlik değerlendirmesi için geliştirilmiş automated testing suite. Misconfiguration detection, privilege escalation ve data exfiltration scenarios.',
      icon: Shield,
      tags: ['Cloud Security', 'AWS/Azure/GCP', 'Automation', 'Misconfiguration Detection', 'Privilege Escalation'],
      link: 'https://github.com/1986sec',
      github: 'https://github.com/1986sec',
      status: 'Active Development',
      techStack: ['Python', 'Boto3', 'Azure CLI', 'Terraform', 'CloudFormation'],
      impact: '200+ Cloud Misconfigurations Identified'
    },
    {
      title: 'Industrial Control Systems (ICS) Security Framework',
      description: 'SCADA ve ICS sistemleri için özel geliştirilmiş penetration testing framework. Protocol fuzzing, HMI exploitation ve critical infrastructure security assessment capabilities.',
      icon: AlertTriangle,
      tags: ['ICS/SCADA Security', 'Protocol Fuzzing', 'Critical Infrastructure', 'HMI Exploitation', 'Industrial Security'],
      link: 'https://github.com/1986sec',
      github: null,
      status: 'Classified',
      techStack: ['Python', 'Modbus', 'DNP3', 'IEC 61850', 'Custom Protocols'],
      impact: 'Critical Infrastructure Protection Enhanced'
    },
    {
      title: 'Advanced Malware Analysis & Reverse Engineering Lab',
      description: 'Sophisticated malware samples için automated analysis ve reverse engineering platform. Dynamic/static analysis, behavioral monitoring ve threat attribution capabilities.',
      icon: Code,
      tags: ['Malware Analysis', 'Reverse Engineering', 'Dynamic Analysis', 'Behavioral Monitoring', 'Threat Attribution'],
      link: 'https://github.com/1986sec',
      github: 'https://github.com/1986sec',
      status: 'Research',
      techStack: ['IDA Pro', 'Ghidra', 'x64dbg', 'Volatility', 'YARA'],
      impact: '100+ Malware Families Analyzed'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(59,130,246,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.06),transparent_70%)]" />
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
            <span className="text-primary">root@1986sec</span>:<span className="text-blue-400">~</span># ls -la /projects/
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Advanced cybersecurity research projects & security assessment frameworks
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-card border border-border rounded-lg p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mr-4">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 font-mono">{project.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium font-mono ${
                          project.status === 'Open Source' 
                            ? 'bg-green-500/10 text-green-400' 
                            : project.status === 'Research'
                            ? 'bg-blue-500/10 text-blue-400'
                            : project.status === 'Active Development'
                            ? 'bg-yellow-500/10 text-yellow-400'
                            : 'bg-red-500/10 text-red-400'
                        }`}>
                          {project.status}
                        </span>
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-mono">
                          {project.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed font-mono text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2 font-mono">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded font-mono border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 hover:border-primary/50 font-mono"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <Terminal className="h-4 w-4" />
                    <span>Details</span>
                  </Button>
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 hover:border-primary/50 font-mono"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      <span>Source</span>
                    </Button>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 font-mono group"
            onClick={() => window.open('https://github.com/1986sec', '_blank')}
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            GitHub Portfolio - github.com/1986sec
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;