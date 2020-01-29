import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JobsComponent } from './jobs.component';
import { SharedModule } from '../../../../modules/shared/shared.module';
import { JobTabsComponent } from '../job-tabs/job-tabs.component';

describe('JobsComponent', () => {
  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;
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
    fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;
  }));

  it('should create the jobs component', () => {
    expect(component).toBeTruthy();
  });
});
