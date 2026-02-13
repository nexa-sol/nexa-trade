"use client";
import Link from "next/link";
import { Motion, Staggered } from "tailwind-motlib";
import {
  Shield,
  Zap,
  Brain,
  Scan,
  BarChart3,
  Filter,
  Send,
  TrendingDown,
} from "lucide-react";

export default function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 -left-40 h-150 w-150 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-125 w-125 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 px-6 pt-32 pb-24 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight animate-fade-in-up">
            Trade memecoins <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              without trading blind
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl animate-fade-in-up animate-delay-100">
            Nexa filters noise, intercepts high-rug setups, and executes faster,
            so you spend less time guessing and more time surviving.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/markets"
              className="animate-fade-in-up animate-duration-500 animate-delay-200"
            >
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                Open Terminal
              </button>
            </Link>
            <Link
              className="animate-fade-in-up animate-duration-500 animate-delay-300"
              href="https://github.com/nexa-sol/nexa-trade?tab=readme-ov-file#-nexa-roadmap--alpha-release"
              target="_blank"
            >
              <button className="px-6 py-3 rounded-lg border border-border hover:bg-accent/10 transition">
                View Roadmap
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Staggered stagger={100}>
            {[
              {
                icon: Shield,
                title: "Stop Rugs Before They Happen",
                desc: "Scans each token for risks like holder concentration, grouped wallets, deployer history, and liquidity issues. You see exactly what's wrong before you trade.",
              },
              {
                icon: Zap,
                title: "Built for Solana Speed",
                desc: "Optimized batching and Jupiter routing keep trades fast when the network is busy. Catch opportunities while they're still there.",
              },
              {
                icon: TrendingDown,
                title: "Automated Risk Checks",
                desc: "AI handles wallet analysis, deployer vetting, and liquidity checks on every trade. Skip the manual work and focus on timing.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Motion
                key={i}
                className="animate-fade-in-up animate-duration-500"
              >
                <div className="opacity-0 group">
                  <div className="p-6 rounded-xl border border-border h-full transition-colors duration-500 bg-card/20 hover:bg-card/40 hover:border-primary/30">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-500">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </Motion>
            ))}
          </Staggered>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <Motion className="animate-fade-in-right animate-duration-800">
          <h2 className="text-3xl font-semibold mb-12 opacity-0">
            How it works
          </h2>
        </Motion>

        <div className="grid md:grid-cols-4 gap-6">
          <Staggered stagger={150}>
            {[
              {
                icon: Scan,
                step: "Detect",
                desc: "New pairs, migrations, and liquidity events are tracked in real time.",
              },
              {
                icon: BarChart3,
                step: "Analyze",
                desc: "Risk signals, holder distribution, and deployer behavior are scored.",
              },
              {
                icon: Filter,
                step: "Decide",
                desc: "AI filters or manual overrides determine execution eligibility.",
              },
              {
                icon: Send,
                step: "Execute",
                desc: "Trades are routed through Jupiter with minimal latency.",
              },
            ].map(({ icon: Icon, step, desc }, i) => (
              <Motion key={i} className="animate-fade-in-up">
                <div className="opacity-0">
                  <div className="p-5 rounded-lg border border-border h-full transition-colors duration-500 bg-card/20 hover:bg-card/40 hover:border-primary/30">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="block text-foreground font-semibold text-base mb-2">
                      {step}
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </Motion>
            ))}
          </Staggered>
        </div>
      </section>
    </main>
  );
}
