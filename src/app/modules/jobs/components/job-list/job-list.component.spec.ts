import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { JobListComponent } from './job-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('JobListComponent', () => {
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
    }));

    it('should create the job list', () => {
        const fixture = TestBed.createComponent(JobListComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    //   it('should have a job list', () => {
    //     const bannerElement: HTMLElement = fixture.nativeElement;
    //     const p = bannerElement.querySelector('p');
    //     expect(p.textContent).toEqual('banner works!');
    //   });
});
