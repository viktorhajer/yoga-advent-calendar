import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogComponent} from './components/dialog/dialog.component';
import {SafeUrlPipe} from './components/safeurl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
