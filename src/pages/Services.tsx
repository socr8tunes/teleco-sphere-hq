import { Link } from "react-router-dom";
import { ArrowRight, Radio, Code, Cpu, Network, FlaskConical, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";

const services = [
  {
    id: "01",
    title: "Telecommunications Infrastructure",
    icon: Radio,
    desc: "Design, deployment, and maintenance of telecommunications networks including tower infrastructure, fiber optic systems, VoIP platforms, and PBX solutions.",
    useCases: ["Cell tower deployment and commissioning", "Fiber optic backbone installation", "VoIP and PBX system design", "Network monitoring and management"],
    industries: ["Telecom", "Government", "Enterprise"],
  },
  {
    id: "02",
    title: "Software Development",
    icon: Code,
    desc: "Custom software engineering for enterprise applications, web platforms, mobile solutions, and backend systems built for scale and reliability.",
    useCases: ["Enterprise resource planning (ERP)", "Customer-facing web applications", "Mobile applications", "API development and integration"],
    industries: ["Retail", "Healthcare", "Education", "Finance"],
  },
  {
    id: "03",
    title: "Automation & Smart Systems",
    icon: Cpu,
    desc: "Smart kiosks, IoT devices, industrial automation controllers, and embedded systems for next-generation operations.",
    useCases: ["Self-service kiosks and terminals", "Building management systems", "Industrial process automation", "Sensor networks and IoT"],
    industries: ["Retail", "Logistics", "Manufacturing", "Hospitality"],
  },
  {
    id: "04",
    title: "Systems Integration",
    icon: Network,
    desc: "End-to-end integration of hardware, software, and network components into unified, mission-critical operational platforms.",
    useCases: ["Multi-vendor system unification", "Legacy system modernization", "Cross-platform data integration", "Unified communications"],
    industries: ["Government", "Healthcare", "Enterprise"],
  },
  {
    id: "05",
    title: "R&D and Technical Prototyping",
    icon: FlaskConical,
    desc: "Technical research, rapid prototyping, and proof-of-concept development for emerging technology applications.",
    useCases: ["Proof-of-concept development", "Technology feasibility studies", "Hardware prototyping", "Patent-ready designs"],
    industries: ["All sectors"],
  },
  {
    id: "06",
    title: "Enterprise Cybersecurity",
    icon: ShieldCheck,
    desc: "Enterprise-grade security operations, offensive testing, and compliance for mission-critical infrastructure. 24/7 monitoring, incident response, and risk-based hardening.",
    useCases: ["24/7 Managed SOC & SIEM", "Penetration testing & vulnerability audits", "Network, endpoint & identity security", "Incident response & digital forensics", "ISO 27001, PCI-DSS & GDPR compliance"],
    industries: ["Finance", "Government", "Healthcare", "Telecom", "Enterprise"],
  },
];

const Services = () => (
  <Layout>
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="00" label="Services" />
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">Our Services</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Five core engineering disciplines. One integrated approach to building the systems that matter.
        </p>
      </div>
    </section>

    {services.map((s) => (
      <section key={s.id} className="border-b border-border">
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <s.icon size={24} strokeWidth={1.25} className="text-cobalt" />
                <span className="serial-number">[{s.id}]</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground md:text-4xl">{s.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">{s.desc}</p>
              <Link to="/start-project" className="mt-6 inline-flex items-center gap-2 text-sm text-cobalt hover:underline">
                Start a project <ArrowRight size={14} strokeWidth={1.25} />
              </Link>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="serial-number mb-3">[USE CASES]</h3>
                <ul className="space-y-2">
                  {s.useCases.map((u) => (
                    <li key={u} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-cobalt mt-1">—</span> {u}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="serial-number mb-3">[INDUSTRIES]</h4>
                <div className="flex flex-wrap gap-2">
                  {s.industries.map((ind) => (
                    <span key={ind} className="px-3 py-1 text-xs text-muted-foreground border border-border rounded-sm">{ind}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default Services;
