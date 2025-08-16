import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface PerformanceChartProps {
  title: string;
  score: number;
  subtitle: string;
}

export function PerformanceChart({ title, score, subtitle }: PerformanceChartProps) {
  const data = [
    { value: score },
    { value: 10 - score }
  ];

  const getColor = (score: number) => {
    if (score >= 7) return "hsl(var(--chart-secondary))";
    if (score >= 5) return "hsl(var(--warning))";
    return "hsl(var(--chart-tertiary))";
  };

  return (
    <Card className="p-6 bg-metric-bg border-metric-border">
      <h3 className="text-sm font-medium text-card-foreground mb-4">{title}</h3>
      
      <div className="relative h-32 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              startAngle={90}
              endAngle={450}
              dataKey="value"
            >
              <Cell fill={getColor(score)} />
              <Cell fill="hsl(var(--muted))" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Score in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-card-foreground">{score.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">/10</div>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground text-center">{subtitle}</p>
    </Card>
  );
}