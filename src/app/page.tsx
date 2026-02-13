import Link from "next/link";

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
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Trade memecoins <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              without trading blind
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Nexa filters noise, intercepts high-rug setups, and executes faster,
            so you spend less time guessing and more time surviving.
          </p>

          <div className="mt-10 flex gap-4">
            <Link href="/markets">
              <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                Open Terminal
              </button>
            </Link>
            <Link
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

      {/* Live signal strip */}
      {/* <section className="relative z-10 border-y border-border/60 bg-card/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 text-sm text-muted-foreground overflow-x-auto">
          <span>🟢 12 rugs intercepted today</span>
          <span>⚡ Median execution: 420ms</span>
          <span>📉 Top 10 holder risk flagged</span>
          <span>🔍 Bundler detected pre-launch</span>
        </div>
      </section> */}

      {/* Why Nexa */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-medium mb-2">Risk-aware by default</h3>
            <p className="text-muted-foreground">
              Every trade is evaluated against holder concentration, bundlers,
              deployer behavior, and liquidity signals, before execution.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">AI where it matters</h3>
            <p className="text-muted-foreground">
              No magic predictions. Just automated checks that experienced
              traders already do, instantly and consistently.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Built for speed</h3>
            <p className="text-muted-foreground">
              Optimized request batching, Solana-native execution, and Jupiter
              routing keep latency low even during peak volume.
            </p>
          </div>
        </div>
      </section>

      {/* Risk interception highlight */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-10">
          <h2 className="text-3xl font-semibold mb-4">
            Nexa can stop you before you buy a rug
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            When high-risk patterns are detected, Nexa blocks execution by
            default and tells you exactly why. If you still want in, that's your
            call. But it won't be blind.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">How it works</h2>

        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div className="text-muted-foreground">
            <span className="block text-foreground font-medium mb-1">
              1. Detect
            </span>
            New pairs, migrations, and liquidity events are tracked in real
            time.
          </div>
          <div className="text-muted-foreground">
            <span className="block text-foreground font-medium mb-1">
              2. Analyze
            </span>
            Risk signals, holder distribution, and deployer behavior are scored.
          </div>
          <div className="text-muted-foreground">
            <span className="block text-foreground font-medium mb-1">
              3. Decide
            </span>
            AI filters or manual overrides determine execution eligibility.
          </div>
          <div className="text-muted-foreground">
            <span className="block text-foreground font-medium mb-1">
              4. Execute
            </span>
            Trades are routed through Jupiter with minimal latency.
          </div>
        </div>
      </section>

      {/* Fees & alignment */}
      <section className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">
            Fees that scale with success
          </h2>
          <p className="text-muted-foreground">
            Nexa charges a small platform fee on executed trades, with optional
            AI and quant features available per-use. No subscriptions. No hidden
            incentives.
          </p>
        </div>
      </section>
    </main>
  );
}
