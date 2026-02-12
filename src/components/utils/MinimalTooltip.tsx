import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function MinimalTooltip({
  children,
  label,
  independent = false,
}: {
  children: React.ReactNode;
  label: React.ReactNode;
  independent?: boolean;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild={!independent}>{children}</TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
