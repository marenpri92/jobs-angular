import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { JobTabsComponent } from './job-tabs.component';

describe('JobTabsComponent', () => {
  let component: JobTabsComponent;
  let fixture: ComponentFixture<JobTabsComponent>;
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
    fixture = TestBed.createComponent(JobTabsComponent);
    component = fixture.componentInstance;
  }));

  it('should create the job details', () => {
    expect(component).toBeTruthy();
  });
});
