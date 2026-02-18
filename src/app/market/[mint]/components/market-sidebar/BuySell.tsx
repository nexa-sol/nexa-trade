import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function BuySell() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Tabs defaultValue="buy" className="px-3 border-b">
      <div className="flex items-center justify-between border-b bg-transparent">
        <TabsList className="h-14! p-0 px-2 bg-transparent border-none flex-1">
          <TabsTrigger
            value="buy"
            className="h-9 bg-transparent data-[state=active]:bg-bullish data-[state=active]:text-accent-foreground"
          >
            Buy
          </TabsTrigger>
          <TabsTrigger
            value="sell"
            className="ml-0.5 h-9 bg-transparent data-[state=active]:bg-bearish data-[state=active]:text-accent-foreground"
          >
            Sell
          </TabsTrigger>
        </TabsList>

        {/* The Toggle Button */}
        <Button
          variant="outline"
          size="xs"
          className="h-6 w-6 p-0 rounded-full"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Conditional Rendering or Height Hiding */}
      {!isCollapsed && (
        <>
          <TabsContent value="buy">
            <div className="h-72">buy placeholder</div>
          </TabsContent>
          <TabsContent value="sell">
            <div className="h-72">sell placeholder</div>
          </TabsContent>
        </>
      )}
    </Tabs>
  );
}
