import { useEffect, useState } from "react";

const SystemStatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", { timeZone: "Africa/Accra", hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-1.5 font-mono text-[11px] tracking-wider text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>ACCRA {time}</span>
          <span className="hidden sm:inline">LAT 5.6037° N / LONG 0.1870° W</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">SYS LOAD 12%</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            NETWORK NOMINAL
          </span>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusBar;
