import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { JobTabsComponent } from './job-tabs.component';

describe('JobTabsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        JobTabsComponent,
      ],
    }).compileComponents();
  }));

  it('should create the job details', () => {
    const fixture = TestBed.createComponent(JobTabsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
