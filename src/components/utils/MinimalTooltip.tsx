import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function MinimalTooltip({
  children,
  label,
  independent = false,
  bottom = false,
}: {
  children: React.ReactNode;
  label: React.ReactNode;
  independent?: boolean;
  bottom?: boolean;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild={!independent}>
        <span className="inline-flex">{children}</span>
      </TooltipTrigger>
      <TooltipContent side={bottom ? "bottom" : "top"}>{label}</TooltipContent>
    </Tooltip>
  );
}
