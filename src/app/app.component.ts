import {Component} from '@angular/core';
import {EventService} from './services/event.service';
import {QuoteModel} from './models/quote.model';
import {GOLDEN_TEACHING} from './repository/golden-teaching.db';

const INTERVAL = 10000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  randomQuotes: number[] = [0, 0, 0];
  quotes = GOLDEN_TEACHING;

  constructor(private readonly eventService: EventService) {
    this.initQuotes();
    this.startQuoteInterval();
    this.startQuoteInterval(1, INTERVAL / 4);
    this.startQuoteInterval(2, INTERVAL / 2);
  }

  initQuotes() {
    this.randomQuotes = this.eventService.getRandomNumbers(this.quotes.length);
  }

  openDay(day: number) {
    if (!this.isInactive(day)) {
      this.eventService.openDay(day);
    }
  }

  getQuote(quote = 0): QuoteModel {
    return this.quotes[quote]
  }

  isInactive(day: number): boolean {
    const now = new Date();
    return 2021 === now.getFullYear() && 12 === (now.getMonth() + 1) && day > now.getDate();
  }

  private startQuoteInterval(index = 0, delay = 0) {
    setTimeout(() => {
      setInterval(() => {
        this.randomQuotes[index] = this.eventService.getRandomNumber(this.quotes.length, this.randomQuotes);
      }, INTERVAL);
    }, delay);
  }
}
