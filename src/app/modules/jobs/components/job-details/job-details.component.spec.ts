import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JobDetailsComponent } from './job-details.component';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { Job } from 'src/app/core/models/job.model';
import { DebugElement } from '@angular/core';

describe('JobDetailsComponent', () => {
  let component: JobDetailsComponent;
  let fixture: ComponentFixture<JobDetailsComponent>;
  let jobContainer: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        JobDetailsComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(JobDetailsComponent);
    component = fixture.componentInstance;
    jobContainer = fixture.nativeElement;
  }));

  it('should create the job details', () => {
    expect(component).toBeTruthy();
  });
  // it('should render with job data', () => {
  //   const job: Job = {
  //     id: '123',
  //     title: 'My title',
  //     city: 'Mi city',
  //     thumbnail: 'img',
  //     description: 'My description',
  //     state: 'active',
  //     created_at: new Date(),
  //     end_date: new Date(),
  //     counter: {
  //       messages_total: 1,
  //       messages_unread: 2
  //     },
  //   };
  //   expect(jobContainer.querySelector('[data-test-thumbnail]').textContent).toEqual(job.thumbnail);
  //   expect(jobContainer.querySelector('[data-test-title]').textContent).toEqual(job.title);
  //   expect(jobContainer.querySelector('[data-test-city]').textContent).toEqual(job.city);
  //   expect(jobContainer.querySelector('[data-test-description]').textContent).toEqual(job.description);
  // });
  it('should render without job data', () => {
    expect(jobContainer.querySelector('[data-test-thumbnail]')).toBe(null);
  });
});
