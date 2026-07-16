import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import SectionLabel from "@/components/SectionLabel";
import { submitForm } from "@/lib/api";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const toastId = toast.loading("Sending message…");
    const fd = new FormData(e.currentTarget);
    const ok = await submitForm({
      type: "contact",
      name: fd.get("name") as string,
      company: fd.get("company") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      service: fd.get("service") as string,
      message: fd.get("message") as string,
    });
    setSubmitting(false);
    if (ok) {
      toast.success("Message sent successfully!", { id: toastId });
      setSubmitted(true);
    } else {
      toast.error("Failed to send. Please try again.", { id: toastId });
    }
  };

  return (
    <Layout>
      <Seo title={"Contact Teleco Ltd — Accra, Ghana"} description={"Get in touch with Teleco Ltd. Call +233 597 420 752 or visit us at 111 Nsunfa Temple Street, Sowutuom, Accra."} path="/contact" />
      <section className="border-b border-border">
        <div className="container py-20">
          <SectionLabel number="00" label="Contact" />
          <h1 className="text-5xl font-bold text-foreground md:text-7xl">Get in Touch</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Reach our engineering team directly.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="serial-number mb-2">[EMAIL]</h4>
                <p className="text-sm text-foreground">info@teleco.com.gh</p>
              </div>
              <div>
                <h4 className="serial-number mb-2">[PHONE]</h4>
                <p className="text-sm text-foreground">+233 597 420 752</p>
              </div>
              <div>
                <h4 className="serial-number mb-2">[LOCATION]</h4>
                <p className="text-sm text-foreground">111 Nsunfa Temple Street</p>
                <p className="text-sm text-foreground">Sowutuom - Accra</p>
              </div>
              <div>
                <h4 className="serial-number mb-2">[HOURS]</h4>
                <p className="text-sm text-muted-foreground">Mon–Fri 08:00–18:00 GMT</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="surface-card p-10 text-center">
                  <span className="serial-number">[RECEIVED]</span>
                  <h3 className="mt-3 text-xl font-bold text-foreground">Message Sent</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Our team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="serial-number block mb-2">NAME *</label>
                    <input required name="name" type="text" maxLength={100} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="Full name" />
                  </div>
                  <div>
                    <label className="serial-number block mb-2">COMPANY</label>
                    <input name="company" type="text" maxLength={100} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="serial-number block mb-2">EMAIL *</label>
                    <input required name="email" type="email" maxLength={255} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="email@company.com" />
                  </div>
                  <div>
                    <label className="serial-number block mb-2">PHONE</label>
                    <input name="phone" type="tel" maxLength={20} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors" placeholder="+233..." />
                  </div>
                  <div>
                    <label className="serial-number block mb-2">SERVICE NEEDED</label>
                    <select name="service" className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors">
                      <option value="">Select service</option>
                      <option>Telecommunications Infrastructure</option>
                      <option>Software Development</option>
                      <option>Automation & Smart Systems</option>
                      <option>Systems Integration</option>
                      <option>R&D and Prototyping</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="serial-number block mb-2">PROJECT DESCRIPTION *</label>
                    <textarea required name="message" maxLength={2000} rows={5} className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-cobalt rounded-sm hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-50">
                      {submitting ? "Sending…" : "Send Message"} <Send size={14} strokeWidth={1.25} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
