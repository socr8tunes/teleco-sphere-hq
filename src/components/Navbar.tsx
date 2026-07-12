import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Leslie AI", path: "/leslie", highlight: true },
  { label: "Solutions", path: "/solutions" },
  { label: "Cybersecurity", path: "/cybersecurity" },
  { label: "Industries", path: "/industries" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Insights", path: "/insights" },
  { label: "FAQ", path: "/faq" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-mono text-xl font-bold tracking-tight text-foreground">
          TELECO<span className="text-cobalt">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-3 py-1.5 text-sm transition-all duration-200 rounded-md ${
                location.pathname === l.path
                  ? "text-foreground bg-secondary"
                  : l.highlight
                    ? "text-cobalt hover:bg-cobalt/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/ask"
            className="px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:bg-secondary hover:text-foreground transition-all duration-200"
          >
            Ask a Question
          </Link>
          <Link
            to="/start-project"
            className="btn-primary !py-2 text-sm"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-1.5 rounded-md hover:bg-secondary transition-colors">
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-2.5 text-sm rounded-md ${
                    location.pathname === l.path
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
                <Link to="/ask" onClick={() => setOpen(false)} className="px-4 py-2.5 text-sm text-muted-foreground border border-border rounded-lg text-center">
                  Ask a Question
                </Link>
                <Link to="/start-project" onClick={() => setOpen(false)} className="btn-primary justify-center text-sm">
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
