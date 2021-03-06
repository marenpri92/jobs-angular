import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../modules/shared/shared.module';
import { JobListComponent } from './job-list.component';

describe('JobListComponent', () => {
    let component: JobListComponent;
    let fixture: ComponentFixture<JobListComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                SharedModule,
                CommonModule,
                HttpClientModule
            ],
            declarations: [
                JobListComponent,
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(JobListComponent);
        component = fixture.componentInstance;
    }));

    it('should create the job list', () => {
        expect(component).toBeTruthy();
    });
});
