import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../interfaces/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/Project/get-projects`;
  constructor(private http: HttpClient) { }

  getProject(): Observable<Project[]>{
    let response = this.http.get<Project[]>(this.apiUrl);
    return response;
  }

}