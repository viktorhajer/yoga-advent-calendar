import {Component, HostListener} from '@angular/core';
import {EventService} from './services/event.service';
import {QuoteModel} from './models/quote.model';
import {DialogService} from './services/dialog.service';
import {ThemeService} from './services/theme.service';
import {DocumentModel} from './models/document.model';
import {CALENDAR} from './repository/advent-calendar.db';
import {ActivatedRoute} from '@angular/router';
import {ALL_ENABLED, WELCOME_DIALOG_END_DATE, OPEN_SCREEN_TEXT, QUOTE_DB, START_TIME} from './content.constant';

const WINDOW_MIN_WIDTH = 1000;
const WINDOW_MIN_HEIGHT = 700;
const QUOTE_INTERVAL = 10000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openScreenText = OPEN_SCREEN_TEXT;
  randomQuotes: number[] = [0, 0, 0];
  quotes = QUOTE_DB;
  supported = true;
  minWidth = WINDOW_MIN_WIDTH;
  minHeight = WINDOW_MIN_HEIGHT;
  days = [1, 6, 18, 20, 23, 15, 17, 21, 0, 7, 8, -1, 19, 9, 10, 13, 2, 3, 11, 4, 12, 5, 14, 22, 16, -2, 24];
  displayBoxTitle = true;

  constructor(private readonly eventService: EventService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly themeService: ThemeService,
              private readonly dialogService: DialogService) {
    this.initQuotes();
    this.initSupported();
    setTimeout(() => this.initWelcome(), 500);
  }

  openDay(day: number) {
    if (day > 0 && !this.isInactive(day)) {
      this.dialogService.openDay(day);
    }
  }

  getDay(day: number): DocumentModel {
    return CALENDAR[day - 1];
  }

  getQuote(quote = 0): QuoteModel {
    return this.quotes[quote];
  }

  isInactive(day: number): boolean {
    const now = this.getToday();
    const date = this.removeTime(START_TIME);
    date.setDate(START_TIME.getDate() + day - 1);
    return date > now && !ALL_ENABLED;
  }

  isCurrentDay(day: number): boolean {
    const now = this.getToday();
    const date = new Date(START_TIME);
    date.setDate(START_TIME.getDate() + day - 1);
    return this.formatDate(date) === this.formatDate(now);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  openWelcome() {
    this.dialogService.openWelcome();
  }

  getEncodedURL(): string {
    return encodeURIComponent(window.location.origin + window.location.pathname);
  }

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en', {dateStyle: 'short'}).format(date);
  }

  private initWelcome() {
    if (this.supported) {
      this.activatedRoute.queryParams.subscribe(params => {
        const day = params['day'];
        if (day && Number(day) <= 24 && Number(day) > 0) {
          this.openDay(day);
        } else if (this.removeTime(WELCOME_DIALOG_END_DATE) >= this.getToday()){
          this.openWelcome();
        }
      });
    } else {
      this.openDay(new Date().getDate());
    }
  }

  @HostListener('window:resize', ['$event'])
  private onResize() {
    this.initSupported();
  }

  private initSupported() {
    this.supported = window.innerWidth >= WINDOW_MIN_WIDTH && window.innerHeight >= WINDOW_MIN_HEIGHT;
  }

  private initQuotes() {
    this.randomQuotes = this.eventService.getRandomNumbers(this.quotes.length);
    this.startQuoteInterval();
    this.startQuoteInterval(1, QUOTE_INTERVAL / 4);
    this.startQuoteInterval(2, QUOTE_INTERVAL / 2);
  }

  private getToday(): Date {
    return this.removeTime(new Date());
  }

  private removeTime(date: Date): Date {
    return new Date(this.formatDate(date));
  }

  private startQuoteInterval(index = 0, delay = 0) {
    setTimeout(() => {
      setInterval(() => {
        this.randomQuotes[index] = this.eventService.getRandomNumber(this.quotes.length, this.randomQuotes);
      }, QUOTE_INTERVAL);
    }, delay);
  }
}
