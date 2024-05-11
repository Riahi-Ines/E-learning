import { Component } from '@angular/core';
import { SubjectPageResponse } from 'src/app/models/subject-page-response';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent {
  subjects: SubjectPageResponse = {};

  constructor(
    private subjectService: SubjectService
  ) {}


  ngOnInit(): void {
    this.subjectService.findAllSubjects()
      .subscribe({
        next: (data) => {
          console.log(data);
          // this.subjects = data;
        }
      });
  }
}
