import { useState } from "react";
import { Send } from "lucide-react";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";

const AskQuestion = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="border-b border-border">
        <div className="container py-20">
          <SectionLabel number="00" label="Ask a Question" />
          <h1 className="text-5xl font-bold text-foreground md:text-7xl">Ask Us Anything</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Have a question about our services or capabilities? We'll get back to you quickly.
          </p>
        </div>
      </section>

      <section>
        <div className="container max-w-2xl py-16">
          {submitted ? (
            <div className="surface-card p-10 text-center">
              <span className="serial-number">[RECEIVED]</span>
              <h3 className="mt-3 text-xl font-bold text-foreground">Question Received</h3>
              <p className="mt-2 text-sm text-muted-foreground">We'll respond via email within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="serial-number block mb-2">NAME *</label>
                  <input required type="text" maxLength={100} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="Full name" />
                </div>
                <div>
                  <label className="serial-number block mb-2">EMAIL *</label>
                  <input required type="email" maxLength={255} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="email@company.com" />
                </div>
              </div>
              <div>
                <label className="serial-number block mb-2">PHONE (OPTIONAL)</label>
                <input type="tel" maxLength={20} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="+233..." />
              </div>
              <div>
                <label className="serial-number block mb-2">SERVICE CATEGORY</label>
                <select className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors">
                  <option value="">General inquiry</option>
                  <option>Telecommunications Infrastructure</option>
                  <option>Software Development</option>
                  <option>Automation & Smart Systems</option>
                  <option>Systems Integration</option>
                  <option>R&D and Prototyping</option>
                </select>
              </div>
              <div>
                <label className="serial-number block mb-2">SUBJECT *</label>
                <input required type="text" maxLength={200} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="What's your question about?" />
              </div>
              <div>
                <label className="serial-number block mb-2">MESSAGE *</label>
                <textarea required maxLength={2000} rows={5} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors resize-none" placeholder="Your question..." />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-cobalt rounded-sm hover:opacity-90 transition-opacity active:scale-[0.98]">
                Send Question <Send size={14} strokeWidth={1.25} />
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AskQuestion;
