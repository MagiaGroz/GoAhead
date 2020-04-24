import { Component, OnInit, Input } from '@angular/core';
import { BasicService } from '../basic.service';
import { Teacher } from '../models';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input()
  teacher:Teacher;
  constructor(private basicService: BasicService) { }

  ngOnInit(): void {
  }
  setTeacherForDetailedView(){
      this.basicService.setTeacherForDetailedView(this.teacher);
  }
}
