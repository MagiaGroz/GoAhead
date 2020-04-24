import { Component, OnInit } from '@angular/core';
import {University,Teacher} from '../models';
import { BasicService } from '../basic.service';
@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {

    universities: University[] = [];

    constructor(private basicService: BasicService) { }

    ngOnInit(): void {
        this.getUniversityList()
    }

    getUniversityList() {
        this.basicService.getUniversityList().subscribe(universities => { this.universities = universities });
    }

}
