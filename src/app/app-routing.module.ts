import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './modules/app-common/services/guards/auth.guard';
import { studentGuard } from './modules/app-common/services/student/student.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'student',
    loadChildren: () => import('./modules/student/student.module').then(m=>m.StudentModule),
   // canActivate: [authGuard, studentGuard]
  },
  {
    path:'teacher',
    loadChildren:()=> import('./modules/teacher/teacher.module').then(m=>m.TeacherModule),
   // canActivate: [authGuard, studentGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
