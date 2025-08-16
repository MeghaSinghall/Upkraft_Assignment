import { Sidebar } from "@/components/Sidebar";
import { ProfileCard } from "@/components/ProfileCard";
import { MetricCard } from "@/components/MetricCard";
import { UpcomingLessons } from "@/components/UpcomingLessons";
import { PerformanceChart } from "@/components/PerformanceChart";
import { FeedbackPending } from "@/components/FeedbackPending";
import { ReferEarn } from "@/components/ReferEarn";
import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-64 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input 
              placeholder="Search Here" 
              className="pl-10 bg-muted border-metric-border"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Bell size={20} />
            </Button>
            <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <User size={20} />
              <span className="text-sm font-medium">Sherry Wolf</span>
              <span className="text-xs text-muted-foreground">Tutor</span>
            </Button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-8 space-y-6">
            {/* Profile and Metrics Row */}
            <div className="flex flex-row gap-2">
              <div className="col-span-1">
                <ProfileCard />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <MetricCard 
                  title="Total Active Students"
                  value="30"
                  subtitle="Total Active Students"
                />
                <MetricCard 
                  title="Total Active Students"
                  value="30"
                  subtitle="Total Active Students"
                />
                <MetricCard 
                  title="Tutor CSAT Score"
                  value="80%"
                  subtitle="Tutor CSAT Score"
                />
              </div>
            </div>

            {/* Lessons Table */}
            <UpcomingLessons />
          </div>

          {/* Right Column */}
          <div className="col-span-4 space-y-6">
            <ReferEarn />
            
            <div className="grid grid-cols-1 gap-4">
              <PerformanceChart 
                title="Overall Course Performance"
                score={7.6}
                subtitle="Overall Course Performance"
              />
              <PerformanceChart 
                title="Overall Student Performance"
                score={6.6}
                subtitle="Overall Student Performance"
              />
              <FeedbackPending />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}