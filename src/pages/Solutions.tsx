import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";

const solutions = [
  { id: "01", title: "VoIP & PBX Systems", problem: "Unreliable and expensive legacy phone systems", desc: "Enterprise-grade Voice over IP and Private Branch Exchange systems for unified communications.", tech: ["SIP", "Asterisk", "FreePBX", "Cloud PBX"] },
  { id: "02", title: "Smart Kiosks & Terminals", problem: "Manual, slow, and error-prone customer service", desc: "Self-service kiosks for payments, check-ins, information display, and customer interaction.", tech: ["Embedded Linux", "Touch UI", "Payment APIs", "Thermal Printing"] },
  { id: "03", title: "Automation Devices", problem: "Inefficient manual processes in industrial settings", desc: "Custom-built automation controllers and devices for industrial and commercial applications.", tech: ["PLC", "SCADA", "Modbus", "Custom PCB"] },
  { id: "04", title: "Custom Digital Platforms", problem: "Generic software that doesn't fit unique workflows", desc: "Bespoke web and mobile platforms built for specific enterprise requirements.", tech: ["React", "Node.js", "PostgreSQL", "Cloud Infrastructure"] },
  { id: "05", title: "Embedded Control Systems", problem: "Lack of intelligent monitoring and control", desc: "Purpose-built embedded systems for real-time monitoring, control, and data acquisition.", tech: ["ARM", "RTOS", "CAN Bus", "MQTT"] },
];

const Solutions = () => (
  <Layout>
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="00" label="Solutions" />
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">What We Build</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Purpose-built technology solutions for real-world engineering challenges.
        </p>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {solutions.map((s) => (
            <div key={s.id} className="surface-card p-6 flex flex-col">
              <span className="serial-number">[{s.id}]</span>
              <h3 className="mt-3 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-1 text-xs text-cobalt font-mono">Problem: {s.problem}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-4">
                <span className="serial-number">[TECH]</span>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {s.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border rounded-sm">{t}</span>
                  ))}
                </div>
              </div>
              <Link to="/start-project" className="mt-4 inline-flex items-center gap-1 text-xs text-cobalt">
                Inquire <ArrowRight size={12} strokeWidth={1.25} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Solutions;
