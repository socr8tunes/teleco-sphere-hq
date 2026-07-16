import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Zap, Shield, Users, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
};

const About = () => (
  <Layout>
    {/* Header */}
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="00" label="About" />
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">Who We Are</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Teleco Ltd is a technology and engineering company headquartered in Accra, Ghana. We design, build, and integrate the systems that power telecommunications, automation, and enterprise operations across West Africa.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="border-b border-border">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="p-10 border-b md:border-b-0 md:border-r border-border">
          <div className="flex items-center gap-3 mb-4">
            <Target size={20} strokeWidth={1.25} className="text-cobalt" />
            <span className="serial-number">MISSION</span>
          </div>
          <p className="text-foreground leading-relaxed">
            To deliver world-class technology infrastructure and engineering solutions that enable African enterprises and governments to operate at the highest level of efficiency and reliability.
          </p>
        </div>
        <div className="p-10">
          <div className="flex items-center gap-3 mb-4">
            <Eye size={20} strokeWidth={1.25} className="text-cobalt" />
            <span className="serial-number">VISION</span>
          </div>
          <p className="text-foreground leading-relaxed">
            To become the premier technology and systems integration firm in Africa — building the digital and physical infrastructure the continent depends on.
          </p>
        </div>
      </div>
    </section>

    {/* What we build */}
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="01" label="Capabilities" />
        <h2 className="text-3xl font-bold text-foreground md:text-5xl">What Teleco Builds</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            { title: "Telecom Networks", desc: "End-to-end deployment of tower infrastructure, fiber optics, VoIP, and PBX systems." },
            { title: "Software Platforms", desc: "Enterprise web applications, mobile apps, and custom digital products." },
            { title: "Smart Hardware", desc: "Kiosks, terminals, embedded controllers, and IoT sensor networks." },
            { title: "Automation Systems", desc: "Industrial control systems, building automation, and process optimization." },
            { title: "Integrated Solutions", desc: "Unified systems combining hardware, software, and networking." },
            { title: "Research Prototypes", desc: "Proof-of-concept devices and experimental technology platforms." },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeUp} className="surface-card p-6">
              <span className="serial-number">[{String(i + 1).padStart(2, "0")}]</span>
              <h3 className="mt-3 text-sm font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Differentiators */}
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="02" label="Differentiators" />
        <h2 className="text-3xl font-bold text-foreground md:text-5xl">What Makes Us Different</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {[
            { icon: Zap, title: "Speed", desc: "Rapid deployment from prototype to production." },
            { icon: Shield, title: "Reliability", desc: "99.9% uptime across all deployed systems." },
            { icon: Lightbulb, title: "Innovation", desc: "R&D-driven approach to every engagement." },
            { icon: Users, title: "Local Expertise", desc: "Deep understanding of African infrastructure challenges." },
          ].map((d) => (
            <div key={d.title} className="surface-card p-6">
              <d.icon size={20} strokeWidth={1.25} className="text-cobalt" />
              <h4 className="mt-3 text-sm font-bold text-foreground">{d.title}</h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
