import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { funnelData } from '@/data/mockData';

export function FunnelChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement Funnel</CardTitle>
        <CardDescription>User journey from start to completion</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 py-4">
          {funnelData.map((stage, index) => (
            <div key={stage.stage} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{stage.stage}</span>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">{stage.value.toLocaleString()}</span>
                  <span className="font-semibold text-primary">{stage.percentage}%</span>
                </div>
              </div>
              <div className="relative h-12 bg-muted rounded-lg overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-chart-1 to-chart-2 flex items-center justify-center text-sm font-medium text-white transition-all duration-500"
                  style={{ width: `${stage.percentage}%` }}
                >
                  {stage.percentage > 20 && `${stage.percentage}%`}
                </div>
              </div>
              {index < funnelData.length - 1 && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground pl-2">
                  <span>↓ Drop-off: {(funnelData[index].percentage - funnelData[index + 1].percentage).toFixed(1)}%</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
