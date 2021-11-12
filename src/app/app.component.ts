import {Component} from '@angular/core';
import {EventService} from './services/event.service';
import {QUOTES} from './repository/quotes.db';
import {QuoteModel} from './models/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  randomQuotes: number[] = [];

  constructor(private readonly eventService: EventService) {
    this.initQuotes();
  }

  initQuotes() {
    this.randomQuotes = this.eventService.getRandomNumbers(QUOTES.length);
  }

  openDay(day: number) {
    this.eventService.openDay(day);
  }

  getQuote(index = 0): QuoteModel {
    return QUOTES[this.randomQuotes[index]]
  }
}
