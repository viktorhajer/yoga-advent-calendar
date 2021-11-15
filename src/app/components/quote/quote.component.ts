import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {QuoteModel} from '../../models/quote.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  animations: [
    trigger('changeText', [
      state('visible', style({
        opacity: 1,
      })),
      state('invisible', style({
        opacity: 0,
        color: 'transparent',
        left: '10px',
        textShadow: '0 0 8px #ee7266'
      })),
      transition('visible => invisible', [animate('500ms ease-out')]),
      transition('invisible => visible', [animate('500ms ease-in')]),
    ])
  ]
})
export class QuoteComponent implements OnChanges {
  @Input() quoteModel: QuoteModel = {content: ''};
  newQuote: QuoteModel = {content: ''};

  isVisible = false;

  ngOnChanges(changes: SimpleChanges) {
    this.isVisible = false;
    this.displayText();
  }

  openPage() {
    window.open('https://www.joga.hu/rolunk/a-gurulanc-oeroeksege/deep-narayan-mahaprabhuji', '_blank');
  }

  private displayText() {
    setTimeout(() => {
      this.newQuote = this.quoteModel;
      this.isVisible = true;
    }, 500);
  }
}

