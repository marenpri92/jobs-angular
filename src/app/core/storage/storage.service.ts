
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Job } from '../models/job.model';
import { JobService } from 'src/app/modules/jobs/jobs.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // jobs start
  private jobsList: BehaviorSubject<Job[]> = new BehaviorSubject([]);
  jobs = this.jobsList.asObservable();
  // jobs end

  // methods
  getJobs() {
    return this.jobsList.value;
  }
  setJobs(jobs: Job[]) {
    this.jobsList.next(jobs);
  }

  constructor() { }

  init() {
    console.log('lista store', this.jobs);
  }
}
