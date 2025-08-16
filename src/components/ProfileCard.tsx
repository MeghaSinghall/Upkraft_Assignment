import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Clock } from "lucide-react";

export function ProfileCard() {
  return (
    <Card className="p-6 bg-card border-metric-border h-full">
      <div className="flex items-start gap-4">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <img 
              src="/lovable-uploads/869e7196-837f-4d03-ba8b-b18031ffea6d.png" 
              alt="Sherry Wolf"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">+</span>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-card-foreground">Sherry Wolf</h3>
          <p className="text-muted-foreground text-sm mb-4">Piano Tutor</p>
          
          {/* Stats */}
          <div className="flex gap-4 flex-col">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-muted-foreground" />
              <span className="text-sm flex">
                <span className="font-medium text-card-foreground">Students</span>
                <Badge variant="secondary" className="ml-1">30</Badge>
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-muted-foreground" />
              <span className="text-sm">
                <span className="font-medium text-card-foreground">Course</span>
                <Badge variant="secondary" className="ml-1">6</Badge>
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-muted-foreground" />
              <span className="text-sm">
                <span className="font-medium text-card-foreground">Recent</span>
                <Badge variant="secondary" className="ml-1">3</Badge>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}