import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubjectPageResponse } from 'src/app/models/subject-page-response';
import { SubjectRequest } from 'src/app/models/subject-request'
import { SubjectResponse } from 'src/app/models/subject-response';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  baseUrl : string = 'http//localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  saveSubject(subject: SubjectRequest) {
    return this.http.post<number>(`${this.baseUrl}/subjects`, subject);
  }

  findAllSubjects(page = 0, size = 4) {
    return this.http.get<SubjectPageResponse>(`${this.baseUrl}/subjects`,
      {
        params: {
          'page': page,
          'size': size
        }
      }
    );
  }

  findById(subjectId: number) {
    return this.http.get<SubjectResponse>(`${this.baseUrl}/subjects/${subjectId}`);
  }
}
