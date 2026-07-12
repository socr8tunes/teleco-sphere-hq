import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, ServerCog, KeyRound, FileSearch, Users, Send } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { submitForm } from "@/lib/api";

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

const Cybersecurity = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const toastId = toast.loading("Sending your request…");
    const fd = new FormData(e.currentTarget);
    const ok = await submitForm({
      type: "contact",
      subject: "Cybersecurity Lead",
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: (fd.get("phone") as string) || "",
      company: (fd.get("company") as string) || "",
      companySize: (fd.get("companySize") as string) || "",
      industry: (fd.get("industry") as string) || "",
      interest: (fd.get("interest") as string) || "",
      urgency: (fd.get("urgency") as string) || "",
      message: (fd.get("message") as string) || "",
    });
    setSubmitting(false);
    if (ok) {
      toast.success("Request received. Our security team will be in touch.", { id: toastId });
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    } else {
      toast.error("Failed to send. Please try again.", { id: toastId });
    }
  };

  return (
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

    {/* Lead Form */}
    <section id="security-lead" className="border-b border-border">
      <div className="container max-w-3xl py-20">
        <SectionLabel number="03" label="Request Assessment" />
        <h2 className="mt-4 text-3xl font-bold text-foreground md:text-5xl">
          Get a <span className="gradient-text">security consultation</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tell us about your environment and priorities. A security engineer will respond within one business day.
        </p>

        {submitted ? (
          <div className="surface-card mt-10 p-10 text-center rounded-lg">
            <span className="serial-number">[RECEIVED]</span>
            <h3 className="mt-3 text-xl font-bold text-foreground">Request Sent</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our cybersecurity team will contact you shortly with next steps.
            </p>
            <button onClick={() => setSubmitted(false)} className="mt-4 text-sm text-cobalt hover:underline">
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="serial-number block mb-2">FULL NAME *</label>
                <input required name="name" type="text" maxLength={100}
                  className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors"
                  placeholder="Your full name" />
              </div>
              <div>
                <label className="serial-number block mb-2">WORK EMAIL *</label>
                <input required name="email" type="email" maxLength={255}
                  className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors"
                  placeholder="you@company.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="serial-number block mb-2">COMPANY *</label>
                <input required name="company" type="text" maxLength={120}
                  className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors"
                  placeholder="Company name" />
              </div>
              <div>
                <label className="serial-number block mb-2">PHONE</label>
                <input name="phone" type="tel" maxLength={20}
                  className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors"
                  placeholder="+233..." />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="serial-number block mb-2">COMPANY SIZE</label>
                <select name="companySize" className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors">
                  <option value="">Select size</option>
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>201–1000</option>
                  <option>1000+</option>
                </select>
              </div>
              <div>
                <label className="serial-number block mb-2">INDUSTRY</label>
                <select name="industry" className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors">
                  <option value="">Select industry</option>
                  <option>Financial Services</option>
                  <option>Telecom</option>
                  <option>Healthcare</option>
                  <option>Retail / E-commerce</option>
                  <option>Public Sector</option>
                  <option>Logistics</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="serial-number block mb-2">PRIMARY INTEREST *</label>
              <select required name="interest" className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors">
                <option value="">Select service</option>
                <option>Managed Security (SOC-as-a-Service)</option>
                <option>Penetration Testing & Audit</option>
                <option>Threat Detection & Response (SIEM/EDR)</option>
                <option>Network & Perimeter Security</option>
                <option>Identity & Access Management</option>
                <option>Endpoint & Server Hardening</option>
                <option>Incident Response / Active Breach</option>
                <option>Security Awareness Training</option>
                <option>Compliance (ISO / PCI / GDPR / DPA)</option>
              </select>
            </div>

            <div>
              <label className="serial-number block mb-2">URGENCY</label>
              <select name="urgency" className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors">
                <option value="">Select urgency</option>
                <option>Active incident — urgent</option>
                <option>Within 2 weeks</option>
                <option>1–3 months</option>
                <option>Exploratory / planning</option>
              </select>
            </div>

            <div>
              <label className="serial-number block mb-2">TELL US MORE</label>
              <textarea name="message" rows={5} maxLength={3000}
                className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors resize-none"
                placeholder="Describe your environment, concerns, or the incident..." />
            </div>

            <button type="submit" disabled={submitting}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-cobalt rounded-sm hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-50">
              {submitting ? "Sending…" : "Request Consultation"} <Send size={14} strokeWidth={1.25} />
            </button>
          </form>
        )}
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
          <a href="#security-lead" className="btn-primary">
            Request Assessment <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Cybersecurity;
