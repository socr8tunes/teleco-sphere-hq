import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import SectionLabel from "@/components/SectionLabel";

const faqs = [
  { q: "What services does Teleco provide?", a: "Teleco provides telecommunications infrastructure, software development, automation and smart systems, systems integration, and R&D/prototyping services." },
  { q: "Do you build custom systems?", a: "Yes. Every solution we deliver is purpose-built for the client's specific requirements. We don't resell off-the-shelf products." },
  { q: "Do you work with telecom infrastructure?", a: "Telecommunications infrastructure is one of our core disciplines. We handle tower deployment, fiber optics, VoIP/PBX systems, and network engineering." },
  { q: "How do I start a project?", a: "Click 'Start a Project' in the navigation, fill out the inquiry form, and our engineering team will respond within 24 hours to discuss scope and approach." },
  { q: "What industries do you serve?", a: "We serve healthcare, telecom, retail, logistics, public sector, education, and hospitality industries across West Africa." },
  { q: "Do you offer ongoing support?", a: "Yes. We provide maintenance contracts, SLA-based support, and 24/7 monitoring for mission-critical deployments." },
  { q: "Where is Teleco based?", a: "Teleco is headquartered in Accra, Ghana, with project operations across West Africa." },
  { q: "Can you integrate with existing systems?", a: "Systems integration is a core capability. We specialize in connecting legacy systems with modern platforms and hardware." },
  { q: "Do you offer cybersecurity services?", a: "Yes. We provide enterprise-grade cybersecurity including 24/7 managed SOC, penetration testing, threat detection and response (SIEM/EDR), network security, identity & access management, and incident response." },
  { q: "What cybersecurity compliance frameworks do you support?", a: "We align engagements with ISO 27001, PCI-DSS, GDPR, the Ghana Data Protection Act, NIST CSF, and SOC 2. We produce audit-ready documentation and remediation plans." },
  { q: "We think we've been breached — can you help?", a: "Yes. Our incident response team can be engaged for rapid containment, digital forensics, and recovery. Use the Cybersecurity page form and mark urgency as 'Active incident' — we prioritize those requests." },
  { q: "Do you perform penetration testing?", a: "Yes — external, internal, web application, API, and mobile penetration tests. Deliverables include an executive summary, technical findings, CVSS scoring, and remediation guidance." },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="text-sm font-medium text-foreground pr-4">{q}</span>
        <ChevronDown size={16} strokeWidth={1.25} className={`text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <Layout>
      <Seo title={"Frequently Asked Questions — Teleco Ltd"} description={"Answers about Teleco's services, cybersecurity, project engagement, support and industries served."} path="/faq",
      jsonLd={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })) }} />
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="00" label="FAQ" />
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">Questions</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Common questions about Teleco and our services.</p>
      </div>
    </section>
    <section>
      <div className="container max-w-3xl py-16">
        {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
      </div>
    </section>
  </Layout>
);

export default FAQ;
