import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar,
  ClipboardList,
  Music,
  Headphones,
  CreditCard,
  Gift,
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Users, label: "My Students" },
  { icon: BookOpen, label: "My Courses" },
  { icon: Calendar, label: "Calendar" },
  { icon: ClipboardList, label: "Assignment" },
  { icon: Music, label: "Music Library" },
  { icon: Headphones, label: "Practice Studio" },
  { icon: CreditCard, label: "Payment Summary" },
  { icon: Gift, label: "Refer & Earn" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-sidebar-bg text-sidebar-text p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">UPKRAFT</h1>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navigationItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
              item.active 
                ? "bg-sidebar-active" 
                : "hover:bg-sidebar-hover"
            )}
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      
      {/* Logout */}
      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-hover transition-colors">
        <LogOut size={20} />
        <span className="text-sm font-medium">Logout</span>
      </button>
    </div>
  );
}