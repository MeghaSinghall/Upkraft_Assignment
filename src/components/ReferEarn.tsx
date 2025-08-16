import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ReferEarn() {
  return (
    <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Refer and Earn</h3>
          <p className="text-sm text-primary-foreground/90 mb-4 max-w-48">
            Invite friends and earn reward points on every successful referral
          </p>
          <Button 
            variant="secondary" 
            size="sm" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Refer Now →
          </Button>
        </div>
        
        <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
        </div>
      </div>
    </Card>
  );
}