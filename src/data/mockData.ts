export interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  reach: number;
  completions: number;
  completionRate: number;
  avgDuration: number;
  cpcpl: number;
  spend: number;
  budget: number;
  region: string;
  language: string;
  startDate: string;
  endDate: string;
}

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Health Awareness',
    status: 'active',
    reach: 125430,
    completions: 98234,
    completionRate: 78.3,
    avgDuration: 42,
    cpcpl: 0.25,
    spend: 24558.50,
    budget: 30000,
    region: 'Metro Manila',
    language: 'Tagalog',
    startDate: '2025-09-01',
    endDate: '2025-10-31',
  },
  {
    id: '2',
    name: 'Financial Literacy Campaign',
    status: 'active',
    reach: 87650,
    completions: 71234,
    completionRate: 81.2,
    avgDuration: 38,
    cpcpl: 0.22,
    spend: 15671.48,
    budget: 20000,
    region: 'Cebu',
    language: 'Cebuano',
    startDate: '2025-09-15',
    endDate: '2025-11-15',
  },
  {
    id: '3',
    name: 'Election Awareness Drive',
    status: 'active',
    reach: 234500,
    completions: 187600,
    completionRate: 80.0,
    avgDuration: 45,
    cpcpl: 0.18,
    spend: 33768.00,
    budget: 50000,
    region: 'National',
    language: 'English',
    startDate: '2025-08-01',
    endDate: '2025-10-30',
  },
  {
    id: '4',
    name: 'COVID Booster Reminder',
    status: 'completed',
    reach: 156780,
    completions: 109346,
    completionRate: 69.7,
    avgDuration: 35,
    cpcpl: 0.30,
    spend: 32803.80,
    budget: 35000,
    region: 'Davao',
    language: 'Tagalog',
    startDate: '2025-07-01',
    endDate: '2025-09-30',
  },
  {
    id: '5',
    name: 'Youth Sports Program',
    status: 'paused',
    reach: 45230,
    completions: 32456,
    completionRate: 71.8,
    avgDuration: 40,
    cpcpl: 0.28,
    spend: 9087.68,
    budget: 15000,
    region: 'Iloilo',
    language: 'Hiligaynon',
    startDate: '2025-09-10',
    endDate: '2025-12-10',
  },
];

export const timeSeriesData = [
  { date: 'Sep 1', listens: 12500, views: 8300, spend: 2200 },
  { date: 'Sep 5', listens: 18200, views: 11400, spend: 3100 },
  { date: 'Sep 10', listens: 23400, views: 15600, spend: 4200 },
  { date: 'Sep 15', listens: 28900, views: 19200, spend: 5400 },
  { date: 'Sep 20', listens: 34200, views: 22800, spend: 6700 },
  { date: 'Sep 25', listens: 39800, views: 26500, spend: 7900 },
  { date: 'Sep 30', listens: 45100, views: 30100, spend: 9200 },
  { date: 'Oct 1', listens: 48300, views: 32200, spend: 9800 },
];

export const budgetData = [
  { name: 'Summer Health', spent: 24558, budget: 30000, remaining: 5442 },
  { name: 'Financial Literacy', spent: 15671, budget: 20000, remaining: 4329 },
  { name: 'Election Awareness', spent: 33768, budget: 50000, remaining: 16232 },
  { name: 'COVID Booster', spent: 32804, budget: 35000, remaining: 2196 },
  { name: 'Youth Sports', spent: 9088, budget: 15000, remaining: 5912 },
];

export const funnelData = [
  { stage: 'Started', value: 450000, percentage: 100 },
  { stage: 'Midpoint', value: 342000, percentage: 76 },
  { stage: 'Completed', value: 298500, percentage: 66.3 },
];

export const languageData = [
  { name: 'Tagalog', value: 45, count: 225000 },
  { name: 'English', value: 30, count: 150000 },
  { name: 'Cebuano', value: 15, count: 75000 },
  { name: 'Hiligaynon', value: 7, count: 35000 },
  { name: 'Others', value: 3, count: 15000 },
];

export const regionData = [
  { name: 'Metro Manila', value: 35, reach: 175000 },
  { name: 'Cebu', value: 20, reach: 100000 },
  { name: 'Davao', value: 18, reach: 90000 },
  { name: 'Iloilo', value: 12, reach: 60000 },
  { name: 'Others', value: 15, reach: 75000 },
];

export const kpiData = {
  totalReach: {
    value: 649590,
    change: 12.5,
    trend: 'up' as const,
  },
  completedListens: {
    value: 498870,
    change: 8.3,
    trend: 'up' as const,
  },
  completionRate: {
    value: 76.8,
    change: -2.1,
    trend: 'down' as const,
  },
  totalSpend: {
    value: 115889.46,
    budget: 165000,
    change: 5.2,
    trend: 'up' as const,
  },
  avgCPCPL: {
    value: 0.23,
    change: -3.5,
    trend: 'down' as const,
  },
};
