import { Component, OnInit } from '@angular/core';
import { QuoteModel } from '../quote-model';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  newQuote = new QuoteModel(0 ,"","", "")
  constructor() { }

  ngOnInit(): void {
  }

}
