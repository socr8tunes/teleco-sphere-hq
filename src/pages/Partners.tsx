import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";

const Partners = () => (
  <Layout>
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="00" label="Partners" />
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">Our Partners</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          We collaborate with leading vendors, telecom providers, and technology partners to deliver integrated solutions.
        </p>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            { cat: "Technology Vendors", items: ["Hardware manufacturers", "Cloud service providers", "Software licensors"] },
            { cat: "Telecom Providers", items: ["Network operators", "ISPs", "Tower companies"] },
            { cat: "Technical Partners", items: ["Engineering consultancies", "Research institutions", "System integrators"] },
          ].map((p) => (
            <div key={p.cat} className="surface-card p-6">
              <h3 className="text-sm font-bold text-foreground">{p.cat}</h3>
              <ul className="mt-3 space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-cobalt mt-0.5">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Interested in partnering with Teleco? <a href="/contact" className="text-cobalt hover:underline">Contact our partnerships team</a>.
        </p>
      </div>
    </section>
  </Layout>
);

export default Partners;
