import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DayDialogComponent} from './components/day-dialog/day-dialog.component';
import {SafeUrlPipe} from './components/safeurl.pipe';
import {QuoteComponent} from './components/quote/quote.component';
import {WelcomeDialogComponent} from './components/welcome-dialog/welcome-dialog.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    DayDialogComponent,
    WelcomeDialogComponent,
    QuoteComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{
      path: '**',
      component: AppComponent
    }], {relativeLinkResolution: 'legacy'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
