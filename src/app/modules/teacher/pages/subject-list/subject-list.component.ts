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
  pages: any = [];
  page = 0;
  size = 1;

  constructor(
    private subjectService: SubjectService
  ) {}


  ngOnInit(): void {
    this.findAllSubjects();
  }

  private findAllSubjects() {
    this.subjectService.findAllSubjects(this.page, this.size)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.subjects = data;
          this.pages = Array(this.subjects.totalPages)
            .fill(0)
            .map((x, i) => i);
        }
      });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllSubjects();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllSubjects();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllSubjects();
  }

  goToLastPage() {
    this.page = this.subjects.totalPages as number - 1;
    this.findAllSubjects();
  }

  goToNextPage() {
    this.page++;
    this.findAllSubjects();
  }

  get isLastPage() {
    return this.page === this.subjects.totalPages as number - 1;
  }

}
