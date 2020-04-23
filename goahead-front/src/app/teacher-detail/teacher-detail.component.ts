import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {Course, Teacher, University} from '../models';
>>>>>>> 7355cf3f8a654514c4825f0c2f70f0dd8ea9f750
import {BasicService} from '../basic.service';
import {ActivatedRoute} from '@angular/router';
import {Teacher} from "../models";
@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
<<<<<<< HEAD
  teacher:Teacher;
  teacherId:string;

  constructor(private basicService: BasicService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.teacherId = params.get('teacherId');
    });
   }

  ngOnInit(): void {
    this.getTeacheryById(this.teacherId);
  }
  getTeacheryById(id: string) {
    this.basicService.getTeacherById(id)
      .subscribe(teacher => {
        this.teacher = teacher;
      });
  }
=======
    teacher: Teacher;
    teachersUniversities: University[]=[];
    constructor(private basicService: BasicService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getTeacher();
        this.getUniversityByTeacher();
    }
    getTeacher() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.basicService.getTeacher(id).subscribe(teacher => this.teacher = teacher);
    }
    getUniversityByTeacher() {
        this.basicService.getUniversitiesByTeacher(this.teacher.id.toString()).subscribe(teachersUniversities => {
            this.teachersUniversities = teachersUniversities
        });
    }
>>>>>>> 7355cf3f8a654514c4825f0c2f70f0dd8ea9f750
}