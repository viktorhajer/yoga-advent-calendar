import {Component, HostListener} from '@angular/core';
import {EventService} from './services/event.service';
import {QuoteModel} from './models/quote.model';
import {GOLDEN_TEACHING} from './repository/golden-teaching.db';
import {DialogService} from './services/dialog.service';
import {GOD_MODE} from './app.constant';
import {ThemeService} from './services/theme.service';
import {DocumentModel} from './models/document.model';
import {CALENDAR} from './repository/advent-calendar.db';
import {ActivatedRoute, Params} from '@angular/router';

const WINDOW_MIN_WIDTH = 1010;
const WINDOW_MIN_HEIGHT = 760;
const QUOTE_INTERVAL = 10000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allEnabled = true;
  randomQuotes: number[] = [0, 0, 0];
  quotes = GOLDEN_TEACHING;
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
    this.startQuoteInterval();
    this.startQuoteInterval(1, QUOTE_INTERVAL / 4);
    this.startQuoteInterval(2, QUOTE_INTERVAL / 2);
    if (this.supported && false) {
      this.dialogService.openWelcome();
    }
    this.activatedRoute.queryParams.subscribe(params => {
      const day = params['day'];
      if (day && Number(day) <= 24 && Number(day) > 0) {
        this.openDay(day);
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.initSupported();
  }

  initQuotes() {
    this.randomQuotes = this.eventService.getRandomNumbers(this.quotes.length);
  }

  openDay(day: number) {
    if (!this.isInactive(day)) {
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
    const now = new Date();
    return 2021 === now.getFullYear() && (11 === now.getMonth() && day > now.getDate()) || (11 > now.getMonth()) && !this.allEnabled;
  }

  isCurrentDay(day: number): boolean {
    const now = new Date();
    return 2021 === now.getFullYear() && (GOD_MODE ? 10 : 11) === now.getMonth() && day === now.getDate();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleEnable() {
    if (GOD_MODE) {
      this.allEnabled = !this.allEnabled;
    }
  }

  initSupported() {
    this.supported = window.innerWidth >= WINDOW_MIN_WIDTH && window.innerHeight >= WINDOW_MIN_HEIGHT;
  }

  private startQuoteInterval(index = 0, delay = 0) {
    setTimeout(() => {
      setInterval(() => {
        this.randomQuotes[index] = this.eventService.getRandomNumber(this.quotes.length, this.randomQuotes);
      }, QUOTE_INTERVAL);
    }, delay);
  }
}
