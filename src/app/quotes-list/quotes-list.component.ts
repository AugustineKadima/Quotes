import { Component, OnInit } from '@angular/core';
import { QuoteModel } from '../quote-model';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

 quotes:QuoteModel[] = [
    new QuoteModel(1, "Never give up", "Mohamed Ali", "Kadima"),
    new QuoteModel(2, "Arise and shine", "Joseph", "Cleophas")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
