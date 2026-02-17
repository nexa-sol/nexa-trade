"use client";

import Navbar from "@/components/layout/Navbar";
import Statusbar from "@/components/layout/Statusbar";
import MarketSidebar from "./components/MarketSidebar";

export default function Market() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <section className="w-full h-full flex flex-row">
        <div className="w-full h-svh border-r border-border"></div>
        <MarketSidebar />
      </section>
      {/* <Statusbar /> */}
    </main>
  );
}
