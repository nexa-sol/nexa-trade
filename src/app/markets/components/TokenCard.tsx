import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MinimalTooltip from "@/components/utils/MinimalTooltip";
import { humanizeNumber } from "@/lib/renderUtils";
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
  UserIcon,
  UsersIcon,
  UserStarIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TokenCard({ token }: { token: Token }) {
  const live: TokenLiveData = {
    topHolder: 23,
    devHold: 10,
    snipersHold: 4,
    insidersHold: 2,
    bundleHold: 3,
  };

  const router = useRouter();

  return (
    <div
      className="flex gap-4 cursor-pointer"
      onClick={(e) => {
        if (e.ctrlKey || e.metaKey) {
          window.open(`/token/${token.mint}`, "_blank", "noopener,noreferrer");
        } else {
          router.push(`/token/${token.mint}`);
        }
      }}
      onContextMenu={() =>
        window.open(`/token/${token.mint}`, "_blank", "noopener,noreferrer")
      }
    >
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
      <div className="flex flex-col gap-1">
        <div className="flex gap-1.5">
          <p className="font-semibold">{token.symbol}</p>
          <p
            className="text-muted-foreground flex gap-1 items-center h-max cursor-pointer hover:text-accent"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigator.clipboard.writeText(token.mint);
            }}
          >
            {token.name} <CopyIcon className="w-4 h-4" />
          </p>
        </div>
        <div className="items-center flex gap-3">
          <p className="text-green-500 text-sm">20m</p>
          <MinimalTooltip label="Holders">
            <p className="text-sm flex gap-1 items-center">
              <UsersIcon className="w-3.5 h-3.5 text-muted-foreground" />
              10
            </p>
          </MinimalTooltip>
          <MinimalTooltip label="Live NEXA viewers">
            <p className="text-sm flex gap-1 items-center">
              <EyeIcon className="w-3.5 h-3.5" />
              10
            </p>
          </MinimalTooltip>
        </div>
        <div className="flex gap-1.5 items-center text-xs text-[#5DBCFF]">
          {token.twitterPost ? (
            <>
              <MinimalTooltip label="Twitter author">
                <Link
                  className="hover:underline"
                  target="_blank"
                  href={`https://x.com/${token.twitterPost.author?.username}`}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  by @{token.twitterPost.author?.username}
                </Link>
              </MinimalTooltip>
              <MinimalTooltip label="Followers">
                <p className="flex gap-0.5 items-center">
                  <UserIcon className="w-3 h-3" />
                  {humanizeNumber(token.twitterPost.author?.followers)}
                </p>
              </MinimalTooltip>
            </>
          ) : (
            <span className="invisible">by @username</span>
          )}
        </div>
        <div className="items-center flex gap-2">
          <MinimalTooltip independent label="Top 10 holders">
            <TokenBadge value={live.topHolder} icon={UserStarIcon} />
          </MinimalTooltip>

          <MinimalTooltip independent label="Developer holdings">
            <TokenBadge value={live.devHold} icon={ChefHatIcon} />
          </MinimalTooltip>

          <MinimalTooltip independent label="Snipers">
            <TokenBadge value={live.snipersHold} icon={CrosshairIcon} />
          </MinimalTooltip>

          <MinimalTooltip independent label="Insiders">
            <TokenBadge value={live.insidersHold} icon={GhostIcon} />
          </MinimalTooltip>

          <MinimalTooltip independent label="Bundlers">
            <TokenBadge value={live.bundleHold} icon={BoxesIcon} />
          </MinimalTooltip>
        </div>
      </div>
      <div className="ml-auto flex flex-col">
        <MinimalTooltip label="Market Cap">
          <TokenDigit name="MC" value="$15.6k" />
        </MinimalTooltip>

        <MinimalTooltip label="Volume">
          <TokenDigit name="V" value="$42k" />
        </MinimalTooltip>

        <Button
          className="mt-auto ml-auto p-1! h-max w-max rounded-full bg-primary/20 text-primary hover:text-black gap-1 text-xs"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <ZapIcon />1 SOL
        </Button>
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

function TokenDigit({ name, value }: { name: string; value: string }) {
  return (
    <div className="ml-auto flex gap-1 items-baseline">
      <p className="text-muted-foreground text-xs">{name}</p>
      <p>{value}</p>
    </div>
  );
}
