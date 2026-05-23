import { Link, useLocation } from "react-router-dom";
import { Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LeslieFloatingBadge = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/leslie") return;
    if (sessionStorage.getItem("leslie-badge-dismissed")) return;
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, [location.pathname]);

  const dismiss = () => {
    sessionStorage.setItem("leslie-badge-dismissed", "1");
    setVisible(false);
  };

  if (location.pathname === "/leslie") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-5 right-5 z-50 max-w-xs"
        >
          <div className="surface-card rounded-xl p-4 glow-md flex items-start gap-3 pr-9 relative">
            <button
              onClick={dismiss}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-secondary"
              aria-label="Dismiss"
            >
              <X size={14} strokeWidth={1.5} />
            </button>
            <div className="h-10 w-10 shrink-0 rounded-full gradient-cobalt flex items-center justify-center text-primary-foreground font-bold">
              L
            </div>
            <div>
              <div className="flex items-center gap-1.5 serial-number">
                <Sparkles size={11} strokeWidth={1.5} /> NEW
              </div>
              <p className="text-sm text-foreground mt-1 font-medium leading-snug">
                Meet Leslie — your AI on WhatsApp & Telegram.
              </p>
              <Link
                to="/leslie"
                onClick={dismiss}
                className="mt-2 inline-flex items-center text-xs font-semibold text-cobalt hover:underline"
              >
                Try it now →
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeslieFloatingBadge;
