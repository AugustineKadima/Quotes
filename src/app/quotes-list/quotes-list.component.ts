import { Component, OnInit } from '@angular/core';
import { QuoteModel } from '../quote-model';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

 quotes:QuoteModel[] = []

  addNewQuote(quote:QuoteModel){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor(private quotesService:QuotesService) { 
   
  }

  ngOnInit(): void {
    this.quotes = this.quotesService.getQuotes()
    console.log(this.quotes)
  }

}
