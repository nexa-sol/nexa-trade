import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MarketSidebar() {
  return (
    <div className="h-full w-sm px-3 flex flex-col">
      <div className="flex h-16"></div>
      <Tabs defaultValue="buy">
        <TabsList className="w-full">
          <TabsTrigger
            value="buy"
            className="bg-bullish/30 data-[state=active]:bg-bullish data-[state=active]:text-accent-foreground"
          >
            Buy
          </TabsTrigger>
          <TabsTrigger
            value="sell"
            className="bg-bearish/30 data-[state=active]:bg-bearish data-[state=active]:text-accent-foreground"
          >
            Sell
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
