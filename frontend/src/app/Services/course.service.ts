import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class coursesService {

  private baseUrl = 'http://localhost:5022/api/Courses';

  constructor(private http: HttpClient) { }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  addcourse(course: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`,course);
  }
  deletecourse(courseId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${courseId}`);
  }

}
