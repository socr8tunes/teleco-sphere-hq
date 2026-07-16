import { Link } from "react-router-dom";
import { ArrowRight, Building2, Heart, Radio, ShoppingCart, Truck, Landmark, GraduationCap, Hotel } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import SectionLabel from "@/components/SectionLabel";

const industries = [
  { id: "01", name: "Healthcare", icon: Heart, desc: "Hospital communication systems, patient kiosks, telemedicine platforms, and medical device integration.", solutions: ["VoIP for hospitals", "Patient check-in kiosks", "Health data platforms"] },
  { id: "02", name: "Telecom", icon: Radio, desc: "Tower deployment, network operations centers, billing systems, and subscriber management platforms.", solutions: ["Tower infrastructure", "NOC systems", "OSS/BSS platforms"] },
  { id: "03", name: "Retail", icon: ShoppingCart, desc: "Point-of-sale systems, self-service terminals, inventory management, and omnichannel platforms.", solutions: ["Smart POS terminals", "Inventory automation", "Customer analytics"] },
  { id: "04", name: "Logistics", icon: Truck, desc: "Fleet management, warehouse automation, tracking systems, and supply chain visibility platforms.", solutions: ["GPS fleet tracking", "Warehouse robots", "Supply chain dashboards"] },
  { id: "05", name: "Public Sector", icon: Landmark, desc: "Government IT infrastructure, citizen service platforms, secure communications, and smart city systems.", solutions: ["e-Government portals", "Secure comms", "Smart city IoT"] },
  { id: "06", name: "Education", icon: GraduationCap, desc: "Learning management systems, campus networks, digital classrooms, and student information systems.", solutions: ["LMS platforms", "Campus Wi-Fi", "Student portals"] },
  { id: "07", name: "Hospitality", icon: Hotel, desc: "Guest experience systems, smart room controls, booking platforms, and property management integration.", solutions: ["Smart room systems", "Booking engines", "PMS integration"] },
];

const Industries = () => (
  <Layout>
      <Seo title={"Industries We Serve — Teleco Ltd"} description={"Teleco delivers engineering solutions across healthcare, telecom, retail, logistics, public sector, education, and hospitality."} path="/industries" />
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="00" label="Industries" />
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">Sectors We Serve</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Technology solutions engineered for the specific demands of each industry.
        </p>
      </div>
    </section>

    {industries.map((ind) => (
      <section key={ind.id} className="border-b border-border">
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <ind.icon size={20} strokeWidth={1.25} className="text-cobalt" />
                <span className="serial-number">[{ind.id}]</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">{ind.name}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">{ind.desc}</p>
              <Link to="/start-project" className="mt-4 inline-flex items-center gap-2 text-sm text-cobalt">
                Discuss a project <ArrowRight size={14} strokeWidth={1.25} />
              </Link>
            </div>
            <div>
              <h4 className="serial-number mb-3">[SOLUTIONS]</h4>
              <ul className="space-y-2">
                {ind.solutions.map((s) => (
                  <li key={s} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-cobalt mt-0.5">—</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default Industries;
