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
    teacher: Teacher;

    constructor(private basicService: BasicService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getTeacher();
    }
    getTeacher() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.basicService.getTeacher(id).subscribe(teacher => this.teacher = teacher);
    }
}