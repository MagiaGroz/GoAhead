import { Component, OnInit } from '@angular/core';
import {BasicService} from '../basic.service';
import {ActivatedRoute} from '@angular/router';
import {Teacher} from "../models";
@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
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
}