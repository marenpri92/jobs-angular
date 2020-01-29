import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/storage/storage.service';
import { Job } from 'src/app/core/models/job.model';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-job-details',
    templateUrl: './job-details.component.html',
    styleUrls: ['./job-details.component.scss']
})

export class JobDetailsComponent implements OnInit {
    job: Job;

    constructor(private storageService: StorageService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.storageService.jobs.subscribe(jobs =>
            this.job = jobs.find(j => j.id === id));
    }
}
