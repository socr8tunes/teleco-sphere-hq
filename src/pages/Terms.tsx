import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import SectionLabel from "@/components/SectionLabel";

const Terms = () => (
  <Layout>
      <Seo title={"Terms of Service — Teleco Ltd"} description={"Terms governing use of Teleco Ltd's website and services."} path="/terms" />
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="00" label="Legal" />
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">Terms of Use</h1>
        <p className="mt-4 serial-number">Last updated: March 2026</p>
      </div>
    </section>
    <section>
      <div className="container max-w-3xl py-16 space-y-8">
        {[
          { title: "Acceptance of Terms", content: "By accessing this website, you agree to these Terms of Use. If you do not agree, please do not use this site." },
          { title: "Use of Website", content: "This website is provided for informational and inquiry purposes. You agree not to misuse the site or submit false information through any forms." },
          { title: "Intellectual Property", content: "All content, design, and code on this website is the property of Teleco Ltd and may not be reproduced without permission." },
          { title: "Limitation of Liability", content: "Teleco Ltd is not liable for any damages arising from the use of this website." },
          { title: "Contact", content: "For questions about these terms, contact us at info@teleco.com.gh." },
        ].map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-bold text-foreground">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Terms;
