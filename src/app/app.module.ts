import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DocumentDialogComponent} from './components/document-dialog/document-dialog.component';
import {SafeUrlPipe} from './components/safeurl.pipe';
import {QuoteComponent} from './components/quote/quote.component';
import {WelcomeDialogComponent} from './components/welcome-dialog/welcome-dialog.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {SpinnerComponent} from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentDialogComponent,
    WelcomeDialogComponent,
    QuoteComponent,
    SafeUrlPipe,
    SpinnerComponent
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
