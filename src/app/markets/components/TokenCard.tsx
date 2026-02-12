import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
      className="
        flex flex-col gap-3 cursor-pointer
        md:flex-row md:gap-4
      "
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
      {/* Left: logo */}
      <div className="flex gap-3 md:gap-4 min-w-0">
        <div className="h-full overflow-hidden">
          {token.logoURI ? (
            <img
              src={token.logoURI}
              alt="Token"
              className="w-14 h-14 md:w-16 md:h-16 rounded-lg"
            />
          ) : (
            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/20 rounded-lg flex items-center justify-center">
              <CoinsIcon className="text-primary" />
            </div>
          )}
        </div>

        {/* Main content */}
        <div className="flex flex-col gap-1 min-w-0">
          {/* Symbol + name */}
          <div className="flex gap-1.5 items-center flex-wrap">
            <p className="font-semibold">{token.symbol}</p>
            <p
              className="text-muted-foreground flex gap-1 items-center cursor-pointer hover:text-accent truncate"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigator.clipboard.writeText(token.mint);
              }}
            >
              {token.name}
              <CopyIcon className="w-4 h-4 shrink-0" />
            </p>
          </div>

          {/* Stats */}
          <div className="items-center flex gap-3 flex-wrap text-xs md:text-sm">
            <p className="text-green-500">20m</p>

            <MinimalTooltip label="Holders">
              <p className="flex gap-1 items-center">
                <UsersIcon className="w-3.5 h-3.5 text-muted-foreground" />
                10
              </p>
            </MinimalTooltip>

            <MinimalTooltip label="Live NEXA viewers">
              <p className="flex gap-1 items-center">
                <EyeIcon className="w-3.5 h-3.5" />
                10
              </p>
            </MinimalTooltip>
          </div>

          {/* Twitter */}
          <div className="flex gap-2 items-center text-xs text-[#5DBCFF] flex-wrap">
            {token.twitterPost ? (
              <>
                <Link
                  className="hover:underline"
                  target="_blank"
                  href={`https://x.com/${token.twitterPost.author?.username}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  by @{token.twitterPost.author?.username}
                </Link>

                <p className="flex gap-0.5 items-center">
                  <UserIcon className="w-3 h-3" />
                  {humanizeNumber(token.twitterPost.author?.followers)}
                </p>
              </>
            ) : (
              <span className="invisible">by @username</span>
            )}
          </div>

          {/* Badges */}
          <div className="flex gap-1.5 items-center flex-wrap">
            <MinimalTooltip independent label="Top 10 Holders">
              <TokenBadge value={live.topHolder} icon={UserStarIcon} />
            </MinimalTooltip>

            <MinimalTooltip independent label="Dev Holdings">
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
      </div>

      {/* Right column */}
      <div
        className="
          flex flex-row justify-between items-center gap-3
          md:ml-auto md:flex-col md:items-end
        "
      >
        <div className="flex gap-4 md:flex-col md:gap-1">
          <TokenDigit name="MC" value="$15.6k" />
          <TokenDigit name="V" value="$42k" />
        </div>

        <Button
          className="
            ml-auto rounded-full bg-primary/20 text-primary gap-1 text-xs
            py-1.5! h-max md:rounded-full hover:text-accent-foreground
          "
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <ZapIcon className="w-4 h-4" />1 SOL
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
