import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Token, TokenLiveData } from "@/modules/tokens/types";
import {
  BoxesIcon,
  ChefHatIcon,
  CoinsIcon,
  CopyIcon,
  CrosshairIcon,
  EyeIcon,
  GhostIcon,
  IconNode,
  LucideIcon,
  UsersIcon,
  UserStarIcon,
} from "lucide-react";

export default function TokenCard({ token }: { token: Token }) {
  const live: TokenLiveData = {
    topHolder: 23,
    devHold: 10,
    snipersHold: 4,
    insidersHold: 2,
    bundleHold: 3,
  };

  return (
    <div className="flex gap-4">
      <div className="h-full overflow-hidden min-w-0">
        {token.logoURI ? (
          <img
            src={token.logoURI}
            alt="Token"
            className="w-16 h-16 rounded-lg"
          />
        ) : (
          <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
            <CoinsIcon className="text-primary" />
          </div>
        )}
        <p className="mt-1 truncate text-xs text-muted-foreground"></p>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-1.5">
          <p className="font-semibold">{token.symbol}</p>
          <p className="text-muted-foreground flex gap-1 items-center h-max cursor-pointer hover:text-accent">
            {token.name} <CopyIcon className="w-4 h-4" />
          </p>
        </div>
        <div className="items-center flex gap-3">
          <p className="text-green-500 text-sm">20m</p>
          <p className="text-sm flex gap-1 items-center">
            <UsersIcon className="w-3.5 h-3.5 text-muted-foreground" />
            10
          </p>
          <p className="text-sm flex gap-1 items-center">
            <EyeIcon className="w-3.5 h-3.5" />
            10
          </p>
        </div>
        <div className="items-center flex gap-2">
          <TokenBadge value={live.topHolder} icon={UserStarIcon} />
          <TokenBadge value={live.devHold} icon={ChefHatIcon} />
          <TokenBadge value={live.snipersHold} icon={CrosshairIcon} />
          <TokenBadge value={live.insidersHold} icon={GhostIcon} />
          <TokenBadge value={live.bundleHold} icon={BoxesIcon} />
        </div>
      </div>
    </div>
  );
}

function TokenBadge({
  value,
  icon: Icon,
  redWhen = 10,
}: {
  value: number;
  icon: LucideIcon;
  redWhen?: number;
}) {
  return (
    <Badge
      variant="ghost"
      className={cn(
        "bg-card",
        value > redWhen ? "text-red-400" : "text-green-500",
      )}
    >
      <Icon />
      {value}%
    </Badge>
  );
}
