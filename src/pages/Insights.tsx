import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";

const articles = [
  { id: "01", title: "The Future of VoIP in West Africa", category: "Technology", date: "2026-03-10", excerpt: "How cloud-based voice systems are replacing legacy PBX infrastructure across the region." },
  { id: "02", title: "Smart Kiosks: Beyond Self-Service", category: "Innovation", date: "2026-02-28", excerpt: "Why the next generation of kiosks will integrate AI, biometrics, and real-time analytics." },
  { id: "03", title: "Building Resilient Telecom Networks", category: "Infrastructure", date: "2026-02-15", excerpt: "Lessons from deploying mission-critical tower infrastructure in challenging environments." },
];

const Insights = () => (
  <Layout>
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="00" label="Insights" />
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">Insights</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Technical articles, company updates, and industry perspectives.
        </p>
      </div>
    </section>

    <section>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {articles.map((a) => (
            <article key={a.id} className="surface-card p-6 group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2 py-0.5 text-[10px] font-mono text-cobalt border border-cobalt/30 rounded-sm">{a.category}</span>
                <span className="serial-number">{a.date}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-cobalt transition-colors">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Insights;
