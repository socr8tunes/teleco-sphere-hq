import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  ShoppingBag,
  Send,
  MapPin,
  Package,
  Newspaper,
  Sparkles,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";

const features = [
  {
    icon: ShoppingBag,
    title: "Shop conversationally",
    desc: "Browse, compare, and order from local merchants without leaving your chat.",
  },
  {
    icon: Send,
    title: "Send & receive money",
    desc: "Transfer funds, request payments, and check balances with simple messages.",
  },
  {
    icon: MapPin,
    title: "Nearby services",
    desc: "Find pharmacies, hospitals, mechanics, restaurants — anything around you.",
  },
  {
    icon: Package,
    title: "Track deliveries",
    desc: "Real-time updates on packages, food orders, and dispatch riders.",
  },
  {
    icon: Newspaper,
    title: "News & sports",
    desc: "Headlines, live scores, and tailored updates the moment you ask.",
  },
  {
    icon: Sparkles,
    title: "Always learning",
    desc: "Leslie gets smarter with every conversation, tuned for Ghana's context.",
  },
];

const why = [
  { icon: Zap, title: "Zero install", desc: "Works on apps you already use — WhatsApp and Telegram." },
  { icon: Globe, title: "Built for Ghana", desc: "Local merchants, local payments, local language nuance." },
  { icon: Shield, title: "Private & secure", desc: "End-to-end encrypted channels, confirmations on every transaction." },
];

const Leslie = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden min-h-[80vh] flex items-center border-b border-border">
      <div className="orb w-[600px] h-[600px] bg-cobalt/25 -top-40 -right-40 animate-pulse-glow" />
      <div className="orb w-[400px] h-[400px] bg-cobalt-deep/30 bottom-10 left-10 animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="serial-number mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-cobalt" />
            <Sparkles size={14} strokeWidth={1.5} /> INTRODUCING LESLIE
          </div>
          <h1 className="text-5xl font-bold leading-[1.02] text-foreground md:text-7xl lg:text-[5.5rem]">
            Your everyday
            <span className="gradient-text block">AI assistant</span>
            on WhatsApp & Telegram
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Leslie by Teleco helps you shop, send and receive money, access nearby services, track deliveries, and stay informed — all through a simple chat.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/233597420752?text=Hi%20Leslie"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} strokeWidth={1.5} /> Start on WhatsApp
            </a>
            <a
              href="https://t.me/teleco_leslie_bot"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Send size={16} strokeWidth={1.5} /> Start on Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="border-b border-border">
      <div className="container py-24">
        <SectionLabel number="01" label="Capabilities" />
        <h2 className="mt-4 text-4xl font-bold text-foreground md:text-6xl">
          One assistant. <span className="gradient-text">Many superpowers.</span>
        </h2>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="surface-card rounded-lg p-7"
            >
              <div className="p-2.5 w-fit rounded-lg bg-cobalt/10 border border-cobalt/20">
                <f.icon size={22} strokeWidth={1.5} className="text-cobalt" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why */}
    <section className="border-b border-border">
      <div className="container py-24">
        <SectionLabel number="02" label="Why Leslie" />
        <div className="mt-4 grid gap-12 lg:grid-cols-2 lg:items-center">
          <h2 className="text-4xl font-bold text-foreground md:text-6xl">
            Built for the way <span className="gradient-text">Ghana chats.</span>
          </h2>
          <div className="grid sm:grid-cols-1 gap-4">
            {why.map((w) => (
              <div key={w.title} className="surface-card rounded-lg p-6 flex gap-4">
                <div className="p-2 h-fit rounded-md bg-cobalt/10 border border-cobalt/20">
                  <w.icon size={18} strokeWidth={1.5} className="text-cobalt" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{w.title}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-cobalt/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="container relative z-10 py-28 text-center">
        <h2 className="text-4xl font-bold text-foreground md:text-6xl">
          Say hi to <span className="gradient-text">Leslie</span> today.
        </h2>
        <p className="mt-6 max-w-lg mx-auto text-muted-foreground text-lg">
          No app to install. Just open WhatsApp or Telegram and start chatting.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/233597420752?text=Hi%20Leslie" target="_blank" rel="noreferrer" className="btn-primary">
            <MessageCircle size={16} strokeWidth={1.5} /> WhatsApp Leslie
          </a>
          <a href="https://t.me/teleco_leslie_bot" target="_blank" rel="noreferrer" className="btn-secondary">
            <Send size={16} strokeWidth={1.5} /> Telegram Leslie
          </a>
          <Link to="/contact" className="btn-secondary">
            Talk to the team <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Leslie;
