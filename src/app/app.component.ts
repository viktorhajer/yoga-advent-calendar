import {Component} from '@angular/core';
import {EventService} from './services/event.service';
import {QuoteModel} from './models/quote.model';
import {GOLDEN_TEACHING} from './repository/golden-teaching.db';
import {DialogService} from './services/dialog.service';
import {GOD_MODE} from './app.constant';

const QUOTE_INTERVAL = 10000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allEnabled = false;
  randomQuotes: number[] = [0, 0, 0];
  quotes = GOLDEN_TEACHING;

  constructor(private readonly eventService: EventService,
              private readonly dialogService: DialogService) {
    this.dialogService.openWelcome();
    this.initQuotes();
    this.startQuoteInterval();
    this.startQuoteInterval(1, QUOTE_INTERVAL / 4);
    this.startQuoteInterval(2, QUOTE_INTERVAL / 2);
  }

  initQuotes() {
    this.randomQuotes = this.eventService.getRandomNumbers(this.quotes.length);
  }

  openDay(day: number) {
    if (!this.isInactive(day)) {
      this.dialogService.openDay(day);
    }
  }

  getQuote(quote = 0): QuoteModel {
    return this.quotes[quote];
  }

  isInactive(day: number): boolean {
    const now = new Date();
    return 2021 === now.getFullYear() && (11 === now.getMonth() && day > now.getDate()) || (11 > now.getMonth()) && !this.allEnabled;
  }

  toggleEnable(){
    if (GOD_MODE) {
      this.allEnabled = !this.allEnabled;
    }
  }

  private startQuoteInterval(index = 0, delay = 0) {
    setTimeout(() => {
      setInterval(() => {
        this.randomQuotes[index] = this.eventService.getRandomNumber(this.quotes.length, this.randomQuotes);
      }, QUOTE_INTERVAL);
    }, delay);
  }
}
