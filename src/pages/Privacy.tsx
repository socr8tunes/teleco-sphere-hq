import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import SectionLabel from "@/components/SectionLabel";

const Privacy = () => (
  <Layout>
      <Seo title={"Privacy Policy — Teleco Ltd"} description={"How Teleco Ltd collects, uses and protects your information."} path="/privacy" />
    <section className="border-b border-border">
      <div className="container py-20">
        <SectionLabel number="00" label="Legal" />
        <h1 className="text-5xl font-bold text-foreground md:text-7xl">Privacy Policy</h1>
        <p className="mt-4 serial-number">Last updated: March 2026</p>
      </div>
    </section>
    <section>
      <div className="container max-w-3xl py-16 space-y-8">
        {[
          { title: "Information We Collect", content: "We collect information you provide directly through forms, including name, email, phone number, company name, and project descriptions. We also collect standard web analytics data." },
          { title: "How We Use Information", content: "We use your information to respond to inquiries, deliver services, improve our website, and communicate with you about projects and offerings." },
          { title: "Data Storage", content: "Your data is stored securely and is not shared with third parties except as necessary to provide our services or as required by law." },
          { title: "Your Rights", content: "You may request access to, correction of, or deletion of your personal data at any time by contacting us." },
          { title: "Contact", content: "For privacy-related inquiries, contact us at info@teleco.com.gh." },
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

export default Privacy;
