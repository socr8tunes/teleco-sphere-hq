import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";

const caseStudies = [
  {
    id: "01",
    title: "Nationwide Tower Deployment — TelcoGH",
    challenge: "Deploy 45 cell towers across rural Ghana within a 6-month timeline while maintaining 99.9% uptime standards.",
    solution: "End-to-end project management including site survey, structural engineering, equipment installation, and network integration with real-time monitoring.",
    tech: ["Tower Infrastructure", "Fiber Backhaul", "Remote Monitoring", "SCADA"],
    impact: "45 towers deployed on schedule. 2.3M new subscribers gained coverage. 99.95% uptime achieved in Year 1.",
  },
  {
    id: "02",
    title: "Enterprise VoIP Migration — HealthFirst Hospital",
    challenge: "Replace aging PBX system across a 500-bed hospital with minimal disruption to critical communication channels.",
    solution: "Phased migration to cloud-hosted VoIP with redundant failover, integrated nurse call systems, and unified messaging.",
    tech: ["SIP/VoIP", "Asterisk", "Cloud PBX", "HL7 Integration"],
    impact: "60% reduction in communication costs. Zero downtime during migration. 100% nurse call integration.",
  },
  {
    id: "03",
    title: "Smart Kiosk Network — AccraRetail",
    challenge: "Deploy self-service payment and information kiosks across 30 retail locations with central management.",
    solution: "Custom-designed kiosks with payment processing, receipt printing, and cloud-based fleet management dashboard.",
    tech: ["Embedded Linux", "React", "Payment Gateway", "IoT Management"],
    impact: "40% reduction in queue times. 25% increase in after-hours transactions. Centralized monitoring of all 30 units.",
  },
];

const CaseStudies = () => (
  <Layout>
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="00" label="Case Studies" />
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">Proven Results</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Engineering excellence measured by impact.
        </p>
      </div>
    </section>

    {caseStudies.map((cs) => (
      <section key={cs.id} className="border-b border-border">
        <div className="container py-16">
          <span className="serial-number">[{cs.id}]</span>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">{cs.title}</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            <div className="surface-card p-6">
              <h3 className="serial-number mb-2">[CHALLENGE]</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
            </div>
            <div className="surface-card p-6">
              <h3 className="serial-number mb-2">[SOLUTION]</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
            </div>
            <div className="surface-card p-6">
              <h3 className="serial-number mb-2">[TECHNOLOGY]</h3>
              <div className="flex flex-wrap gap-1.5">
                {cs.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border rounded-sm">{t}</span>
                ))}
              </div>
            </div>
            <div className="surface-card p-6">
              <h3 className="serial-number mb-2">[IMPACT]</h3>
              <p className="text-sm text-cobalt leading-relaxed">{cs.impact}</p>
            </div>
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default CaseStudies;
