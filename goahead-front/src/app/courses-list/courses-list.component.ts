import { Component, OnInit } from '@angular/core';
import {BasicService} from "../basic.service";
import {Course} from "../models";
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses: Course[]=[];

  constructor(public basicService:BasicService) { }

  ngOnInit(): void {
    this.getCourseList();
  }
  getCourseList(){
    this.basicService.getCourseList().subscribe(courses =>{
      this.courses=courses
    });
  }

  deleteCourse(id) {
    this.basicService.deleteCourse(id).subscribe(res => {
       this.courses = this.courses.filter(c => c.id != id);
       this.getCourseList();
    });
}
}