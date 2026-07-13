import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const primaryLinks = [
  { label: "Services", path: "/services" },
  { label: "Leslie AI", path: "/leslie", highlight: true },
  { label: "Solutions", path: "/solutions" },
  { label: "Cybersecurity", path: "/cybersecurity" },
  { label: "Industries", path: "/industries" },
];

const moreLinks = [
  { label: "About", path: "/about" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Insights", path: "/insights" },
  { label: "FAQ", path: "/faq" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMoreOpen(false);
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isMoreActive = moreLinks.some((l) => l.path === location.pathname);

  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-border">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-mono text-xl font-bold tracking-tight text-foreground shrink-0">
          TELECO<span className="text-cobalt">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-3 py-1.5 text-sm transition-all duration-200 rounded-md whitespace-nowrap ${
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

          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-md transition-all duration-200 whitespace-nowrap ${
                isMoreActive || moreOpen
                  ? "text-foreground bg-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              More
              <ChevronDown size={14} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 glass-panel border border-border rounded-lg p-1.5 shadow-lg"
                >
                  {moreLinks.map((l) => (
                    <Link
                      key={l.path}
                      to={l.path}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        location.pathname === l.path
                          ? "text-foreground bg-secondary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="hidden items-center gap-2 lg:flex shrink-0">
          <Link
            to="/ask"
            className="px-3 py-2 text-sm font-medium text-muted-foreground border border-border rounded-lg hover:bg-secondary hover:text-foreground transition-all duration-200 whitespace-nowrap"
          >
            Ask a Question
          </Link>
          <Link
            to="/start-project"
            className="btn-primary !py-2 !px-4 text-sm whitespace-nowrap"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden text-foreground p-2 rounded-md hover:bg-secondary transition-colors"
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      {/* Mobile menu: backdrop + slide-in panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-16 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-[85%] max-w-sm border-l border-border bg-background/95 backdrop-blur-xl overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col gap-6 px-5 py-6">
                <div className="flex flex-col gap-0.5">
                  <span className="px-3 pb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Explore
                  </span>
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2.5 text-base rounded-md ${
                      location.pathname === "/"
                        ? "text-foreground bg-secondary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    Home
                  </Link>
                  {primaryLinks.map((l) => (
                    <Link
                      key={l.path}
                      to={l.path}
                      onClick={() => setOpen(false)}
                      className={`px-3 py-2.5 text-base rounded-md ${
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

                <div className="flex flex-col gap-0.5 border-t border-border pt-4">
                  <span className="px-3 pb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Company
                  </span>
                  {moreLinks.map((l) => (
                    <Link
                      key={l.path}
                      to={l.path}
                      onClick={() => setOpen(false)}
                      className={`px-3 py-2.5 text-base rounded-md ${
                        location.pathname === l.path
                          ? "text-foreground bg-secondary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-2 border-t border-border pt-4">
                  <Link
                    to="/ask"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-sm text-muted-foreground border border-border rounded-lg text-center hover:bg-secondary hover:text-foreground transition-colors"
                  >
                    Ask a Question
                  </Link>
                  <Link
                    to="/start-project"
                    onClick={() => setOpen(false)}
                    className="btn-primary justify-center text-sm"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
