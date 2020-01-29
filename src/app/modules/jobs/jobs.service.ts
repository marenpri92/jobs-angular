import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Job } from '../../core/models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseUrl = '';
  constructor(protected http: HttpClient) {
    this.baseUrl = `${environment.api}/job`;
  }

  public getJob(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl);
  }
}
