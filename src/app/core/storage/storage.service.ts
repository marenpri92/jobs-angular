
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // jobs start
  private jobsList: BehaviorSubject<Job[]> = new BehaviorSubject([]);
  jobs = this.jobsList.asObservable();
  // jobs end
  private activeTab: BehaviorSubject<number> = new BehaviorSubject(0);
  tab = this.activeTab.asObservable();
  // methods
  getJobs() {
    return this.jobsList.value;
  }
  setJobs(jobs: Job[]) {
    this.jobsList.next(jobs);
  }
  getTab() {
    return this.activeTab.value;
  }
  setTab(tab: number) {
    this.activeTab.next(tab);
  }

  constructor() { }
  init() { }
}
