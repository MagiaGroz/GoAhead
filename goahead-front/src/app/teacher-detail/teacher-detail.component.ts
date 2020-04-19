import { Component, OnInit } from '@angular/core';
import {Course, Teacher} from '../models';
import {BasicService} from '../basic.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
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