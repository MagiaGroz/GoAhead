import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: CoursesListComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'courses',
                component: CoursesListComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
