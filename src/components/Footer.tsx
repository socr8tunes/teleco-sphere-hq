import { Link } from "react-router-dom";

const services = [
  "Telecommunications Infrastructure",
  "Software Development",
  "Automation & Smart Systems",
  "Systems Integration",
  "R&D and Prototyping",
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
  <footer className="border-t border-border bg-background">
    <div className="container py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <span className="font-mono text-lg font-bold text-foreground">
            TELECO<span className="text-cobalt">.</span>
          </span>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Engineering the infrastructure of modern Ghana. Hardware, software, and systems integration for mission-critical operations.
          </p>
          <div className="mt-6 font-mono text-xs text-muted-foreground space-y-1">
            <p>info@teleco.com.gh</p>
            <p>+233 (0) 30 XXX XXXX</p>
            <p>Accra, Ghana</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="serial-number mb-4">[SERVICES]</h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s} className="text-sm text-muted-foreground">{s}</li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="serial-number mb-4">[QUICK LINKS]</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="serial-number mb-4">[LEGAL]</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container flex items-center justify-between py-4">
        <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Teleco Ltd. All rights reserved.</p>
        <p className="font-mono text-xs text-muted-foreground hidden sm:block">BUILT IN ACCRA</p>
      </div>
    </div>
  </footer>
);

export default Footer;
