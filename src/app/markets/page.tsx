"use client";

import Navbar from "@/components/layout/Navbar";
import Statusbar from "@/components/layout/Statusbar";
import PairsCard from "./components/PairsCard";

export default function Markets() {
  return (
    <main className="h-svh flex flex-col">
      <Navbar />
      <section className="w-full h-full pt-10 pb-5 px-5">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-5">
          <PairsCard
            title="New Pairs"
            tokens={[
              {
                symbol: "SYM",
                name: "My token",
                mint: "myMint",
                twitterPost: {
                  link: "https://x.com/selimajdev/status/2013291898836758968",
                  author: {
                    username: "selimajdev",
                    followers: 1250000,
                  },
                },
              },
            ]}
          />
          <PairsCard
            title="Final Stretch"
            tokens={[
              {
                symbol: "TEST",
                name: "A test token",
                mint: "myMint2",
                twitterPost: {
                  link: "https://x.com/selimajdev/status/2013291898836758968",
                  author: {
                    username: "selimajdev",
                    followers: 1250000,
                  },
                },
              },
            ]}
          />
          <PairsCard
            title="Migrated"
            tokens={[
              {
                symbol: "MIG",
                name: "Are we migrated yet?",
                mint: "migratedMint",
                twitterPost: {
                  link: "https://x.com/selimajdev/status/2013291898836758968",
                  author: {
                    username: "selimajdev",
                    followers: 1250000,
                  },
                },
              },
            ]}
          />
        </div>
      </section>
      <Statusbar />
    </main>
  );
}
