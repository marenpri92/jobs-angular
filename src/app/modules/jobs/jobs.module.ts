import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './components/job/jobs.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobTabsComponent } from './components/job-tabs/job-tabs.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';



@NgModule({
  declarations: [
    JobsComponent,
    JobTabsComponent,
    JobListComponent,
    JobDetailsComponent,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    MaterialModule
  ],
  exports: [
    JobsComponent
  ],
})
export class JobsModule { }
