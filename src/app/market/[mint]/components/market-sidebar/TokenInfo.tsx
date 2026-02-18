import { cn } from "@/lib/utils";
import { Token, TokenLiveData } from "@/modules/tokens/types";
import {
  BoxesIcon,
  ChartCandlestick,
  ChefHatIcon,
  CrosshairIcon,
  FlameIcon,
  GhostIcon,
  LucideIcon,
  ShieldIcon,
  UsersIcon,
  UserStarIcon,
} from "lucide-react";

export default function TokenInfo() {
  const info: Token = {
    mint: "",
    symbol: "",
    name: "",
  };

  const liveData: TokenLiveData = {
    topHolder: 67,
    devHold: 20,
    snipersHold: 30,
    insidersHold: 10,
    bundleHold: 3,
  };

  return (
    <div className="px-3">
      <div></div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-3 border-b pb-4">
          <DataCard
            icon={UserStarIcon}
            label="Top 10 H"
            value={`${liveData.topHolder}%`}
            className="text-bearish"
          />
          <DataCard
            icon={ChefHatIcon}
            label="Top 10 H"
            value={`${liveData.topHolder}%`}
            className="text-bullish"
          />
          <DataCard
            icon={CrosshairIcon}
            label="Snipers H"
            value={`${liveData.topHolder}%`}
            className="text-bearish"
          />
          <DataCard
            icon={GhostIcon}
            label="Insiders"
            value={`${liveData.insidersHold}%`}
            className="text-bullish"
          />
          <DataCard
            icon={BoxesIcon}
            label="Bundlers"
            value={`${liveData.bundleHold}%`}
            className="text-bullish"
          />
          <DataCard
            icon={FlameIcon}
            label="LP Burned"
            value={`${100}%`}
            className="text-bullish"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <DataCard
            icon={UsersIcon}
            label="Holders"
            value={`56`}
            className="text-bearish"
          />
          <DataCard
            icon={ChartCandlestick}
            label="pro traders"
            value={`19`}
            className="text-bullish"
          />
          <DataCard
            icon={ShieldIcon}
            label="Dex paid"
            value={`Paid`}
            className="text-bullish"
          />
        </div>

        <div>CA and DA placeholder</div>
      </div>
    </div>
  );
}

function DataCard({
  label,
  value,
  className,
  icon: Icon,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  className: string;
}) {
  return (
    <div className="rounded-md border flex flex-col gap-1.5 justify-center pt-1 pb-2">
      <div
        className={cn(
          "flex items-center justify-center gap-1 text-xs",
          className,
        )}
      >
        <Icon className="h-3 w-3" />
        {value}
      </div>
      <div className="text-center text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
