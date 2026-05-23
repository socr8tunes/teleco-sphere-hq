import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ShoppingBag, Send, MapPin, Package, Newspaper, Sparkles } from "lucide-react";

const capabilities = [
  { icon: ShoppingBag, label: "Shop" },
  { icon: Send, label: "Send & receive money" },
  { icon: MapPin, label: "Nearby services" },
  { icon: Package, label: "Track deliveries" },
  { icon: Newspaper, label: "News & sports" },
];

const LeslieFeature = () => (
  <section className="relative overflow-hidden border-y border-border">
    <div className="orb w-[600px] h-[600px] bg-cobalt/20 -top-40 -left-40 animate-pulse-glow" />
    <div className="orb w-[400px] h-[400px] bg-cobalt-glow/15 bottom-0 right-0 animate-pulse-glow" style={{ animationDelay: "1.2s" }} />

    <div className="container relative z-10 py-24">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="serial-number mb-5 flex items-center gap-2">
            <Sparkles size={14} strokeWidth={1.5} />
            NEW · CONVERSATIONAL AI
          </div>
          <h2 className="text-5xl font-bold text-foreground md:text-7xl leading-[1.02]">
            Meet <span className="gradient-text">Leslie</span>
            <span className="block text-2xl md:text-3xl font-medium text-muted-foreground mt-3">
              by Teleco
            </span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            A conversational AI assistant that helps you shop, send and receive money, find nearby services, track deliveries, and stay up to date with news and sports — all through <span className="text-foreground font-medium">WhatsApp</span> and <span className="text-foreground font-medium">Telegram</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {capabilities.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-card text-xs font-medium text-muted-foreground"
              >
                <c.icon size={14} strokeWidth={1.5} className="text-cobalt" />
                {c.label}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/leslie" className="btn-primary">
              Discover Leslie <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <a
              href="https://wa.me/233597420752?text=Hi%20Leslie"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <MessageCircle size={16} strokeWidth={1.5} /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Chat mock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="surface-card rounded-2xl p-6 glow-md max-w-md mx-auto">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <div className="h-10 w-10 rounded-full gradient-cobalt flex items-center justify-center text-primary-foreground font-bold">
                L
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Leslie</div>
                <div className="text-xs text-cobalt flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cobalt animate-pulse" />
                  online · WhatsApp
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="max-w-[80%] ml-auto px-4 py-2.5 rounded-2xl rounded-tr-sm bg-cobalt text-primary-foreground text-sm">
                Send 200 GHS to Ama
              </div>
              <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-tl-sm bg-secondary text-foreground text-sm">
                Sending GHS 200 to Ama (•••• 4421). Reply <span className="font-mono-tech text-cobalt">YES</span> to confirm.
              </div>
              <div className="max-w-[80%] ml-auto px-4 py-2.5 rounded-2xl rounded-tr-sm bg-cobalt text-primary-foreground text-sm">
                Where's my delivery?
              </div>
              <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-tl-sm bg-secondary text-foreground text-sm">
                📦 Out for delivery — arriving in ~25 min at Sowutuom.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LeslieFeature;
