import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Course, Login,Teacher} from "./models";

@Injectable({
  providedIn: 'root'
})
export class BasicService {
  BASE_URL = 'http://localhost:8000'

  constructor(private http: HttpClient) { }
  getCourseList(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.BASE_URL}/api/courses/`);
  }

  getCourse(id): Observable<Course> {
    return this.http.get<Course>(`${this.BASE_URL}/api/courses/${id}/`);
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
 
  getTeachersByCourse(pk: string): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.BASE_URL}/api/courses/${pk}/teachers`);
  }
  getTeacherById(pk: string): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.BASE_URL}/api/teachers/${pk}`);
  }
  

}
