import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Megaphone,
  Users,
  FileText,
  Wallet,
  FileBarChart,
  Bell,
  Settings,
} from 'lucide-react';

const navItems = [
  { name: 'Overview', icon: LayoutDashboard, path: '/' },
  { name: 'Campaigns', icon: Megaphone, path: '/campaigns' },
  { name: 'Audience', icon: Users, path: '/audience' },
  { name: 'Content Performance', icon: FileText, path: '/content' },
  { name: 'Spend & Billing', icon: Wallet, path: '/billing' },
  { name: 'Reports', icon: FileBarChart, path: '/reports' },
  { name: 'Alerts', icon: Bell, path: '/alerts' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex-shrink-0">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Megaphone className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">VoiceReach</h1>
            <p className="text-xs text-sidebar-foreground/60">Analytics</p>
          </div>
        </div>
      </div>

      <nav className="px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive
                  ? 'bg-sidebar-accent text-sidebar-primary font-medium'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
              }`
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
