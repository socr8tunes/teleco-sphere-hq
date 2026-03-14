import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Radio, Code, Cpu, Network, FlaskConical, Building2, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import heroImg from "@/assets/hero-infrastructure.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const services = [
  { id: "01", title: "Telecommunications Infrastructure", desc: "Tower deployment, fiber optics, and network backbone engineering.", icon: Radio },
  { id: "02", title: "Software Development", desc: "Custom platforms, enterprise systems, and digital products.", icon: Code },
  { id: "03", title: "Automation & Smart Systems", desc: "Smart kiosks, IoT devices, and industrial automation.", icon: Cpu },
  { id: "04", title: "Systems Integration", desc: "End-to-end integration of hardware, software, and networks.", icon: Network },
  { id: "05", title: "R&D and Prototyping", desc: "Technical research, rapid prototyping, and proof-of-concept development.", icon: FlaskConical },
];

const metrics = [
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Nodes Deployed" },
  { value: "24ms", label: "Avg Latency" },
  { value: "50+", label: "Enterprise Clients" },
];

const industries = [
  "Healthcare", "Telecom", "Retail", "Logistics", "Public Sector", "Education", "Hospitality",
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Telecommunications infrastructure at dusk" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </div>
      <div className="container relative z-10 py-24 md:py-36">
        <motion.div {...stagger} initial="initial" animate="animate" className="max-w-3xl">
          <motion.div {...fadeUp} className="serial-number mb-4">TELECO LTD — ACCRA, GHANA</motion.div>
          <motion.h1 {...fadeUp} className="text-5xl font-bold leading-[1.05] md:text-7xl lg:text-8xl text-foreground">
            Engineering the Infrastructure of Modern Ghana
          </motion.h1>
          <motion.p {...fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Hardware, software, and systems integration for mission-critical operations across telecommunications, automation, and enterprise technology.
          </motion.p>
          <motion.div {...fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Link to="/start-project" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-cobalt rounded-sm hover:opacity-90 transition-opacity">
              Start a Project <ArrowRight size={16} strokeWidth={1.25} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground border border-border rounded-sm hover:bg-secondary transition-colors">
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Metrics bar */}
    <section className="border-b border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <div key={m.label} className={`py-8 px-4 ${i < 3 ? "border-r border-border" : ""} ${i < 2 ? "border-b border-border md:border-b-0" : ""}`}>
              <div className="text-3xl font-bold text-foreground">{m.value}</div>
              <div className="mt-1 font-mono text-xs text-muted-foreground uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="border-b border-border tech-grid">
      <div className="container py-20">
        <SectionLabel number="01" label="Services" />
        <h2 className="text-3xl font-bold text-foreground md:text-5xl">What We Build</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          End-to-end engineering across five core disciplines.
        </p>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div
              key={s.id}
              variants={fadeUp}
              className="surface-card p-6 group"
            >
              <div className="flex items-start justify-between">
                <s.icon size={24} strokeWidth={1.25} className="text-cobalt" />
                <span className="serial-number">[{s.id}]</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-xs text-cobalt opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={12} strokeWidth={1.25} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Industries */}
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="02" label="Industries" />
        <h2 className="text-3xl font-bold text-foreground md:text-5xl">Sectors We Serve</h2>
        <div className="mt-12 flex flex-wrap gap-3">
          {industries.map((ind) => (
            <Link
              key={ind}
              to="/industries"
              className="flex items-center gap-2 px-5 py-3 border border-border rounded-sm text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Building2 size={14} strokeWidth={1.25} />
              {ind}
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why Teleco */}
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="03" label="Why Teleco" />
        <div className="grid gap-0 grid-cols-1 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-5xl">Built for<br />Mission-Critical</h2>
            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              We don't build websites. We engineer systems that governments, hospitals, and enterprises depend on every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-8 lg:mt-0">
            {[
              { icon: Zap, title: "Rapid Deployment", desc: "From concept to production in weeks, not months." },
              { icon: Network, title: "Full-Stack Integration", desc: "Hardware, software, and network in one engagement." },
              { icon: Cpu, title: "Custom Engineering", desc: "Every solution is purpose-built. No off-the-shelf compromises." },
              { icon: FlaskConical, title: "R&D First", desc: "We prototype, test, and iterate before we deploy." },
            ].map((item) => (
              <div key={item.title} className="surface-card p-6">
                <item.icon size={20} strokeWidth={1.25} className="text-cobalt" />
                <h4 className="mt-3 text-sm font-bold text-foreground">{item.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="border-b border-border">
      <div className="container py-20 text-center">
        <SectionLabel number="04" label="Get Started" />
        <h2 className="text-3xl font-bold text-foreground md:text-5xl">Ready to Build?</h2>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Whether you need a VoIP deployment, a custom software platform, or a smart kiosk — we engineer it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/start-project" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-cobalt rounded-sm hover:opacity-90 transition-opacity">
            Start a Project <ArrowRight size={16} strokeWidth={1.25} />
          </Link>
          <Link to="/ask" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground border border-border rounded-sm hover:bg-secondary transition-colors">
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
