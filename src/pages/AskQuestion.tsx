import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import SectionLabel from "@/components/SectionLabel";
import { submitForm } from "@/lib/api";

const AskQuestion = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const toastId = toast.loading("Sending question…");
    const fd = new FormData(e.currentTarget);
    const ok = await submitForm({
      type: "ask_question",
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      category: fd.get("category") as string,
      subject: fd.get("subject") as string,
      message: fd.get("message") as string,
    });
    setSubmitting(false);
    if (ok) {
      toast.success("Question sent!", { id: toastId });
      setSubmitted(true);
    } else {
      toast.error("Failed to send. Please try again.", { id: toastId });
    }
  };

  return (
    <Layout>
      <Seo title={"Ask a Question — Teleco Ltd"} description={"Have a question for our team? Send an inquiry and Teleco's engineers will respond with expert guidance."} path="/ask-question" />
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
        <div className="container max-w-3xl mx-auto py-16">
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
                  <input required name="name" type="text" maxLength={100} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="Full name" />
                </div>
                <div>
                  <label className="serial-number block mb-2">EMAIL *</label>
                  <input required name="email" type="email" maxLength={255} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="email@company.com" />
                </div>
              </div>
              <div>
                <label className="serial-number block mb-2">PHONE (OPTIONAL)</label>
                <input name="phone" type="tel" maxLength={20} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="+233..." />
              </div>
              <div>
                <label className="serial-number block mb-2">SERVICE CATEGORY</label>
                <select name="category" className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors">
                  <option value="">General inquiry</option>
                  <option>Telecommunications Infrastructure</option>
                  <option>Software Development</option>
                  <option>Automation & Smart Systems</option>
                  <option>Systems Integration</option>
                  <option>R&D and Prototyping</option>
                  <option>Enterprise Cybersecurity</option>
                </select>
              </div>
              <div>
                <label className="serial-number block mb-2">SUBJECT *</label>
                <input required name="subject" type="text" maxLength={200} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="What's your question about?" />
              </div>
              <div>
                <label className="serial-number block mb-2">MESSAGE *</label>
                <textarea required name="message" maxLength={2000} rows={5} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors resize-none" placeholder="Your question..." />
              </div>
              <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-cobalt rounded-sm hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-50">
                {submitting ? "Sending…" : "Send Question"} <Send size={14} strokeWidth={1.25} />
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AskQuestion;
