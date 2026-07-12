import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  { label: "Leslie AI Assistant", path: "/leslie" },
  { label: "Cybersecurity", path: "/cybersecurity" },
  { label: "Telecommunications Infrastructure", path: "/services" },
  { label: "Software Development", path: "/services" },
  { label: "Automation & Smart Systems", path: "/services" },
  { label: "Systems Integration", path: "/services" },
  { label: "R&D and Prototyping", path: "/services" },
];

const quickLinks = [
  { label: "About", path: "/about" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Insights", path: "/insights" },
  { label: "Careers", path: "/careers" },
  { label: "Partners", path: "/partners" },
  { label: "FAQ", path: "/faq" },
];

const Footer = () => (
  <footer className="relative border-t border-border bg-background overflow-hidden">
    {/* Subtle glow */}
    <div className="orb w-[400px] h-[400px] bg-cobalt/5 -bottom-40 left-1/2 -translate-x-1/2" />

    <div className="container relative z-10 py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <span className="font-mono text-xl font-bold text-foreground">
            TELECO<span className="text-cobalt">.</span>
          </span>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Engineering the infrastructure of modern Ghana. Hardware, software, and systems integration for mission-critical operations.
          </p>
          <Link to="/start-project" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cobalt hover:text-cobalt-glow transition-colors">
            Start a Project <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Services */}
        <div>
          <h4 className="serial-number mb-5">Services</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.label}>
                <Link to={s.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="serial-number mb-5">Company</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="serial-number mb-5">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>info@teleco.com.gh</p>
            <p>+233 597 420 752</p>
            <p>111 Nsunfa Temple Street, Sowutuom - Accra</p>
          </div>
          <div className="mt-6 flex gap-2">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <span className="text-border">·</span>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-border relative z-10">
      <div className="container flex items-center justify-between py-5">
        <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Teleco Ltd</p>
        <p className="font-mono text-xs text-muted-foreground hidden sm:flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cobalt" />
          BUILT IN ACCRA
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
