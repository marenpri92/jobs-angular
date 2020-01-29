import { Component } from '@angular/core';

@Component({
    selector: 'app-job-tabs',
    templateUrl: 'job-tabs.component.html',
    // styleUrls: ['job-tabs.component.css']
})

export class JobTabsComponent {
    navLinks = [{
        path: '/job',
        label: 'Jobs list'
    }, {
        path: '5',
        label: 'Job details'
    }];
}
