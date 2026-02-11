"use client";

import Navbar from "@/components/layout/Navbar";
import Statusbar from "@/components/layout/Statusbar";
import PairsCard from "./components/PairsCard";

export default function Markets() {
  return (
    <main className="h-svh flex flex-col">
      <Navbar />
      <section className="w-full h-full pt-10 pb-5 px-5">
        <div className="w-full h-full grid grid-cols-3 gap-5">
          <PairsCard title="New Pairs" />
          <PairsCard title="Final Stretch" />
          <PairsCard title="Migrated" />
        </div>
      </section>
      <Statusbar />
    </main>
  );
}
