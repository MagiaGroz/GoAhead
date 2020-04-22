import { Component, OnInit } from '@angular/core';
import {Course, Teacher} from '../models';
import {BasicService} from '../basic.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
  teachers: Teacher[]=[];
  courseId:string;

  constructor(private basicService: BasicService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTeachersByCourse(this.courseId);
  }
  
  getTeachersByCourse(id:string){
    this.basicService.getTeachersByCourse(id).subscribe(teachers =>{
      this.teachers=teachers;
    })
  }
}