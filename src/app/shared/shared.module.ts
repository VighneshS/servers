import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankCheckDirective } from './blank-check.directive';

@NgModule({
  declarations: [BlankCheckDirective],
  exports: [
    BlankCheckDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
