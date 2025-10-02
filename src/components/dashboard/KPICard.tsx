import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down';
  subtitle?: string;
  icon?: React.ReactNode;
}

export function KPICard({ title, value, change, trend, subtitle, icon }: KPICardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-3xl font-bold text-foreground">{value}</h3>
              {change !== undefined && (
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    trend === 'up' ? 'text-success' : 'text-destructive'
                  }`}
                >
                  {trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{Math.abs(change)}%</span>
                </div>
              )}
            </div>
            {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
          </div>
          {icon && (
            <div className="p-3 bg-primary/10 rounded-lg text-primary">{icon}</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
