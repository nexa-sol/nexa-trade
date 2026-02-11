import { Token } from "@/modules/tokens/types";
import { CopyIcon } from "lucide-react";

export default function TokenCard({ token }: { token: Token }) {
  return (
    <div className="flex gap-4">
      <div className="h-full overflow-hidden min-w-0">
        <img
          src={token.logoURI}
          alt="Token"
          className="w-16 h-16 bg-amber-50 rounded-lg"
        />
        <p className="mt-1 truncate text-xs text-muted-foreground"></p>
      </div>
      <div className="flex gap-1.5">
        <p className="font-semibold">{token.symbol}</p>
        <p className="text-muted-foreground flex gap-1 items-center h-max cursor-pointer hover:text-accent">
          {token.name} <CopyIcon className="w-4 h-4" />
        </p>
      </div>
    </div>
  );
}
