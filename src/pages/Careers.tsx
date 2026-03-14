import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";

const jobs = [
  { id: "01", title: "Senior Network Engineer", type: "Full-time", location: "Accra, Ghana" },
  { id: "02", title: "Full-Stack Software Developer", type: "Full-time", location: "Accra, Ghana" },
  { id: "03", title: "Embedded Systems Engineer", type: "Full-time", location: "Accra, Ghana" },
];

const Careers = () => (
  <Layout>
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="00" label="Careers" />
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">Join the Team</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          We're building the infrastructure of modern Ghana. Come build with us.
        </p>
      </div>
    </section>

    <section>
      <div className="container max-w-3xl py-16 space-y-0">
        {jobs.map((j) => (
          <div key={j.id} className="surface-card p-6 flex items-center justify-between group">
            <div>
              <span className="serial-number">[{j.id}]</span>
              <h3 className="mt-1 text-sm font-bold text-foreground">{j.title}</h3>
              <p className="text-xs text-muted-foreground">{j.type} — {j.location}</p>
            </div>
            <Link to="/contact" className="text-cobalt opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight size={16} strokeWidth={1.25} />
            </Link>
          </div>
        ))}
        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            Don't see a role that fits? <Link to="/contact" className="text-cobalt hover:underline">Send us your CV</Link>.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
