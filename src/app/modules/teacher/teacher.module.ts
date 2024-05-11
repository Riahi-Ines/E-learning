import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ManageSubjectComponent } from './pages/manage-subject/manage-subject.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { SubjectListComponent } from './pages/subject-list/subject-list.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    ManageSubjectComponent,
    SubjectListComponent,
    DemoPageComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    AppCommonModule,
    FormsModule
  ]
})
export class TeacherModule { }
