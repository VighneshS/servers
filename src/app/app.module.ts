import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import { Test1Directive } from './test1.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Test1Directive
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
