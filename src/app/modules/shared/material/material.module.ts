import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  MatTableModule,
  MatIconModule,
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
  ],
})
export class MaterialModule { }
