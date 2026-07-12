import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, ServerCog, KeyRound, FileSearch, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";

const capabilities = [
  { icon: Shield, title: "Managed Security (SOC-as-a-Service)", desc: "24/7 monitoring, threat detection, and incident response by our security operations team." },
  { icon: Eye, title: "Threat Detection & Response", desc: "SIEM, EDR, and XDR platforms tuned to your environment for real-time visibility." },
  { icon: FileSearch, title: "Penetration Testing & Audits", desc: "Offensive security assessments, vulnerability scans, and compliance-ready reports." },
  { icon: Lock, title: "Network & Perimeter Security", desc: "Next-gen firewalls, IDS/IPS, secure VPNs, and zero-trust network segmentation." },
  { icon: KeyRound, title: "Identity & Access Management", desc: "SSO, MFA, privileged access management, and role-based access controls." },
  { icon: ServerCog, title: "Endpoint & Server Hardening", desc: "Device compliance, patch management, EDR deployment, and secure baselines." },
  { icon: AlertTriangle, title: "Incident Response & Forensics", desc: "Rapid containment, digital forensics, root-cause analysis, and recovery planning." },
  { icon: Users, title: "Security Awareness Training", desc: "Phishing simulations and staff training programs to harden the human layer." },
];

const compliance = ["ISO 27001", "PCI-DSS", "GDPR", "Ghana Data Protection Act", "NIST CSF", "SOC 2"];

const Cybersecurity = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden border-b border-border">
      <div className="orb w-[500px] h-[500px] bg-cobalt/15 -top-40 -right-40 animate-pulse-glow" />
      <div className="container relative z-10 py-24">
        <SectionLabel number="00" label="Cybersecurity" />
        <div className="flex items-center gap-3 mt-4">
          <div className="p-2.5 rounded-lg bg-cobalt/10 border border-cobalt/20">
            <Shield size={22} strokeWidth={1.5} className="text-cobalt" />
          </div>
          <span className="font-mono text-xs text-cobalt uppercase tracking-[0.2em]">Enterprise-Grade</span>
        </div>
        <h1 className="mt-6 text-5xl font-bold text-foreground md:text-7xl">
          Defend, Detect,<br /><span className="gradient-text">Respond</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Enterprise-grade cybersecurity built for African organizations. From 24/7 managed security operations to penetration testing and compliance, we protect the systems your business depends on.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/start-project" className="btn-primary">
            Request a Security Assessment <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
          <Link to="/ask" className="btn-secondary">Talk to a Security Engineer</Link>
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="01" label="Capabilities" />
        <h2 className="mt-4 text-3xl font-bold text-foreground md:text-5xl">Full-stack security services</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((c) => (
            <div key={c.title} className="surface-card rounded-lg p-6 group">
              <div className="p-2 rounded-md bg-cobalt/10 border border-cobalt/20 w-fit">
                <c.icon size={18} strokeWidth={1.5} className="text-cobalt" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Compliance */}
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="02" label="Compliance & Standards" />
        <h2 className="mt-4 text-3xl font-bold text-foreground md:text-5xl">
          Aligned with <span className="gradient-text">global frameworks</span>
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Our security engagements are structured around internationally recognized standards and Ghana's regulatory requirements.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {compliance.map((f) => (
            <span key={f} className="px-4 py-2.5 rounded-lg border border-border text-sm text-muted-foreground hover:border-cobalt/40 hover:text-foreground transition-colors">
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-cobalt/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="container relative z-10 py-24 text-center">
        <h2 className="text-3xl font-bold text-foreground md:text-5xl">
          Assess your <span className="gradient-text">security posture</span>
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
          Book a no-obligation discovery call. We'll review your infrastructure and outline a risk-based roadmap.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/start-project" className="btn-primary">
            Start a Security Project <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Cybersecurity;
