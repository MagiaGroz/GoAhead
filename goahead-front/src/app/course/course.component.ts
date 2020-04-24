import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../models';
import { BasicService } from '../basic.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input()
  course: Course;
  constructor(private basicService: BasicService) { }

  ngOnInit(): void {
  }

  setCourseForDetailedView(){
      this.basicService.setCourseForDetailedView(this.course);
  }

}
