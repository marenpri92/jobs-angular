import { Component } from '@angular/core';

@Component({
    selector: 'app-job-tabs',
    templateUrl: 'job-tabs.component.html',
})
export class JobTabsComponent {
    navLinks = [{
        path: '/job',
        label: 'Jobs list',
        disabled: false
    }, {
        path: ':id',
        label: 'Job details',
        disabled: true
    }];
}
