import { Component, OnInit } from '@angular/core';
import {Course, Teacher, University, Review} from '../models';
import {BasicService} from '../basic.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {
    teacher: Teacher;
    teachersUniversities: University[]=[];
    reviews: Review[]=[];
    positiveReviews: Review[]=[];
    negativeReviews: Review[]=[];
    isNegative: boolean = false;
    isPositive: boolean = false;
    isDefault: boolean = true;
    constructor(private basicService: BasicService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getTeacher();
        this.getUniversityByTeacher();
        this.getReviews();
        this.getPositiveReviews();
        this.getNegativeReviews();
    }

    onDefault(){
        this.isDefault = true;
        this.isNegative = false;
        this.isPositive = false;
    }

    onPositive(){
        this.isDefault = false;
        this.isNegative = false;
        this.isPositive = true;
    }

    onNegative(){
        this.isDefault = false;
        this.isNegative = true;
        this.isPositive = false;
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
    getReviews(){
        this.basicService.getReviewsByTeacher(this.teacher.id.toString()).subscribe(reviews=>{this.reviews = reviews});
    }
    getPositiveReviews(){
        this.basicService.getPositiveReviewsByTeacher(this.teacher.id.toString()).subscribe(positiveReviews =>{
            this.positiveReviews = positiveReviews
        });
    }
    getNegativeReviews() {
        this.basicService.getNegativeReviewsByTeacher(this.teacher.id.toString()).subscribe(negativeReviews => {
            this.negativeReviews = negativeReviews
        });
    }
}