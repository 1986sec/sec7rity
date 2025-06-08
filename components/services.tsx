"use client";

import { motion } from 'framer-motion';
import { Shield, Search, Target, AlertTriangle, Terminal, Code, Zap, Lock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lock,
      title: 'Penetrasyon Testleri',
      subtitle: 'Advanced Exploitation & Vulnerability Assessment',
      description: 'Kapsamlı güvenlik değerlendirmeleri ile sistemlerinizde, ağlarınızda ve uygulamalarınızda saldırganlardan önce güvenlik açıklarını tespit ediyoruz.',
      features: [
        'Network Infrastructure Penetration Testing',
        'Web Application Security Assessment (OWASP Top 10+)',
        'Wireless Security Auditing (WPA3/Enterprise)',
        'Physical Security & Social Engineering Tests',
        'Mobile Application Security Testing (iOS/Android)',
        'Cloud Security Assessment (AWS/Azure/GCP)'
      ],
      techStack: ['Kali Linux', 'Metasploit Pro', 'Burp Suite Enterprise', 'Nessus Professional']
    },
    {
      icon: Search,
      title: 'OSINT & Threat Intelligence',
      subtitle: 'Open Source Intelligence & Digital Reconnaissance',
      description: 'Açık kaynak istihbarat toplama ile organizasyonunuzun dijital ayak izini değerlendiriyor ve potansiyel saldırı vektörlerini analiz ediyoruz.',
      features: [
        'Digital Footprint Analysis & Attack Surface Mapping',
        'Social Media Intelligence (SOCMINT) Operations',
        'Dark Web Monitoring & Threat Actor Profiling',
        'Domain & Subdomain Reconnaissance',
        'Email & Credential Breach Analysis',
        'Geospatial Intelligence (GEOINT) Collection'
      ],
      techStack: ['Maltego Professional', 'Shodan Enterprise', 'SpiderFoot', 'TheHarvester']
    },
    {
      icon: Target,
      title: 'Red Team Operasyonları',
      subtitle: 'Advanced Persistent Threat Simulation',
      description: 'Gelişmiş düşman simülasyonları ile organizasyonunuzun tespit ve müdahale yeteneklerini test ediyoruz.',
      features: [
        'Advanced Persistent Threat (APT) Simulation',
        'Multi-Vector Attack Campaigns',
        'Social Engineering & Phishing Operations',
        'Physical Infiltration & Badge Cloning',
        'Command & Control (C2) Infrastructure Setup',
        'Living off the Land (LotL) Techniques'
      ],
      techStack: ['Cobalt Strike', 'Empire Framework', 'Covenant C2', 'Custom C2 Development']
    },
    {
      icon: AlertTriangle,
      title: 'Tehdit Modelleme & Risk Analizi',
      subtitle: 'Strategic Security Architecture Assessment',
      description: 'Potansiyel tehditlerin sistematik analizi ile güvenlik yatırımlarınızı önceliklendirmenize ve risk azaltma stratejilerinizi geliştirmenize yardımcı oluyoruz.',
      features: [
        'STRIDE/PASTA Threat Modeling Methodologies',
        'Attack Surface Analysis & Reduction',
        'Security Architecture Review & Design',
        'Compliance Gap Analysis (ISO 27001, NIST, SOC2)',
        'Business Risk Assessment & Quantification',
        'Incident Response Plan Development'
      ],
      techStack: ['Microsoft Threat Modeling Tool', 'OWASP Threat Dragon', 'Custom Risk Frameworks']
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.06),transparent_70%)]" />
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
            <span className="text-primary">root@1986sec</span>:<span className="text-blue-400">~</span># ls -la /services/
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Enterprise-grade siber güvenlik hizmetleri ve advanced threat simulation
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="group relative"
            >
              <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Header Section */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mr-4">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                        <p className="text-sm text-primary font-mono">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground font-mono">Primary Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-foreground mb-4 font-mono">
                      # Hizmet Kapsamı
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.05, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-start text-sm bg-muted/30 rounded-lg p-3 hover:bg-muted/50 transition-colors"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground font-mono">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;