import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Job } from '../../core/models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseUrl = '';
  constructor(protected http: HttpClient) {
    this.baseUrl = `${environment.api}/jobs`;
  }

  public getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl);
  }
}
