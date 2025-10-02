import { Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';

export function Filters() {
  return (
    <Card className="p-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Select defaultValue="all-campaigns">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select campaign" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-campaigns">All Campaigns</SelectItem>
            <SelectItem value="active">Active Only</SelectItem>
            <SelectItem value="paused">Paused Only</SelectItem>
            <SelectItem value="completed">Completed Only</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-regions">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-regions">All Regions</SelectItem>
            <SelectItem value="metro-manila">Metro Manila</SelectItem>
            <SelectItem value="cebu">Cebu</SelectItem>
            <SelectItem value="davao">Davao</SelectItem>
            <SelectItem value="iloilo">Iloilo</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all-languages">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-languages">All Languages</SelectItem>
            <SelectItem value="tagalog">Tagalog</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="cebuano">Cebuano</SelectItem>
            <SelectItem value="hiligaynon">Hiligaynon</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" className="gap-2 ml-auto">
          <Filter className="w-4 h-4" />
          More Filters
        </Button>
      </div>
    </Card>
  );
}
