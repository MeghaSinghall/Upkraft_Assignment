import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function FeedbackPending() {
  const data = [
    { value: 12 },
    { value: 28 }
  ];

  return (
    <Card className="p-6 bg-metric-bg border-metric-border">
      <h3 className="text-sm font-medium text-card-foreground mb-4">Feedback Pending</h3>
      
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
              <Cell fill="hsl(var(--chart-tertiary))" />
              <Cell fill="hsl(var(--muted))" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Count in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-card-foreground">12</div>
            <div className="text-xs text-muted-foreground">Feedback Pending</div>
          </div>
        </div>
      </div>
      
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Give Feedback →
      </Button>
    </Card>
  );
}