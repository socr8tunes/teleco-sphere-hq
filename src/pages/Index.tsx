import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Radio, Code, Cpu, Network, FlaskConical, Building2, Zap, Shield, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import LeslieFeature from "@/components/LeslieFeature";
import heroImg from "@/assets/hero-infrastructure.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const services = [
  { id: "01", title: "Telecommunications Infrastructure", desc: "Tower deployment, fiber optics, and network backbone engineering for national-scale connectivity.", icon: Radio },
  { id: "02", title: "Software Development", desc: "Custom platforms, enterprise systems, and digital products built for performance.", icon: Code },
  { id: "03", title: "Automation & Smart Systems", desc: "Smart kiosks, IoT devices, and industrial automation that transform operations.", icon: Cpu },
  { id: "04", title: "Systems Integration", desc: "End-to-end integration of hardware, software, and networks into unified solutions.", icon: Network },
  { id: "05", title: "R&D and Prototyping", desc: "Technical research, rapid prototyping, and proof-of-concept development.", icon: FlaskConical },
];

const metrics = [
  { value: "99.9%", label: "Uptime SLA", icon: Shield },
  { value: "150+", label: "Nodes Deployed", icon: Globe },
  { value: "24ms", label: "Avg Latency", icon: Zap },
  { value: "50+", label: "Enterprise Clients", icon: Building2 },
];

const industries = [
  "Healthcare", "Telecom", "Retail", "Logistics", "Public Sector", "Education", "Hospitality",
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Telecommunications infrastructure at dusk" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        
      </div>

      {/* Floating orbs */}
      <div className="orb w-[500px] h-[500px] bg-cobalt/20 -top-40 -right-40 animate-pulse-glow" />
      <div className="orb w-[300px] h-[300px] bg-cobalt-deep/30 bottom-20 left-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container relative z-10 py-24 md:py-32">
        <motion.div {...stagger} initial="initial" animate="animate" className="max-w-4xl">
          <motion.div {...fadeUp} className="serial-number mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-cobalt" />
            TELECO LTD — ACCRA, GHANA
          </motion.div>
          <motion.h1 {...fadeUp} className="text-5xl font-bold leading-[1.02] md:text-7xl lg:text-[5.5rem] text-foreground">
            Engineering the
            <span className="gradient-text block">Infrastructure</span>
            of Modern Ghana
          </motion.h1>
          <motion.p {...fadeUp} className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Hardware, software, and systems integration for mission-critical operations across telecommunications, automation, and enterprise technology.
          </motion.p>
          <motion.div {...fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Link to="/start-project" className="btn-primary">
              Start a Project <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/50 to-transparent" />
    </section>

    {/* Metrics bar */}
    <section className="relative border-b border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`py-10 px-6 ${i < 3 ? "border-r border-border" : ""} ${i < 2 ? "border-b border-border md:border-b-0" : ""}`}
            >
              <m.icon size={18} strokeWidth={1.5} className="text-cobalt mb-3" />
              <div className="text-4xl font-bold text-foreground">{m.value}</div>
              <div className="mt-2 font-mono text-xs text-muted-foreground uppercase tracking-[0.15em]">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="relative overflow-hidden">
      <div className="container relative z-10 py-24">
        <SectionLabel number="01" label="Services" />
        <h2 className="text-4xl font-bold text-foreground md:text-6xl mt-4">
          What We <span className="gradient-text">Build</span>
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground text-lg">
          End-to-end engineering across five core disciplines.
        </p>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-14 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.id}
              variants={fadeUp}
              className="surface-card rounded-lg p-7 group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cobalt/5 to-transparent" />
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-lg bg-cobalt/10 border border-cobalt/20">
                    <s.icon size={22} strokeWidth={1.5} className="text-cobalt" />
                  </div>
                  <span className="serial-number text-muted-foreground">{s.id}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-cobalt opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Learn more <ArrowRight size={12} strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>

    {/* Industries */}
    <section className="relative">
      <div className="container py-24">
        <SectionLabel number="02" label="Industries" />
        <h2 className="text-4xl font-bold text-foreground md:text-6xl mt-4">
          Sectors We <span className="gradient-text">Serve</span>
        </h2>
        <div className="mt-14 flex flex-wrap gap-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to="/industries"
                className="flex items-center gap-2.5 px-5 py-3.5 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-cobalt/40 hover:bg-secondary transition-all duration-300 glow-border-hover"
              >
                <Building2 size={15} strokeWidth={1.5} className="text-cobalt" />
                {ind}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>

    {/* Why Teleco */}
    <section className="relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-cobalt/10 top-20 right-0 animate-pulse-glow" />
      <div className="container relative z-10 py-24">
        <SectionLabel number="03" label="Why Teleco" />
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 mt-4">
          <div>
            <h2 className="text-4xl font-bold text-foreground md:text-6xl">
              Built for<br /><span className="gradient-text">Mission-Critical</span>
            </h2>
            <p className="mt-8 max-w-md text-muted-foreground leading-relaxed text-lg">
              We don't build websites. We engineer systems that governments, hospitals, and enterprises depend on every day.
            </p>
            <Link to="/about" className="btn-secondary mt-8 inline-flex">
              Learn About Us <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "Rapid Deployment", desc: "From concept to production in weeks, not months." },
              { icon: Network, title: "Full-Stack Integration", desc: "Hardware, software, and network in one engagement." },
              { icon: Cpu, title: "Custom Engineering", desc: "Every solution is purpose-built. No off-the-shelf compromises." },
              { icon: FlaskConical, title: "R&D First", desc: "We prototype, test, and iterate before we deploy." },
            ].map((item) => (
              <div key={item.title} className="surface-card rounded-lg p-6 group">
                <div className="p-2 rounded-md bg-cobalt/10 border border-cobalt/20 w-fit">
                  <item.icon size={18} strokeWidth={1.5} className="text-cobalt" />
                </div>
                <h4 className="mt-4 text-sm font-bold text-foreground">{item.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden">
      
      <div className="orb w-[600px] h-[600px] bg-cobalt/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="container relative z-10 py-28 text-center">
        <SectionLabel number="04" label="Get Started" />
        <h2 className="text-4xl font-bold text-foreground md:text-6xl mt-4">
          Ready to <span className="gradient-text">Build</span>?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-lg mx-auto text-lg">
          Whether you need a VoIP deployment, a custom software platform, or a smart kiosk — we engineer it.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/start-project" className="btn-primary">
            Start a Project <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
          <Link to="/ask" className="btn-secondary">
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
