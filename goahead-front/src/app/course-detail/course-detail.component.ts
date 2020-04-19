import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicService } from '../basic.service';
import {Course} from "../models";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course:Course;

  constructor(private basicService:BasicService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCourse();
  }
  getCourse() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.basicService.getCourse(id).subscribe(course => this.course = course);
  }


}
