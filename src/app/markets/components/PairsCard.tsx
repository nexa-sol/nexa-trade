import { SolanaLogo } from "@/components/logos";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings2Icon, ZapIcon } from "lucide-react";
import TokenCard from "./TokenCard";

export default function PairsCard({ title }: { title: string }) {
  return (
    <Card className="py-3 gap-0!">
      <CardHeader className="px-4 pb-3! border-b flex justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <div className="flex items-center gap-2">
          <div className="border border-border animate-colors hover:bg-input/20 px-1.5 py-1.5 rounded-full flex items-center gap-1">
            <div className="flex items-center">
              <ZapIcon className="w-3 h-3" />
              <input
                type="text"
                placeholder="0.0"
                className="px-1 w-10 focus:outline-0 text-xs"
              />
              <SolanaLogo className="w-3 h-3" />
            </div>
            <div className="border-l border-border pl-1 flex items-center text-xs gap-1.5">
              {["P1", "P2", "P3"].map((p) => (
                <div
                  key={p}
                  className="text-foreground/90 cursor-pointer hover:text-primary"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            className="p-1! h-max hover:bg-accent/20 hover:text-accent"
          >
            <Settings2Icon />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-4 border-b border-border ">
        <TokenCard
          token={{ symbol: "SYM", name: "My token", mint: "myMint" }}
        />
      </CardContent>
    </Card>
  );
}
