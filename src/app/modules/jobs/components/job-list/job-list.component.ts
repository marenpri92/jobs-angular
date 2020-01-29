import { Component, OnInit } from '@angular/core';

import { JobService } from '../../jobs.service';
import { Job } from '../../../../core/models/job.model';
import { StorageService } from '../../../../core/storage/storage.service';

@Component({
    selector: 'app-job-list',
    templateUrl: './job-list.component.html',
    styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
    displayedColumns: string[] = ['thumbnail', 'title', 'arrow'];
    jobList: Job[] = [];

    constructor(private jobService: JobService, private storageService: StorageService) { }
    ngOnInit() {
        this.jobService.getJobs().subscribe(j => {
            this.jobList = j['body'];
            this.storageService.setJobs(j['body']);
            this.applyFilter('state', 'active');
        });
    }
    applyFilter(filter: string, filterValue: string) {
        this.jobList = this.jobList.filter(job => job[filter] === filterValue);
    }
}
