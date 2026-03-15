import { ReactNode } from "react";
import SystemStatusBar from "./SystemStatusBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAutoTheme } from "@/hooks/use-auto-theme";

const Layout = ({ children }: { children: ReactNode }) => {
  useAutoTheme();

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-500">
      <SystemStatusBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
