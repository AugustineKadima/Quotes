import { Component, OnInit } from '@angular/core';
import { QuoteModel } from '../quote-model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  addNewQuote(quote:QuoteModel){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
