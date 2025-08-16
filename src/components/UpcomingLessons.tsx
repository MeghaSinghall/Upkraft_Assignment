import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const lessons = [
  { date: "21 July", time: "2:00 - 3:00 Pm", course: "Introduction to Piano", student: "Eunice Robot & Arnold Hayes" },
  { date: "22 July", time: "4:00 - 5:00 Pm", course: "Finger Warmups", student: "Eunice Robot & Arnold Hayes" },
  { date: "23 July", time: "3:00 - 4:00 Pm", course: "Simple Chords", student: "Eunice Robot & Arnold Hayes" },
  { date: "24 July", time: "5:00 - 6:00 Pm", course: "Rhythm Basics", student: "Eunice Robot & Arnold Hayes" },
  { date: "25 July", time: "2:00 - 3:00 Pm", course: "Simple Melodies", student: "Eunice Robot & Arnold Hayes" },
  { date: "26 July", time: "7:00 - 8:00 Pm", course: "Treble & Bass Clef", student: "Eunice Robot & Arnold Hayes" },
  { date: "24 July", time: "5:00 - 6:00 Pm", course: "Rhythm Basics", student: "Eunice Robot & Arnold Hayes" },
  { date: "22 July", time: "4:00 - 5:00 Pm", course: "Finger Warmups", student: "Eunice Robot & Arnold Hayes" },
];

export function UpcomingLessons() {
  return (
    <Card className="p-6 bg-card border-metric-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Upcoming Lessons</h3>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
          View All
        </Button>
      </div>
      
      <div className="space-y-1">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 pb-3 border-b border-metric-border">
          <span className="text-sm font-medium text-muted-foreground">Date</span>
          <span className="text-sm font-medium text-muted-foreground">Time</span>
          <span className="text-sm font-medium text-muted-foreground">Course</span>
          <span className="text-sm font-medium text-muted-foreground">Student Name</span>
        </div>
        
        {/* Lessons */}
        <div className="space-y-3 pt-3">
          {lessons.map((lesson, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 py-2 hover:bg-muted rounded-lg px-2 -mx-2 transition-colors">
              <span className="text-sm text-card-foreground">{lesson.date}</span>
              <span className="text-sm text-card-foreground">{lesson.time}</span>
              <span className="text-sm text-card-foreground">{lesson.course}</span>
              <span className="text-sm text-card-foreground">{lesson.student}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}