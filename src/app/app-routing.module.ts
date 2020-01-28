import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/core/layout/layout.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'jobs', // module: Jobs
        loadChildren: './modules/jobs/jobs.module#JobsModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }