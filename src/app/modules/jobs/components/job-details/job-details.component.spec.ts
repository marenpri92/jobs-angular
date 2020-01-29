import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JobDetailsComponent } from './job-details.component';
import { SharedModule } from '../../../../modules/shared/shared.module';

describe('JobDetailsComponent', () => {
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
  }));

  it('should create the job details', () => {
    const fixture = TestBed.createComponent(JobDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
