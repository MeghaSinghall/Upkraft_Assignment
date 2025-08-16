import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  className?: string;
}

export function MetricCard({ title, value, subtitle, className }: MetricCardProps) {
  return (
    <Card className={`p-4 w-full bg-metric-bg border-metric-border ${className || ""}`}>
      <h3 className="text-xl font-bold text-card-foreground ">{value}</h3>
      <p className="text-sm font-medium text-card-foreground">{title}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </Card>
  );
}