import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MarketSidebar() {
  return (
    <div className="h-full w-sm flex flex-col gap-4">
      <div className="flex h-16 border-b px-3">placeholder</div>
      <Tabs defaultValue="buy" className="px-3 border-b">
        <TabsList className="w-full h-14! p-0 px-2 bg-transparent border">
          <TabsTrigger
            value="buy"
            className="h-9 bg-transparent data-[state=active]:bg-bullish data-[state=active]:text-accent-foreground"
          >
            Buy
          </TabsTrigger>
          <TabsTrigger
            value="sell"
            className="h-9 bg-transparent data-[state=active]:bg-bearish data-[state=active]:text-accent-foreground"
          >
            Sell
          </TabsTrigger>
        </TabsList>

        <TabsContent value="buy">
          <div className="h-72">buy placeholder</div>
        </TabsContent>
        <TabsContent value="sell" className="border-b">
          <div className="h-72">sell placeholder</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
