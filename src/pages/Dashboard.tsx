import { Sidebar } from '@/components/dashboard/Sidebar';
import { TopNav } from '@/components/dashboard/TopNav';
import { KPICard } from '@/components/dashboard/KPICard';
import { EngagementChart } from '@/components/dashboard/EngagementChart';
import { BudgetChart } from '@/components/dashboard/BudgetChart';
import { FunnelChart } from '@/components/dashboard/FunnelChart';
import { LanguageChart } from '@/components/dashboard/LanguageChart';
import { RegionChart } from '@/components/dashboard/RegionChart';
import { CampaignTable } from '@/components/dashboard/CampaignTable';
import { Filters } from '@/components/dashboard/Filters';
import { kpiData } from '@/data/mockData';
import { Users, Headphones, Percent, DollarSign, TrendingDown } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
            <p className="text-muted-foreground">
              Track your campaign performance, engagement, and spending
            </p>
          </div>

          <Filters />

          {/* KPI Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <KPICard
              title="Total Reach"
              value={kpiData.totalReach.value.toLocaleString()}
              change={kpiData.totalReach.change}
              trend={kpiData.totalReach.trend}
              icon={<Users className="w-5 h-5" />}
            />
            <KPICard
              title="Completed Listens"
              value={kpiData.completedListens.value.toLocaleString()}
              change={kpiData.completedListens.change}
              trend={kpiData.completedListens.trend}
              icon={<Headphones className="w-5 h-5" />}
            />
            <KPICard
              title="Completion Rate"
              value={`${kpiData.completionRate.value}%`}
              change={kpiData.completionRate.change}
              trend={kpiData.completionRate.trend}
              icon={<Percent className="w-5 h-5" />}
            />
            <KPICard
              title="Total Spend"
              value={`$${kpiData.totalSpend.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
              subtitle={`of $${kpiData.totalSpend.budget.toLocaleString()} budget`}
              change={kpiData.totalSpend.change}
              trend={kpiData.totalSpend.trend}
              icon={<DollarSign className="w-5 h-5" />}
            />
            <KPICard
              title="Avg CPCPL"
              value={`$${kpiData.avgCPCPL.value.toFixed(2)}`}
              change={kpiData.avgCPCPL.change}
              trend={kpiData.avgCPCPL.trend}
              subtitle="Cost per completed listen"
              icon={<TrendingDown className="w-5 h-5" />}
            />
          </div>

          {/* Charts Row 1 */}
          <div className="grid gap-4 lg:grid-cols-2">
            <EngagementChart />
            <BudgetChart />
          </div>

          {/* Charts Row 2 */}
          <div className="grid gap-4 lg:grid-cols-3">
            <FunnelChart />
            <LanguageChart />
            <RegionChart />
          </div>

          {/* Campaign Table */}
          <CampaignTable />
        </main>
      </div>
    </div>
  );
}
