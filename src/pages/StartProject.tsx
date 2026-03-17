import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { submitForm } from "@/lib/api";

const StartProject = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await submitForm({
      type: "start_project",
      name: fd.get("name") as string,
      company: fd.get("company") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      service: fd.get("service") as string,
      description: fd.get("description") as string,
      budget: fd.get("budget") as string,
    });
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="border-b border-border">
        <div className="container py-20">
          <SectionLabel number="00" label="Start a Project" />
          <h1 className="text-5xl font-bold text-foreground md:text-7xl">Let's Build</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Tell us about your project. Our engineering team will respond within 24 hours.
          </p>
        </div>
      </section>

      <section>
        <div className="container max-w-2xl py-16">
          {submitted ? (
            <div className="surface-card p-10 text-center">
              <span className="serial-number">[CONFIRMED]</span>
              <h3 className="mt-3 text-xl font-bold text-foreground">Project Inquiry Received</h3>
              <p className="mt-2 text-sm text-muted-foreground">We'll review your requirements and reach out within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="serial-number block mb-2">NAME *</label>
                  <input required type="text" maxLength={100} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="Full name" />
                </div>
                <div>
                  <label className="serial-number block mb-2">COMPANY *</label>
                  <input required name="name" type="text" maxLength={100} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="Full name" />
                </div>
                <div>
                  <label className="serial-number block mb-2">COMPANY *</label>
                  <input required name="company" type="text" maxLength={100} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="Company name" />
                </div>
                <div>
                  <label className="serial-number block mb-2">EMAIL *</label>
                  <input required name="email" type="email" maxLength={255} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="email@company.com" />
                </div>
                <div>
                  <label className="serial-number block mb-2">PHONE</label>
                  <input name="phone" type="tel" maxLength={20} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="+233..." />
                </div>
              </div>
              <div>
                <label className="serial-number block mb-2">SERVICE CATEGORY *</label>
                <select required name="service" className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors">
                  <option value="">Select service</option>
                  <option>Telecommunications Infrastructure</option>
                  <option>Software Development</option>
                  <option>Automation & Smart Systems</option>
                  <option>Systems Integration</option>
                  <option>R&D and Prototyping</option>
                  <option>Multiple / Not Sure</option>
                </select>
              </div>
              <div>
                <label className="serial-number block mb-2">PROJECT DESCRIPTION *</label>
                <textarea required name="description" maxLength={3000} rows={6} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors resize-none" placeholder="Describe your project requirements, timeline, and any technical specifications..." />
              </div>
              <div>
                <label className="serial-number block mb-2">BUDGET RANGE (OPTIONAL)</label>
                <select name="budget" className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors">
                  <option value="">Prefer not to say</option>
                  <option>Under $10,000</option>
                  <option>$10,000 – $50,000</option>
                  <option>$50,000 – $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-cobalt rounded-sm hover:opacity-90 transition-opacity active:scale-[0.98]">
                Submit Inquiry <ArrowRight size={14} strokeWidth={1.25} />
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default StartProject;
