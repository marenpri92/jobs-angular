import { Component } from '@angular/core';
import { StorageService } from '../../../../core/storage/storage.service';

@Component({
    selector: 'app-job-tabs',
    templateUrl: 'job-tabs.component.html',
})
export class JobTabsComponent {
    isActive: number;
    navLinks = [{
        path: '/job',
        label: 'Jobs list',
        disabled: false,
        active: 0
    }, {
        path: ':id',
        label: 'Job details',
        disabled: true,
        active: 1
    }];
    constructor(private storageService: StorageService) {
        storageService.tab.subscribe(t => this.isActive = t);
        console.log(this.isActive)
    }
    setTab(num: number) {
        this.storageService.setTab(num);
    }
}
