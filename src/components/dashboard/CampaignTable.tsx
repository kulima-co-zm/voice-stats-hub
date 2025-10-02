import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Download } from 'lucide-react';
import { mockCampaigns, type Campaign } from '@/data/mockData';

type SortField = keyof Campaign;
type SortDirection = 'asc' | 'desc';

export function CampaignTable() {
  const [sortField, setSortField] = useState<SortField>('spend');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedCampaigns = [...mockCampaigns].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });

  const getStatusBadge = (status: Campaign['status']) => {
    const variants = {
      active: 'default',
      paused: 'secondary',
      completed: 'outline',
    } as const;

    return (
      <Badge variant={variants[status]} className="capitalize">
        {status}
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Top Campaigns</CardTitle>
            <CardDescription>Detailed performance metrics for all campaigns</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('reach')}
                    className="gap-1 hover:bg-transparent"
                  >
                    Reach
                    <ArrowUpDown className="w-3 h-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('completionRate')}
                    className="gap-1 hover:bg-transparent"
                  >
                    Completion %
                    <ArrowUpDown className="w-3 h-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">Avg Duration</TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('cpcpl')}
                    className="gap-1 hover:bg-transparent"
                  >
                    CPCPL
                    <ArrowUpDown className="w-3 h-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSort('spend')}
                    className="gap-1 hover:bg-transparent"
                  >
                    Spend
                    <ArrowUpDown className="w-3 h-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">Budget</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedCampaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">
                    <div>
                      <div>{campaign.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {campaign.region} • {campaign.language}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                  <TableCell className="text-right">{campaign.reach.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <span className={campaign.completionRate >= 75 ? 'text-success' : 'text-warning'}>
                      {campaign.completionRate}%
                    </span>
                  </TableCell>
                  <TableCell className="text-right">{campaign.avgDuration}s</TableCell>
                  <TableCell className="text-right">${campaign.cpcpl.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    ${campaign.spend.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-col items-end">
                      <span>${campaign.budget.toLocaleString()}</span>
                      <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden mt-1">
                        <div
                          className={`h-full ${
                            (campaign.spend / campaign.budget) * 100 >= 90
                              ? 'bg-destructive'
                              : 'bg-success'
                          }`}
                          style={{ width: `${Math.min((campaign.spend / campaign.budget) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
