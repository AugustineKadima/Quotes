import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteModel } from '../quote-model';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  newQuote = new QuoteModel(0 ,"","", "", new Date(), 0, 0)
  @Output()  addQuote = new EventEmitter<QuoteModel>()

  submitQuote(){
    this.addQuote.emit(this.newQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
