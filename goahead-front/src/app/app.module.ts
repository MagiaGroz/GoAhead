import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ReviewComponent } from './review/review.component';
<<<<<<< HEAD
import { UniversityListComponent } from './university-list/university-list.component';
=======
import { FormsModule } from '@angular/forms';
import { UniversitiesListComponent } from './universities-list/universities-list.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
>>>>>>> 7355cf3f8a654514c4825f0c2f70f0dd8ea9f750

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailComponent,
    CoursesListComponent,
    TeacherDetailComponent,
    TeachersListComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    RegistrationComponent,
    MyCoursesComponent,
    ReviewComponent,
<<<<<<< HEAD
    UniversityListComponent
=======
    UniversitiesListComponent,
    UniversityDetailComponent
>>>>>>> 7355cf3f8a654514c4825f0c2f70f0dd8ea9f750
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
