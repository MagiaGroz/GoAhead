import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Course, Login,Teacher, University, Review} from "./models";


@Injectable({
  providedIn: 'root'
})
export class BasicService {
  public isLoggedIn = false;
  public isSuperUser = false;
  BASE_URL = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  getCourseList(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.BASE_URL}/api/courses/`);
  }
  
  getTeacherList(): Observable<Teacher[]> {
      return this.http.get<Teacher[]>(`${this.BASE_URL}/api/teachers/`);
  }

  getUniversityList(): Observable<University[]> {
      return this.http.get<University[]>(`${this.BASE_URL}/api/universities/`);
  }

  getCourse(id): Observable<Course> {
    return this.http.get<Course>(`${this.BASE_URL}/api/courses/${id}/`);
  }

  getTeacher(id): Observable<Teacher> {
      return this.http.get<Teacher>(`${this.BASE_URL}/api/teachers/${id}/`);
  }
  
  getUniversity(id): Observable<University> {
    return this.http.get<University>(`${this.BASE_URL}/api/universities/${id}/`);
  }
    
  getTeachersByCourse(pk: string): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.BASE_URL}/api/courses/${pk}/teachers`);
  }
    
  getUniversitiesByTeacher(id): Observable<University[]>  {
      return this.http.get<University[]>(`${this.BASE_URL}/api/teachers/${id}/university`);
  }

  getReviewsByTeacher(id): Observable<Review[]> {
      return this.http.get<Review[]>(`${this.BASE_URL}/api/teachers/${id}/reviews`);
  }

  getPositiveReviewsByTeacher(id): Observable<Review[]> {
      return this.http.get<Review[]>(`${this.BASE_URL}/api/teachers/${id}/reviews/positive`);
  }

  getNegativeReviewsByTeacher(id): Observable<Review[]> {
      return this.http.get<Review[]>(`${this.BASE_URL}/api/teachers/${id}/reviews/negative`);
  }



  deleteCourse(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/courses/${id}/`);
  }



  login(username, password): Observable<Login> {
    return this.http.post<Login>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }
  logout() {
      alert("Logged out")
  }
  createUser(){
      alert('signed up')
  }
 


  


 

}
