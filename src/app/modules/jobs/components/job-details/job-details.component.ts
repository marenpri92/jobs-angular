import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StorageService } from '../../../../core/storage/storage.service';
import { Job } from '../../../../core/models/job.model';

@Component({
    selector: 'app-job-details',
    templateUrl: './job-details.component.html',
    styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
    job: Job;

    constructor(private storageService: StorageService, private route: ActivatedRoute) { }
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.storageService.jobs.subscribe(jobs =>
            this.job = jobs.find(j => j.id === id));
    }
}
