import { useState } from "react";
import { ArrowRight, Upload, Send } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { submitCareerApplication } from "@/lib/api";

const jobs = [
  { id: "01", title: "Senior Network Engineer", type: "Full-time", location: "Accra, Ghana" },
  { id: "02", title: "Full-Stack Software Developer", type: "Full-time", location: "Accra, Ghana" },
  { id: "03", title: "Embedded Systems Engineer", type: "Full-time", location: "Accra, Ghana" },
];

const internships = [
  { id: "I1", title: "Network Engineering Intern", duration: "1–6 months", location: "Remote or Accra, Ghana" },
  { id: "I2", title: "Software Development Intern", duration: "1–6 months", location: "Remote or Accra, Ghana" },
  { id: "I3", title: "IT Support Intern", duration: "1–6 months", location: "Remote or Accra, Ghana" },
];

const Careers = () => {
  const [applyingTo, setApplyingTo] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Check if applying to an internship
  const isInternship = applyingTo ? internships.some(i => i.title === applyingTo) : false;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const toastId = toast.loading("Submitting application…");
    const fd = new FormData(e.currentTarget);

    const ok = await submitCareerApplication(
      {
        type: "career_application",
        position: applyingTo || (fd.get("position") as string) || "General Application",
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        phone: (fd.get("phone") as string) || "",
        experience: fd.get("experience") as string,
        coverLetter: fd.get("coverLetter") as string,
      },
      cvFile
    );

    setSubmitting(false);
    if (ok) {
      toast.success("Application submitted!", { id: toastId });
      setSubmitted(true);
    } else {
      toast.error("Failed to submit. Please try again.", { id: toastId });
    }
  };

  return (
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

      {/* Open Positions */}
      <section className="border-b border-border">
        <div className="container max-w-3xl py-16 space-y-0">
          <h2 className="serial-number mb-6">OPEN POSITIONS</h2>
          {jobs.map((j) => (
            <div key={j.id} className="surface-card p-6 flex items-center justify-between group">
              <div>
                <span className="serial-number">[{j.id}]</span>
                <h3 className="mt-1 text-sm font-bold text-foreground">{j.title}</h3>
                <p className="text-xs text-muted-foreground">{j.type} — {j.location}</p>
              </div>
              <button
                onClick={() => {
                  setApplyingTo(j.title);
                  setSubmitted(false);
                  document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-cobalt opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-medium"
              >
                Apply <ArrowRight size={14} strokeWidth={1.25} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Internships */}
      <section className="border-b border-border">
        <div className="container max-w-3xl py-16 space-y-0">
          <h2 className="serial-number mb-6">INTERNSHIP OPPORTUNITIES</h2>
          {internships.map((i) => (
            <div key={i.id} className="surface-card p-6 flex items-center justify-between group">
              <div>
                <span className="serial-number">[{i.id}]</span>
                <h3 className="mt-1 text-sm font-bold text-foreground">{i.title}</h3>
                <p className="text-xs text-muted-foreground">{i.duration} — {i.location}</p>
              </div>
              <button
                onClick={() => {
                  setApplyingTo(i.title);
                  setSubmitted(false);
                  document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-cobalt opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-medium"
              >
                Apply <ArrowRight size={14} strokeWidth={1.25} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-section">
        <div className="container max-w-2xl py-16">
          <h2 className="serial-number mb-2">
            {applyingTo ? `APPLYING FOR: ${applyingTo.toUpperCase()}` : "GENERAL APPLICATION"}
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            {applyingTo
              ? "Fill in the form below to apply for this position."
              : "Don't see a role that fits? Submit a general application and we'll keep your details on file."}
          </p>

          {submitted ? (
            <div className="surface-card p-10 text-center">
              <span className="serial-number">[RECEIVED]</span>
              <h3 className="mt-3 text-xl font-bold text-foreground">Application Submitted</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you for your interest. We'll review your application and get back to you.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setApplyingTo(null);
                  setCvFile(null);
                }}
                className="mt-4 text-sm text-cobalt hover:underline"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {!applyingTo && (
                <div>
                  <label className="serial-number block mb-2">POSITION OF INTEREST</label>
                  <select
                    name="position"
                    className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors"
                  >
                    <option value="General Application">General / Open Application</option>
                    <optgroup label="Full-time Positions">
                      {jobs.map((j) => (
                        <option key={j.id} value={j.title}>{j.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Internships">
                      {internships.map((i) => (
                        <option key={i.id} value={i.title}>{i.title}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="serial-number block mb-2">FULL NAME *</label>
                  <input
                    required
                    name="name"
                    type="text"
                    maxLength={100}
                    className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="serial-number block mb-2">EMAIL *</label>
                  <input
                    required
                    name="email"
                    type="email"
                    maxLength={255}
                    className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="serial-number block mb-2">PHONE</label>
                <input
                  name="phone"
                  type="tel"
                  maxLength={20}
                  className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors"
                  placeholder="+233..."
                />
              </div>

              <div>
                <label className="serial-number block mb-2">YEARS OF RELEVANT EXPERIENCE *</label>
                <select
                  required
                  name="experience"
                  className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-cobalt transition-colors"
                >
                  <option value="">Select experience level</option>
                  <option>Less than 1 year</option>
                  <option>1–3 years</option>
                  <option>3–5 years</option>
                  <option>5–10 years</option>
                  <option>10+ years</option>
                </select>
              </div>

              <div>
                <label className="serial-number block mb-2">COVER LETTER / WHY THIS ROLE? *</label>
                <textarea
                  required
                  name="coverLetter"
                  maxLength={3000}
                  rows={5}
                  className="w-full bg-transparent border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cobalt transition-colors resize-none"
                  placeholder="Tell us why you're a great fit, your relevant skills, and what excites you about Teleco..."
                />
              </div>

              <div>
                <label className="serial-number block mb-2">UPLOAD CV / RESUME</label>
                <label className="flex items-center gap-3 w-full border border-dashed border-border rounded-sm px-4 py-4 cursor-pointer hover:border-cobalt transition-colors">
                  <Upload size={18} className="text-muted-foreground" strokeWidth={1.25} />
                  <span className="text-sm text-muted-foreground">
                    {cvFile ? cvFile.name : "Click to upload PDF, DOC, or DOCX (max 5MB)"}
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-cobalt rounded-sm hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-50"
              >
                {submitting ? "Submitting…" : "Submit Application"} <Send size={14} strokeWidth={1.25} />
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
