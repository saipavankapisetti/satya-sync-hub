import { ChevronDown, BookOpen, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { mockCourses } from '@/data/courses';

const CoursesDropdown = () => {
  const navigate = useNavigate();

  // Show only first 4 courses in dropdown
  const featuredCourses = mockCourses.slice(0, 4);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-1">
          Courses
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <div className="p-2">
          <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Featured Courses</h3>
          {featuredCourses.map((course) => (
            <DropdownMenuItem
              key={course.id}
              onClick={() => navigate('/courses')}
              className="cursor-pointer p-3 flex-col items-start h-auto"
            >
              <div className="flex items-start gap-3 w-full">
                <BookOpen className="h-4 w-4 mt-1 text-primary" />
                <div className="flex-1">
                  <h4 className="font-medium text-sm line-clamp-1">{course.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {course.students}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-semibold text-primary">
                      ₹{course.price.toLocaleString()}
                    </span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => navigate('/courses')}
          className="cursor-pointer text-center justify-center text-primary font-medium"
        >
          View All Courses
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CoursesDropdown;