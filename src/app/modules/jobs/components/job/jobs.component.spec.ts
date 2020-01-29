import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JobsComponent } from './jobs.component';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { JobTabsComponent } from '../job-tabs/job-tabs.component';

describe('JobsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        JobsComponent,
        JobTabsComponent
      ],
    }).compileComponents();
  }));

  it('should create the jobs component', () => {
    const fixture = TestBed.createComponent(JobsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
